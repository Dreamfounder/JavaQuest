# JavaQuest Web

这是 JavaQuest 的纯静态网页版，可部署到 **GitHub Pages**。

## 功能

- 100 个教程关卡
- 30 个分支剧情（1–3 段编程挑战、复合条件结局）
- Java 8 主线 84 关（单线、唯一好结局）
- 自由编程工作台
- 对话：自动、加速、跳过、回看
- 故事树：只显示玩家实际到达过的节点
- 进度、代码保存在浏览器 `localStorage`

## 本地运行

网页需要 HTTP 服务，不能直接双击 `index.html` 打开。

```bash
cd web
npx http-server -p 8080
```

打开 `http://localhost:8080`。  
本地服务需要支持 Range 请求；CheerpJ 首次运行会下载 Java 运行时，可能需要几秒钟。`python -m http.server` 不保证支持 Range，建议用 `http-server` 或 `serve`。

## 部署到 GitHub Pages

仓库已包含 `.github/workflows/pages.yml`：

1. 把仓库推到 GitHub。
2. Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
3. push 到 `main` 后，工作流会把 `web/` 发布为 Pages。

网页不依赖后端；Java 代码在浏览器内通过 CheerpJ 执行，JAR 是 `javaquest-runtime.jar`。

## 重新生成执行 JAR / 数据

当 Java 运行时或课程数据变化时：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\web\build-web.ps1
```

它会：

- 编译 `app/src/.../runtime`、`app/src/.../data` 和 `web/java/.../WebApi.java`
- 生成 `web/javaquest-runtime.jar`
- 把三份 JSON 复制到 `web/data/`

## 技术说明

- 编辑器：CodeMirror 5（CDN）
- Java 执行：CheerpJ 5 的 library mode
- CheerpJ 由 Leaning Technologies 提供；本项目为个人/教育用途，页面保留 “Built with CheerpJ” 标识。商业部署请查看 CheerpJ 授权条款。

## 已知限制

- 浏览器端 Java 运行时首次加载较慢。
- 教学子集不是完整 Java SE；真实网络、JDBC、真实多线程仍然不支持。
- 课程内容、题目执行与 Android 版共用同一套 JSON 和教学运行时。
