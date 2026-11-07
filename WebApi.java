package com.javaquest.web;

import com.javaquest.learn.data.Json;
import com.javaquest.learn.runtime.CompiledProgram;
import com.javaquest.learn.runtime.Diagnostic;
import com.javaquest.learn.runtime.Engine;
import com.javaquest.learn.runtime.RunResult;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * JavaScript-facing facade for the Java teaching runtime. CheerpJ library
 * mode calls these static methods; everything stays in the browser.
 */
public final class WebApi {
    private WebApi() {
    }

    public static String version() {
        return "1.0";
    }

    public static String run(String code, String mode, String expected, String callsJson, String stdin) {
        try {
            CompiledProgram p = Engine.compile(code);
            if (!p.ok) {
                return compileFailure(p);
            }
            RunResult r;
            if ("calls".equals(mode)) {
                List<Engine.CallSpec> calls = new ArrayList<>();
                Object parsed = Json.parse(callsJson == null || callsJson.trim().isEmpty() ? "[]" : callsJson);
                for (Object o : Json.arr(parsed)) {
                    Map<String, Object> m = Json.obj(o);
                    calls.add(new Engine.CallSpec(Json.str(m, "name"), Json.str(m, "invoke"), Json.str(m, "expect")));
                }
                r = Engine.runCalls(p, calls, stdin == null ? "" : stdin);
            } else if ("free".equals(mode)) {
                r = Engine.freeRun(p, stdin == null ? "" : stdin);
            } else {
                r = Engine.run(p, stdin == null ? "" : stdin, expected == null ? "" : expected);
            }
            return resultJson(r);
        } catch (Throwable t) {
            return "{\"compiled\":false,\"passed\":false,\"compileMessage\":\""
                    + esc("运行器异常：" + t) + "\",\"tests\":[]}";
        }
    }

    private static String compileFailure(CompiledProgram p) {
        StringBuilder msg = new StringBuilder();
        for (Diagnostic d : p.diagnostics) {
            if (d.isError()) {
                if (msg.length() > 0) msg.append('\n');
                msg.append("第 ").append(d.line).append(" 行：").append(d.message);
            }
        }
        return "{\"compiled\":false,\"passed\":false,\"compileMessage\":\"" + esc(msg.toString())
                + "\",\"output\":\"\",\"error\":\"\",\"tests\":[]}";
    }

    private static String resultJson(RunResult r) {
        StringBuilder sb = new StringBuilder();
        sb.append("{\"compiled\":").append(r.compiled)
                .append(",\"passed\":").append(r.passed)
                .append(",\"output\":\"").append(esc(r.output)).append('"')
                .append(",\"error\":\"").append(esc(r.error)).append('"')
                .append(",\"compileMessage\":\"").append(esc(r.compileMessage)).append('"')
                .append(",\"tests\":[");
        for (int i = 0; i < r.tests.size(); i++) {
            if (i > 0) sb.append(',');
            RunResult.TestResult t = r.tests.get(i);
            sb.append("{\"name\":\"").append(esc(t.name)).append('"')
                    .append(",\"passed\":").append(t.passed)
                    .append(",\"expected\":\"").append(esc(t.expected)).append('"')
                    .append(",\"actual\":\"").append(esc(t.actual)).append('"')
                    .append(",\"message\":\"").append(esc(t.message)).append('"')
                    .append(",\"note\":\"").append(esc(t.note)).append("\"}");
        }
        sb.append("]}");
        return sb.toString();
    }

    private static String esc(String s) {
        if (s == null) return "";
        StringBuilder b = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '"': b.append("\\\""); break;
                case '\\': b.append("\\\\"); break;
                case '\n': b.append("\\n"); break;
                case '\r': b.append("\\r"); break;
                case '\t': b.append("\\t"); break;
                default:
                    if (c < 0x20) b.append(String.format("\\u%04x", (int) c));
                    else b.append(c);
            }
        }
        return b.toString();
    }
}
