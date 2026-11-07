window.JavaQuestData = {"lessons":{
  "version": 1,
  "chapters": [
    {
      "id": "ch01",
      "title": "Java 初体验",
      "subtitle": "从第一行输出开始，建立写程序的手感",
      "color": "#58C4A0",
      "lessons": [
        {
          "id": "hello",
          "title": "Hello, World!",
          "subtitle": "你的第一个 Java 程序",
          "difficulty": 1,
          "minutes": 8,
          "normal": "Java 程序由类（class）组织。一个可以直接运行的程序，必须有一个入口方法：\npublic static void main(String[] args)。JVM 会从这个方法开始执行。\nSystem.out.println(...) 表示“把括号里的内容打印到控制台，然后换行”。每条语句都要以英文分号 ; 结束。",
          "plain": "把 Java 想成一台需要说明书的机器：class 是外壳，main 是开机键，println 是喇叭。\n你按下开机键，机器就照着 main 里面的指令，把文字从喇叭里喊出来。",
          "task": "让程序在控制台输出一行：Hello, World!（注意大小写、逗号和感叹号；逗号后的空格不影响判定）。",
          "example": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
          "exampleOutput": "Hello, World!",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 System.out.println 输出 Hello, World!\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "Hello, World!",
          "className": "",
          "points": [
            "class 与 main 方法",
            "System.out.println",
            "字符串用双引号",
            "语句末尾的分号"
          ],
          "hints": [
            "输出语句的格式是 System.out.println(\"要输出的文字\");",
            "注意 println 全部小写，String 的 S 大写；分号不能少。",
            "完整写法：System.out.println(\"Hello, World!\");"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · JVM 守门人",
            "flavor": "第一道传送门前站着 JVM 守门人。他不看你写了多少行，只问一个问题：程序从哪里开始？",
            "prompt": "JVM 启动一个 Java 程序时，会先寻找哪个方法？",
            "options": [
              "main",
              "start",
              "run"
            ],
            "answer": 0,
            "explanation": "JVM 从 public static void main(String[] args) 开始执行；没有 main 就不能直接运行。",
            "badge": "「初体验」第一行代码",
            "xp": 20,
            "boss": false
          }
        },
        {
          "id": "print",
          "title": "print 与 println",
          "subtitle": "同一行输出和换行的区别",
          "difficulty": 1,
          "minutes": 8,
          "normal": "System.out.print(x) 输出后不换行，下一次输出会紧挨着它；System.out.println(x) 输出后会自动换行。\nprintln() 不带参数时只输出一个换行。字符串里的 \\n 也表示换行，\\t 表示一个制表符。",
          "plain": "print 像用笔接着写，不抬笔；println 像写完一行按了回车。\n想让两段文字贴在一起就用 print，想另起一行就用 println。",
          "task": "用一条 print 和一条 println，让控制台先输出 Java，再在下一行输出 Quest。",
          "example": "System.out.print(\"Java\");\nSystem.out.println();\nSystem.out.println(\"Quest\");",
          "exampleOutput": "Java\nQuest",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 第一行输出 Java，第二行输出 Quest\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Java\");\n        System.out.println();\n        System.out.println(\"Quest\");\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "Java\nQuest",
          "className": "",
          "points": [
            "print 不换行",
            "println 自动换行",
            "转义字符 \\n"
          ],
          "hints": [
            "先 print(\"Java\")，它不会自动换行。",
            "再调用一次 System.out.println(); 就能换行。",
            "最后 println(\"Quest\")。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "count=2000",
              "1*1=1",
              "Java"
            ],
            "answer": 2,
            "explanation": "参考输出是 `Java\\nQuest`。",
            "badge": "「Java 初体验」水晶收集者",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "comments",
          "title": "注释：写给人类看的说明",
          "subtitle": "// 与 /* */",
          "difficulty": 1,
          "minutes": 6,
          "normal": "注释是给人阅读的说明，编译器会完全忽略。单行注释以 // 开始，到本行结束；\n多行注释以 /* 开始、以 */ 结束。注释不会影响程序输出，也不占用运行时间。",
          "plain": "注释就像贴在代码旁边的便利贴，电脑看不见，只有你和同学能看见。\n写注释是为了让未来的自己少挠头。",
          "task": "保留代码中的注释，让程序只输出一行：注释不会运行。",
          "example": "// 这是单行注释\n/* 这是\n   多行注释 */\nSystem.out.println(\"注释不会运行\");",
          "exampleOutput": "注释不会运行",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // 这是一条单行注释\n        /* 这是一段\n           多行注释 */\n        // TODO: 输出 注释不会运行\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        // 这是一条单行注释\n        /* 这是一段\n           多行注释 */\n        System.out.println(\"注释不会运行\");\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "注释不会运行",
          "className": "",
          "points": [
            "// 单行注释",
            "/* */ 多行注释",
            "注释不影响输出"
          ],
          "hints": [
            "注释可以随便写，但不会变成输出。",
            "真正负责输出的仍然是 System.out.println。",
            "输出文字：注释不会运行"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "注释不会运行",
              "Hi Java",
              "3.14 100"
            ],
            "answer": 0,
            "explanation": "参考输出是 `注释不会运行`。",
            "badge": "「Java 初体验」寻宝人",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "variables",
          "title": "变量：给数据起名字",
          "subtitle": "声明、赋值、使用",
          "difficulty": 1,
          "minutes": 10,
          "normal": "变量是内存中一块有名字的空间。声明变量要写类型和名字，例如 int age = 18;。\n= 在这里是“赋值”，不是数学里的相等。变量可以被重新赋值，后赋的值会覆盖旧值。\nJava 是强类型语言：变量声明成 int，就只能装整数。变量的类型在编译期就确定，不能随便换成另一种类型。",
          "plain": "变量就像贴了标签的盒子：盒子上写 age，里面放 18。\n你可以把里面的东西换成 19，但盒子是 int 牌子的，就不能塞进一句“你好”。",
          "task": "声明名字和年龄两个变量，把年龄加 1，然后输出：小明 19。",
          "example": "String name = \"小明\";\nint age = 18;\nage = age + 1;\nSystem.out.println(name + \" \" + age);",
          "exampleOutput": "小明 19",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String name = \"小明\";\n        int age = 18;\n        // TODO: 让 age 变成 19，然后输出 name + 空格 + age\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String name = \"小明\";\n        int age = 18;\n        age = age + 1;\n        System.out.println(name + \" \" + age);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "小明 19",
          "className": "",
          "points": [
            "变量声明",
            "赋值与重新赋值",
            "String 与 int",
            "字符串拼接 +"
          ],
          "hints": [
            "重新赋值：age = age + 1; 或者 age++;",
            "输出时用 + 把 name、一个空格字符串、age 拼起来。",
            "System.out.println(name + \" \" + age);"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "3 5 9",
              "count=2000",
              "小明 19"
            ],
            "answer": 2,
            "explanation": "参考输出是 `小明 19`。",
            "badge": "「Java 初体验」水晶收集者",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "types",
          "title": "八种基本数据类型",
          "subtitle": "整数、小数、字符、布尔",
          "difficulty": 2,
          "minutes": 12,
          "normal": "Java 有 8 种基本类型：byte、short、int、long 是整数；float、double 是小数；char 是单个字符；boolean 只有 true/false。\nint 是最常用的整数类型，double 是最常用的小数类型。long 字面量要加 L，float 字面量要加 f。\nchar 用单引号，字符串 String 用双引号，两者不要混。",
          "plain": "基本类型就是 Java 的八种“容器规格”：有的装小整数，有的装大整数，有的装小数，有的只能装一个字或者 true/false。\n选错容器会装不下，所以先认识它们。",
          "task": "分别声明 byte、short、int、long、float、double、char、boolean 各一个变量，按示例格式输出。",
          "example": "byte b = 1;\nshort s = 2;\nint i = 3;\nlong l = 4L;\nfloat f = 1.5f;\ndouble d = 2.5;\nchar c = 'A';\nboolean ok = true;\nSystem.out.println(b + \" \" + s + \" \" + i + \" \" + l);\nSystem.out.println(f + \" \" + d + \" \" + c + \" \" + ok);",
          "exampleOutput": "1 2 3 4\n1.5 2.5 A true",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 声明 8 种基本类型并输出\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        byte b = 1;\n        short s = 2;\n        int i = 3;\n        long l = 4L;\n        float f = 1.5f;\n        double d = 2.5;\n        char c = 'A';\n        boolean ok = true;\n        System.out.println(b + \" \" + s + \" \" + i + \" \" + l);\n        System.out.println(f + \" \" + d + \" \" + c + \" \" + ok);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "1 2 3 4\n1.5 2.5 A true",
          "className": "",
          "points": [
            "8 种基本类型",
            "long 的 L 后缀",
            "float 的 f 后缀",
            "char 用单引号"
          ],
          "hints": [
            "每个变量都要先写类型，再写名字。",
            "long 后面加 L，float 后面加 f，char 用单引号。",
            "第一行输出 1 2 3 4，第二行输出 1.5 2.5 A true。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "算错了",
              "1 2 3 4",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `1 2 3 4\\n1.5 2.5 A true`。",
            "badge": "「Java 初体验」屠龙者",
            "xp": 36,
            "boss": true
          }
        },
        {
          "id": "casting",
          "title": "类型转换",
          "subtitle": "自动提升与强制转换",
          "difficulty": 2,
          "minutes": 12,
          "normal": "小范围类型可以自动转换成大范围类型，例如 int → long → double，这叫自动类型提升。\n大范围转小范围必须强制转换，语法是在值前面写目标类型： (int) 3.9。强制转换会直接截断小数部分，不会四舍五入。\nchar 本质上是一个 16 位无符号整数，所以 char 可以转成 int 得到字符编码。",
          "plain": "小杯子里的水倒进大杯子，安全，自动完成；大杯子倒进小杯子，可能洒出来，所以要你亲自动手并承担后果。\n3.9 强转成 int 后是 3，后面的 .9 直接被砍掉。",
          "task": "把 int 转成 double，把 3.9 强转成 int，把字符 'A' 转成整数编码，输出：7.0 3 65。",
          "example": "int a = 7;\ndouble d = a;\nint b = (int) 3.9;\nchar c = 'A';\nint code = c;\nSystem.out.println(d + \" \" + b + \" \" + code);",
          "exampleOutput": "7.0 3 65",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 7;\n        // TODO: 转成 double；把 3.9 强转成 int；把 'A' 转成 int\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 7;\n        double d = a;\n        int b = (int) 3.9;\n        char c = 'A';\n        int code = c;\n        System.out.println(d + \" \" + b + \" \" + code);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "7.0 3 65",
          "className": "",
          "points": [
            "自动类型提升",
            "强制类型转换",
            "(int) 截断小数",
            "char 与 int"
          ],
          "hints": [
            "double d = a; 会自动提升。",
            "int b = (int) 3.9; 会得到 3。",
            "int code = c; 会得到字符 A 的编码 65。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "13 7 30 3 1",
              "7.0 3 65",
              "3.14 100"
            ],
            "answer": 1,
            "explanation": "参考输出是 `7.0 3 65`。",
            "badge": "「Java 初体验」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "constants",
          "title": "常量与命名规范",
          "subtitle": "final、全大写、见名知意",
          "difficulty": 1,
          "minutes": 8,
          "normal": "用 final 修饰的变量只能赋值一次，称为常量。常量名习惯全部大写，多个单词用下划线分隔，例如 MAX_SIZE。\n变量名使用小驼峰：firstName；类名使用大驼峰：StudentScore。名字要能表达含义，不要用 a、b、c 凑数。",
          "plain": "常量就是写死之后不许改的标签，比如圆周率 3.14。\n给它起名 PI 而不是 p，是为了三个月后的你还能一眼看懂。",
          "task": "声明常量 PI = 3.14 和 MAX_SCORE = 100，输出：3.14 100。",
          "example": "final double PI = 3.14;\nfinal int MAX_SCORE = 100;\nSystem.out.println(PI + \" \" + MAX_SCORE);",
          "exampleOutput": "3.14 100",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 声明两个 final 常量并输出\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        final double PI = 3.14;\n        final int MAX_SCORE = 100;\n        System.out.println(PI + \" \" + MAX_SCORE);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "3.14 100",
          "className": "",
          "points": [
            "final 常量",
            "常量命名全大写",
            "小驼峰与大驼峰"
          ],
          "hints": [
            "语法：final 类型 名字 = 值;",
            "常量名建议全大写：PI、MAX_SCORE。",
            "输出时用 + 和空格连接两个常量。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "3 5 9",
              "5",
              "3.14 100"
            ],
            "answer": 2,
            "explanation": "参考输出是 `3.14 100`。",
            "badge": "「Java 初体验」水晶收集者",
            "xp": 15,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch02",
      "title": "运算符与输入",
      "subtitle": "让程序会算、会比、会听你说话",
      "color": "#6FB8FF",
      "lessons": [
        {
          "id": "arithmetic",
          "title": "算术运算符",
          "subtitle": "加减乘除与取余",
          "difficulty": 1,
          "minutes": 10,
          "normal": "算术运算符包括 +、-、*、/、%。两个整数相除，结果仍然是整数，小数部分会被直接舍去；\n例如 10 / 3 得到 3。% 是取余数，10 % 3 得到 1。乘除的优先级高于加减，括号可以改变顺序。",
          "plain": "Java 做整数除法很“狠”：10 块糖分给 3 个人，每人 3 块，剩下的 1 块就是余数。\n想得到 3.333 这样的小数，得让其中一边变成小数，例如 10 / 3.0。",
          "task": "已知 a = 10、b = 3，依次输出它们的和、差、积、商、余数，用空格分隔。",
          "example": "int a = 10, b = 3;\nSystem.out.println((a + b) + \" \" + (a - b) + \" \" + (a * b) + \" \" + (a / b) + \" \" + (a % b));",
          "exampleOutput": "13 7 30 3 1",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        // TODO: 输出 和 差 积 商 余数\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        System.out.println((a + b) + \" \" + (a - b) + \" \" + (a * b) + \" \" + (a / b) + \" \" + (a % b));\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "13 7 30 3 1",
          "className": "",
          "points": [
            "+ - * / %",
            "整数除法截断",
            "运算优先级",
            "括号"
          ],
          "hints": [
            "和是 a + b，差是 a - b，积是 a * b。",
            "整数商是 a / b，余数是 a % b。",
            "拼接多个值时，建议给每个算式加括号，避免 + 被当成字符串拼接。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "[1, 2, 3] 1",
              "13 7 30 3 1",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `13 7 30 3 1`。",
            "badge": "「运算符与输入」水晶收集者",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "increment",
          "title": "自增与自减",
          "subtitle": "++ 放在前面和后面的区别",
          "difficulty": 2,
          "minutes": 10,
          "normal": "++ 让变量加 1，-- 让变量减 1。i++ 是后置：先使用旧值，再加 1；++i 是前置：先加 1，再使用新值。\n单独写一行 i++; 时，两种写法结果一样；只有把表达式的结果赋给别人时，区别才明显。",
          "plain": "i++ 像“先拍照再长高”：照片里是旧身高；++i 像“先长高再拍照”：照片里已经是新身高。\n如果只是让 i 加 1，不用纠结，写 i++ 就行。",
          "task": "阅读并补全程序，输出 a、b、i 的值：5 7 7。",
          "example": "int i = 5;\nint a = i++;\nint b = ++i;\nSystem.out.println(a + \" \" + b + \" \" + i);",
          "exampleOutput": "5 7 7",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        int a = i++;   // 先赋值再自增\n        int b = ++i;   // 先自增再赋值\n        // TODO: 输出 a、b、i\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        int a = i++;\n        int b = ++i;\n        System.out.println(a + \" \" + b + \" \" + i);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "5 7 7",
          "className": "",
          "points": [
            "i++ 后置",
            "++i 前置",
            "副作用",
            "表达式求值顺序"
          ],
          "hints": [
            "i++ 把 5 赋给 a 后，i 变成 6。",
            "++i 先把 i 变成 7，再把 7 赋给 b。",
            "最后 i 也是 7，所以输出 5 7 7。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "7.0 3 65",
              "try",
              "5 7 7"
            ],
            "answer": 2,
            "explanation": "参考输出是 `5 7 7`。",
            "badge": "「运算符与输入」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "assignment",
          "title": "赋值与复合赋值",
          "subtitle": "+=、-=、*=、/=、%=",
          "difficulty": 1,
          "minutes": 8,
          "normal": "复合赋值把“运算”和“赋值”合成一步：x += 5 等价于 x = x + 5。\n-=、*=、/=、%= 同理。它们会先计算右边，再把结果写回左边的变量。",
          "plain": "x += 5 就像往存钱罐里再塞 5 块，不用把“存钱罐 = 存钱罐 + 5”完整说一遍。\n写起来短，意思完全一样。",
          "task": "从 x = 10 开始，依次执行 +=5、*=2、-=3、/=2，输出最终的 x。",
          "example": "int x = 10;\nx += 5;  // 15\nx *= 2;  // 30\nx -= 3;  // 27\nx /= 2;  // 13\nSystem.out.println(x);",
          "exampleOutput": "13",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        // TODO: 依次 +=5、*=2、-=3、/=2\n\n        System.out.println(x);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        x += 5;\n        x *= 2;\n        x -= 3;\n        x /= 2;\n        System.out.println(x);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "13",
          "className": "",
          "points": [
            "复合赋值",
            "运算顺序",
            "整数除法"
          ],
          "hints": [
            "x += 5 之后是 15。",
            "15 * 2 = 30，30 - 3 = 27。",
            "27 / 2 是整数除法，结果是 13。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "70 80",
              "13",
              "3 5 9"
            ],
            "answer": 1,
            "explanation": "参考输出是 `13`。",
            "badge": "「运算符与输入」屠龙者",
            "xp": 33,
            "boss": true
          }
        },
        {
          "id": "logic",
          "title": "比较与逻辑运算",
          "subtitle": ">、<、==、&&、||、!",
          "difficulty": 1,
          "minutes": 12,
          "normal": "比较运算符返回 boolean：>、<、>=、<=、==、!=。注意判断相等是两个等号 ==，一个等号是赋值。\n&& 表示“并且”，两边都为 true 才为 true；|| 表示“或者”，只要一边为 true 就为 true；! 表示取反。\n&& 和 || 具有短路特性：左边已经能决定结果时，右边不会执行。",
          "plain": "&& 像“两个条件都要打卡”，|| 像“满足一个就能进门”，! 像“反着来”。\n== 是问“相等吗”，= 是“把右边装进左边”，别写错。",
          "task": "age = 20、hasTicket = true。输出三个结果：能进场（age>=18 且 hasTicket）、有优惠（age<18 或 hasTicket）、没票（!hasTicket）。",
          "example": "int age = 20;\nboolean hasTicket = true;\nSystem.out.println(age >= 18 && hasTicket);\nSystem.out.println(age < 18 || hasTicket);\nSystem.out.println(!hasTicket);",
          "exampleOutput": "true\ntrue\nfalse",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasTicket = true;\n        // TODO: 输出三个布尔结果\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasTicket = true;\n        System.out.println(age >= 18 && hasTicket);\n        System.out.println(age < 18 || hasTicket);\n        System.out.println(!hasTicket);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "true\ntrue\nfalse",
          "className": "",
          "points": [
            "比较运算符",
            "== 与 = 的区别",
            "&& || !",
            "短路求值"
          ],
          "hints": [
            "“能进场”= age >= 18 && hasTicket。",
            "“有优惠”= age < 18 || hasTicket。",
            "“没票”= !hasTicket。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "注释不会运行",
              "true",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `true\\ntrue\\nfalse`。",
            "badge": "「运算符与输入」水晶收集者",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "bitwise",
          "title": "位运算",
          "subtitle": "二进制层面的 &、|、^、~、<<、>>",
          "difficulty": 3,
          "minutes": 15,
          "normal": "位运算直接操作整数的二进制位：& 按位与，| 按位或，^ 按位异或，~ 按位取反；<< 左移，>> 带符号右移。\n左移一位通常相当于乘 2，右移一位通常相当于除以 2（负数要小心）。位运算在权限、哈希、底层优化中很常见。",
          "plain": "把数字想成一排小灯泡，1 是亮、0 是灭。位运算就是同时看两排灯泡，按规则决定新灯泡亮不亮。\n初学阶段先会算 5 & 3 这种小题即可，不必一开始就背所有技巧。",
          "task": "计算 5 & 3、5 | 3、5 ^ 3、~5、5 << 1、5 >> 1，用空格输出。",
          "example": "int a = 5; // 0101\nSystem.out.println((a & 3) + \" \" + (a | 3) + \" \" + (a ^ 3) + \" \" + (~a) + \" \" + (a << 1) + \" \" + (a >> 1));",
          "exampleOutput": "1 7 6 -6 10 2",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        // TODO: 输出 6 个位运算结果\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println((a & 3) + \" \" + (a | 3) + \" \" + (a ^ 3) + \" \" + (~a) + \" \" + (a << 1) + \" \" + (a >> 1));\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "1 7 6 -6 10 2",
          "className": "",
          "points": [
            "二进制",
            "按位与/或/异或",
            "取反",
            "左移与右移"
          ],
          "hints": [
            "5 的二进制是 0101，3 是 0011。",
            "& 得到 0001，| 得到 0111，^ 得到 0110。",
            "~5 是 -6；5 << 1 是 10；5 >> 1 是 2。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "1 7 6 -6 10 2",
              "13",
              "7.0 3 65"
            ],
            "answer": 0,
            "explanation": "参考输出是 `1 7 6 -6 10 2`。",
            "badge": "「运算符与输入」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "ternary",
          "title": "三元运算符",
          "subtitle": "一行写完 if-else",
          "difficulty": 2,
          "minutes": 8,
          "normal": "三元运算符的语法是：条件 ? 值1 : 值2。条件为 true 时返回值1，否则返回值2。\n它适合两个分支都很短、且需要“得到一个值”的场景。分支逻辑复杂时，还是用 if-else 更清楚。",
          "plain": "三元运算就像岔路口：条件成立走左边，不成立走右边，最后都汇合到一个结果。\n“是偶数吗？是就写偶数，不是就写奇数。”一句话就能说完。",
          "task": "实现 check(int n)：偶数返回“偶数”，奇数返回“奇数”。测试会调用 check(4) 和 check(7)。",
          "example": "static String check(int n) {\n    return n % 2 == 0 ? \"偶数\" : \"奇数\";\n}",
          "exampleOutput": "check(4) → 偶数",
          "starter": "public class Main {\n    static String check(int n) {\n        // TODO: 用三元运算符返回 偶数 或 奇数\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String check(int n) {\n        return n % 2 == 0 ? \"偶数\" : \"奇数\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "条件 ? A : B",
            "返回 boolean 的表达式",
            "与 if-else 的取舍"
          ],
          "hints": [
            "偶数的判断条件是 n % 2 == 0。",
            "语法：条件 ? 真时的值 : 假时的值。",
            "return n % 2 == 0 ? \"偶数\" : \"奇数\";"
          ],
          "calls": [
            {
              "name": "check",
              "invoke": "check(4)",
              "expect": "偶数"
            },
            {
              "name": "check",
              "invoke": "check(7)",
              "expect": "奇数"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `check(4)` 后，返回值/结果是什么？",
            "options": [
              "4.0",
              "25",
              "偶数"
            ],
            "answer": 2,
            "explanation": "参考答案：`check(4)` 的结果是 `偶数`。",
            "badge": "「运算符与输入」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "scanner",
          "title": "控制台输入 Scanner",
          "subtitle": "让程序读取你输入的内容",
          "difficulty": 2,
          "minutes": 12,
          "normal": "Scanner 可以读取键盘输入。创建对象：Scanner sc = new Scanner(System.in);。\nnext() 读取一个单词（遇到空格或换行停止），nextLine() 读取一整行，nextInt() 读取一个整数。\n读取前通常用 import java.util.*; 导入 Scanner 所在的包。",
          "plain": "Scanner 像程序伸出的一只手：你输入什么，它就抓什么。\nnext() 抓一个词，nextLine() 抓一整行，nextInt() 只抓整数。抓完记得 close()。",
          "task": "读取一行中的姓名和年龄（用空格分隔），输出：你好, 小明! 明年你 19 岁。",
          "example": "Scanner sc = new Scanner(System.in);\nString name = sc.next();\nint age = sc.nextInt();\nSystem.out.println(\"你好, \" + name + \"! 明年你 \" + (age + 1) + \" 岁。\");\nsc.close();",
          "exampleOutput": "输入：小明 18\n输出：你好, 小明! 明年你 19 岁。",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // TODO: 读取姓名和年龄，按格式输出\n\n        sc.close();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.next();\n        int age = sc.nextInt();\n        System.out.println(\"你好, \" + name + \"! 明年你 \" + (age + 1) + \" 岁。\");\n        sc.close();\n    }\n}",
          "mode": "output",
          "stdin": "小明 18",
          "expected": "你好, 小明! 明年你 19 岁。",
          "className": "",
          "points": [
            "new Scanner(System.in)",
            "next 与 nextInt",
            "import java.util.*",
            "close"
          ],
          "hints": [
            "姓名用 sc.next()，年龄用 sc.nextInt()。",
            "输出时注意中文逗号、感叹号和句号的位置。",
            "明年年龄是 age + 1，记得加括号。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "count=2000",
              "2 59",
              "你好, 小明! 明年你 19 岁。"
            ],
            "answer": 2,
            "explanation": "参考输出是 `你好, 小明! 明年你 19 岁。`。",
            "badge": "「运算符与输入」水晶收集者",
            "xp": 18,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch03",
      "title": "流程控制",
      "subtitle": "让程序学会选择、重复和跳出",
      "color": "#FFB86B",
      "lessons": [
        {
          "id": "if",
          "title": "if 与 else",
          "subtitle": "让程序做选择",
          "difficulty": 1,
          "minutes": 10,
          "normal": "if 后面跟一个 boolean 表达式，条件为 true 时执行大括号里的代码；否则执行 else 分支。\n即使只有一行代码，也建议保留大括号，能避免以后加代码时出现作用域错误。",
          "plain": "if 就是“如果……就……”，else 是“否则……”。\n程序走到岔路口，看一眼条件，再决定往哪边走。",
          "task": "实现 max(int a, int b)，返回较大的那个数。测试会调用 max(3,7) 和 max(9,2)。",
          "example": "static int max(int a, int b) {\n    if (a > b) {\n        return a;\n    } else {\n        return b;\n    }\n}",
          "exampleOutput": "max(3,7) → 7",
          "starter": "public class Main {\n    static int max(int a, int b) {\n        // TODO: 返回较大的数\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int max(int a, int b) {\n        if (a > b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "if (条件)",
            "else",
            "return 提前结束方法",
            "比较两个数"
          ],
          "hints": [
            "比较 a 和 b 的大小：a > b。",
            "条件成立返回 a，否则返回 b。",
            "两个 return 只会执行其中一个。"
          ],
          "calls": [
            {
              "name": "max",
              "invoke": "max(3,7)",
              "expect": "7"
            },
            {
              "name": "max",
              "invoke": "max(9,2)",
              "expect": "9"
            },
            {
              "name": "max",
              "invoke": "max(5,5)",
              "expect": "5"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `max(3,7)` 后，返回值/结果是什么？",
            "options": [
              "7",
              "100",
              "5.0"
            ],
            "answer": 0,
            "explanation": "参考答案：`max(3,7)` 的结果是 `7`。",
            "badge": "「流程控制」屠龙者",
            "xp": 33,
            "boss": true
          }
        },
        {
          "id": "else-if",
          "title": "else if 多分支",
          "subtitle": "成绩等级这样判断",
          "difficulty": 2,
          "minutes": 10,
          "normal": "多个互斥条件可以用 else if 串起来，程序从上往下判断，命中一个分支后就不再检查后面的条件。\n条件的顺序很重要：先判断范围更窄、要求更高的条件，再判断更宽泛的条件。",
          "plain": "else if 像一排筛子，从上往下筛：先筛 90 分以上的，再筛 80 分以上的……\n一旦被某一层筛中，就直接走人，不会再往下掉。",
          "task": "实现 grade(int score)：90 分及以上返回 A，80 分及以上返回 B，60 分及以上返回 C，其余返回 D。",
          "example": "static String grade(int score) {\n    if (score >= 90) return \"A\";\n    else if (score >= 80) return \"B\";\n    else if (score >= 60) return \"C\";\n    else return \"D\";\n}",
          "exampleOutput": "grade(85) → B",
          "starter": "public class Main {\n    static String grade(int score) {\n        // TODO: 按分数返回 A/B/C/D\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String grade(int score) {\n        if (score >= 90) return \"A\";\n        else if (score >= 80) return \"B\";\n        else if (score >= 60) return \"C\";\n        else return \"D\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "else if 链",
            "条件顺序",
            "互斥分支",
            "边界值"
          ],
          "hints": [
            "从高分往低分判断，顺序不能反。",
            "90 及以上、80 及以上、60 及以上，最后 else。",
            "注意 >= 和 > 的区别，90 分本身应该是 A。"
          ],
          "calls": [
            {
              "name": "grade",
              "invoke": "grade(95)",
              "expect": "A"
            },
            {
              "name": "grade",
              "invoke": "grade(90)",
              "expect": "A"
            },
            {
              "name": "grade",
              "invoke": "grade(85)",
              "expect": "B"
            },
            {
              "name": "grade",
              "invoke": "grade(60)",
              "expect": "C"
            },
            {
              "name": "grade",
              "invoke": "grade(59)",
              "expect": "D"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `grade(95)` 后，返回值/结果是什么？",
            "options": [
              "4",
              "你好, Java",
              "A"
            ],
            "answer": 2,
            "explanation": "参考答案：`grade(95)` 的结果是 `A`。",
            "badge": "「流程控制」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "switch",
          "title": "switch 多路分支",
          "subtitle": "一个值，多个固定选项",
          "difficulty": 2,
          "minutes": 12,
          "normal": "switch 根据一个表达式的值跳转到匹配的 case。case 后面通常是常量，break 用来结束当前分支。\n如果忘记写 break，程序会继续执行下一个 case，这叫“穿透”（fall-through），有时是故意利用，有时是 bug。\nJDK 14 之后还可以用箭头写法 case 1 -> ...，更简洁且不会穿透。",
          "plain": "switch 像电梯：你按几楼，它就去几楼。break 是“到了就停”，不写就会继续往上跑。\n固定选项多、if-else 太长时，switch 会更整齐。",
          "task": "实现 dayName(int day)：1 返回“周一”，2 返回“周二”，3 返回“周三”，其他返回“未知”。",
          "example": "static String dayName(int day) {\n    switch (day) {\n        case 1: return \"周一\";\n        case 2: return \"周二\";\n        case 3: return \"周三\";\n        default: return \"未知\";\n    }\n}",
          "exampleOutput": "dayName(2) → 周二",
          "starter": "public class Main {\n    static String dayName(int day) {\n        // TODO: 用 switch 返回对应星期\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String dayName(int day) {\n        switch (day) {\n            case 1: return \"周一\";\n            case 2: return \"周二\";\n            case 3: return \"周三\";\n            default: return \"未知\";\n        }\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "switch / case",
            "break 防止穿透",
            "default",
            "箭头 case"
          ],
          "hints": [
            "switch (day) 后面跟大括号和 case。",
            "每个 case 返回后就不需要 break 了，因为 return 已经离开方法。",
            "别忘了 default 处理其他值。"
          ],
          "calls": [
            {
              "name": "dayName",
              "invoke": "dayName(1)",
              "expect": "周一"
            },
            {
              "name": "dayName",
              "invoke": "dayName(3)",
              "expect": "周三"
            },
            {
              "name": "dayName",
              "invoke": "dayName(9)",
              "expect": "未知"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `dayName(1)` 后，返回值/结果是什么？",
            "options": [
              "x",
              "周一",
              "2 2 2 9"
            ],
            "answer": 1,
            "explanation": "参考答案：`dayName(1)` 的结果是 `周一`。",
            "badge": "「流程控制」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "for",
          "title": "for 循环",
          "subtitle": "知道要循环几次时最好用",
          "difficulty": 1,
          "minutes": 10,
          "normal": "for 循环的三段式是：初始化; 条件; 更新。初始化只执行一次，条件每轮开始前检查，更新在每轮结束后执行。\n循环变量通常用 i、j、k，作用域只在这个 for 循环内部。",
          "plain": "for 像跑步机：先设定起点，再判断有没有到终点，跑完一圈就加一步。\n知道要跑几圈时，用 for 最省事。",
          "task": "用 for 循环计算 1 到 100 的和，并输出结果。",
          "example": "int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    sum += i;\n}\nSystem.out.println(sum);",
          "exampleOutput": "5050",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO: 用 for 累加 1 到 100\n\n        System.out.println(sum);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "5050",
          "className": "",
          "points": [
            "for 三段式",
            "循环变量作用域",
            "累加器",
            "1 到 100"
          ],
          "hints": [
            "循环变量从 1 开始，条件是 i <= 100。",
            "每轮把 i 加到 sum 上：sum += i。",
            "最后输出 sum，应该是 5050。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "5050",
              "你好, 小明! 明年你 19 岁。",
              "7.0 3 65"
            ],
            "answer": 0,
            "explanation": "参考输出是 `5050`。",
            "badge": "「流程控制」寻宝人",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "while",
          "title": "while 循环",
          "subtitle": "条件成立就一直做",
          "difficulty": 1,
          "minutes": 10,
          "normal": "while (条件) 会在条件为 true 时反复执行循环体，直到条件变为 false。\n使用 while 时，循环体里一定要有让条件最终变假的语句，否则会死循环。",
          "plain": "while 像“只要锅里还有饭，就继续吃”。\n如果永远不把饭吃完，就会一直吃下去——程序里的死循环就是这样。",
          "task": "用 while 统计整数 12345 有多少位，输出 5。",
          "example": "int n = 12345;\nint count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}\nSystem.out.println(count);",
          "exampleOutput": "5",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        // TODO: 用 while 数位数\n\n        System.out.println(count);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        while (n > 0) {\n            count++;\n            n /= 10;\n        }\n        System.out.println(count);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "5",
          "className": "",
          "points": [
            "while 条件",
            "循环变量更新",
            "整数除法 / 10",
            "避免死循环"
          ],
          "hints": [
            "每除一次 10，就去掉最低位：12345 → 1234 → 123……",
            "n > 0 时继续，每轮 count++。",
            "别忘了 n /= 10，否则 n 不变会死循环。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "5",
              "355 88",
              "3 5 9"
            ],
            "answer": 0,
            "explanation": "参考输出是 `5`。",
            "badge": "「流程控制」水晶收集者",
            "xp": 15,
            "boss": false
          }
        },
        {
          "id": "do-while",
          "title": "do-while 循环",
          "subtitle": "至少先执行一次",
          "difficulty": 2,
          "minutes": 8,
          "normal": "do-while 先执行一次循环体，再判断条件；因此无论条件是否成立，循环体至少执行一次。\n它适合“先做一次，再决定要不要继续”的场景，例如菜单、重试、输入校验。",
          "plain": "while 是“先看条件再进门”，do-while 是“先进一次门，再问要不要继续”。\n所以就算条件一开始是 false，do-while 也会做一次。",
          "task": "n 从 0 开始，用 do-while 让 n 至少加 1 次；即使条件是 n < 0，最后输出 1。",
          "example": "int n = 0;\ndo {\n    n++;\n} while (n < 0);\nSystem.out.println(n);",
          "exampleOutput": "1",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        // TODO: 用 do-while 让 n 至少加一次\n\n        System.out.println(n);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        do {\n            n++;\n        } while (n < 0);\n        System.out.println(n);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "1",
          "className": "",
          "points": [
            "do-while 至少执行一次",
            "条件在末尾",
            "与 while 的区别"
          ],
          "hints": [
            "do 的大括号里先写 n++。",
            "while (n < 0) 放在大括号后面，并且要加分号。",
            "一开始 n=0，循环体执行后 n=1，条件不成立，退出。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "不能除以0",
              "1",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `1`。",
            "badge": "「流程控制」屠龙者",
            "xp": 36,
            "boss": true
          }
        },
        {
          "id": "break-continue",
          "title": "break 与 continue",
          "subtitle": "提前结束和跳过本轮",
          "difficulty": 2,
          "minutes": 10,
          "normal": "break 立即结束当前循环；continue 跳过本轮剩余代码，直接进入下一轮。\n它们通常和 if 配合，用来处理“满足条件就退出”或“满足条件就跳过”的情况。",
          "plain": "break 是“不玩了，直接走”；continue 是“这轮不算，下一轮继续”。\n两个词都很像交通信号：一个红灯停，一个绕道走。",
          "task": "累加 1 到 10 中的偶数，但遇到 8 就停止。输出结果 20（2+4+6+8）。",
          "example": "int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 != 0) continue;\n    if (i > 8) break;\n    sum += i;\n}\nSystem.out.println(sum);",
          "exampleOutput": "20",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO: 跳过奇数，超过 8 就 break\n\n        System.out.println(sum);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 != 0) continue;\n            if (i > 8) break;\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "20",
          "className": "",
          "points": [
            "break",
            "continue",
            "循环中的 if",
            "累加"
          ],
          "hints": [
            "奇数判断：i % 2 != 0，跳过用 continue。",
            "i > 8 时 break，注意 8 本身要加进去。",
            "偶数 2、4、6、8 相加等于 20。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "20",
              "大了",
              "7.0 3 65"
            ],
            "answer": 0,
            "explanation": "参考输出是 `20`。",
            "badge": "「流程控制」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "nested-loops",
          "title": "嵌套循环",
          "subtitle": "循环里面再套循环",
          "difficulty": 2,
          "minutes": 12,
          "normal": "嵌套循环是外层循环每走一轮，内层循环完整走一遍。外层通常控制行，内层控制列。\n打印图形、遍历二维数组、组合枚举都离不开嵌套循环。注意总执行次数是两层次数的乘积。",
          "plain": "嵌套循环像日历：外层是一月到十二月，内层是每个月的每一天。\n每翻到一个新月份，日期都要从 1 号重新数一遍。",
          "task": "用嵌套循环输出三行星星：第一行 1 个 *，第二行 2 个，第三行 3 个。",
          "example": "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(\"*\");\n    }\n    System.out.println();\n}",
          "exampleOutput": "*\n**\n***",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用嵌套循环打印三行星星\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "*\n**\n***",
          "className": "",
          "points": [
            "外层控制行",
            "内层控制列",
            "print 与 println 配合",
            "循环次数"
          ],
          "hints": [
            "外层 i 从 1 到 3，代表第几行。",
            "内层 j 从 1 到 i，代表这一行打印几个星。",
            "内层用 print，一行结束后用 println() 换行。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "*",
              "Java",
              "3 5 9"
            ],
            "answer": 0,
            "explanation": "参考输出是 `*\\n**\\n***`。",
            "badge": "「流程控制」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "multiplication-table",
          "title": "综合：九九乘法表",
          "subtitle": "嵌套循环的经典练习",
          "difficulty": 2,
          "minutes": 15,
          "normal": "九九乘法表的第 i 行有 i 个算式，每个算式形如 j * i = 结果。\n外层循环控制行号 i，内层循环控制列号 j（从 1 到 i），这样就能打印出三角形结构。",
          "plain": "乘法表是一层一层长出来的：第一行一个算式，第二行两个，第三行三个……\n外层决定“第几行”，内层决定“这一行写到几”。",
          "task": "输出 1 到 5 的乘法表，每行一个换行，算式之间用一个空格分隔。",
          "example": "for (int i = 1; i <= 5; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \"*\" + i + \"=\" + (i * j) + \" \");\n    }\n    System.out.println();\n}",
          "exampleOutput": "1*1=1 \n1*2=2 2*2=4 \n...",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 输出 1~5 的乘法表\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \"*\" + i + \"=\" + (i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "1*1=1\n1*2=2 2*2=4\n1*3=3 2*3=6 3*3=9\n1*4=4 2*4=8 3*4=12 4*4=16\n1*5=5 2*5=10 3*5=15 4*5=20 5*5=25",
          "className": "",
          "points": [
            "嵌套 for",
            "字符串拼接",
            "每行内层上界是 i",
            "println 换行"
          ],
          "hints": [
            "外层 i 从 1 到 5，表示行号。",
            "内层 j 从 1 到 i，保证三角形形状。",
            "每行结束调用 System.out.println(); 换行。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "5 7 7",
              "1*1=1",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `1*1=1\\n1*2=2 2*2=4\\n1*3=3 2*3=6 3*3=9\\n1*4=4 2*4=8 3*4=12 4*4=16\\n1*5=5 2*5=10 3*5=15 4*5=20 5*5=25`。",
            "badge": "「流程控制」水晶收集者",
            "xp": 18,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch04",
      "title": "数组",
      "subtitle": "把一串同类型数据排排坐",
      "color": "#C792EA",
      "lessons": [
        {
          "id": "arrays",
          "title": "一维数组",
          "subtitle": "创建、赋值、取长度",
          "difficulty": 2,
          "minutes": 12,
          "normal": "数组是一个固定长度的容器，里面只能放同一种类型的元素。创建方式：new int[5] 或 int[] a = {1, 2, 3}。\n数组下标从 0 开始，最后一个元素的下标是 length - 1。访问越界会抛出 ArrayIndexOutOfBoundsException。",
          "plain": "数组像一排编号从 0 开始的储物柜，长度一旦定下就不能改。\n第一个柜子是 0 号，最后一个柜子是“长度减一”号，别敲错门。",
          "task": "创建数组 {5, 2, 9}，输出长度 3、第一个元素 5、最后一个元素 9。",
          "example": "int[] a = {5, 2, 9};\nSystem.out.println(a.length + \" \" + a[0] + \" \" + a[a.length - 1]);",
          "exampleOutput": "3 5 9",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 9};\n        // TODO: 输出 长度 第一个 最后一个\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 9};\n        System.out.println(a.length + \" \" + a[0] + \" \" + a[a.length - 1]);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "3 5 9",
          "className": "",
          "points": [
            "数组声明与初始化",
            "下标从 0 开始",
            "length 属性",
            "越界异常"
          ],
          "hints": [
            "数组长度用 a.length，注意没有括号。",
            "第一个元素是 a[0]，最后一个是 a[a.length - 1]。",
            "输出格式：3 5 9。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "1",
              "3 5 9",
              "7.0 3 65"
            ],
            "answer": 1,
            "explanation": "参考输出是 `3 5 9`。",
            "badge": "「数组」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "array-loop",
          "title": "遍历数组与求最值",
          "subtitle": "for-each 和下标循环",
          "difficulty": 2,
          "minutes": 12,
          "normal": "普通 for 循环可以通过下标访问每个元素；增强 for（for-each）更简洁，适合只读遍历。\n求最大值时，先假设第一个元素最大，然后依次比较，遇到更大的就更新。",
          "plain": "遍历就是挨个打开储物柜看一遍。for-each 是“每个都拿出来看看”，下标循环是“从 0 号柜走到最后一个”。\n找最大值就像打擂台：先让第一个上台，后面的人更强就换擂主。",
          "task": "实现 sum(int[] arr) 和 max(int[] arr)，分别返回数组元素之和与最大值。",
          "example": "static int sum(int[] arr) {\n    int s = 0;\n    for (int x : arr) s += x;\n    return s;\n}\nstatic int max(int[] arr) {\n    int m = arr[0];\n    for (int x : arr) if (x > m) m = x;\n    return m;\n}",
          "exampleOutput": "sum({1,2,3}) → 6",
          "starter": "public class Main {\n    static int sum(int[] arr) {\n        // TODO\n        return 0;\n    }\n    static int max(int[] arr) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int sum(int[] arr) {\n        int s = 0;\n        for (int x : arr) s += x;\n        return s;\n    }\n    static int max(int[] arr) {\n        int m = arr[0];\n        for (int x : arr) if (x > m) m = x;\n        return m;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "for-each",
            "下标遍历",
            "累加",
            "打擂台求最大值"
          ],
          "hints": [
            "sum 用一个变量从 0 开始累加。",
            "max 先把 arr[0] 当作最大值。",
            "遍历时如果 x > m，就把 m 更新成 x。"
          ],
          "calls": [
            {
              "name": "sum",
              "invoke": "sum(new int[]{1,2,3})",
              "expect": "6"
            },
            {
              "name": "sum",
              "invoke": "sum(new int[]{10,-2,5})",
              "expect": "13"
            },
            {
              "name": "max",
              "invoke": "max(new int[]{3,9,2})",
              "expect": "9"
            },
            {
              "name": "max",
              "invoke": "max(new int[]{-5,-1,-9})",
              "expect": "-1"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `sum(new int[]{1,2,3})` 后，返回值/结果是什么？",
            "options": [
              "55",
              "6",
              "1"
            ],
            "answer": 1,
            "explanation": "参考答案：`sum(new int[]{1,2,3})` 的结果是 `6`。",
            "badge": "「数组」屠龙者",
            "xp": 36,
            "boss": true
          }
        },
        {
          "id": "array-2d",
          "title": "二维数组",
          "subtitle": "行与列组成的表格",
          "difficulty": 3,
          "minutes": 15,
          "normal": "二维数组可以看成“数组的数组”：int[][] a = {{1,2},{3,4}}。a.length 是行数，a[0].length 是第一行的列数。\n访问元素用 a[行][列]，下标同样从 0 开始。二维数组的每一行长度可以不同，这叫不规则数组。",
          "plain": "二维数组像一张表格：先找第几行，再找第几列。\na[1][0] 就是“第 2 行第 1 列”，因为编号从 0 开始。",
          "task": "已知 scores = {{90,85},{88,92}}，输出所有元素之和 355，以及 scores[1][0] 的值 88。",
          "example": "int[][] a = {{90, 85}, {88, 92}};\nint sum = 0;\nfor (int[] row : a) for (int x : row) sum += x;\nSystem.out.println(sum + \" \" + a[1][0]);",
          "exampleOutput": "355 88",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int[][] scores = {{90, 85}, {88, 92}};\n        // TODO: 求和并输出\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int[][] scores = {{90, 85}, {88, 92}};\n        int sum = 0;\n        for (int[] row : scores) {\n            for (int x : row) sum += x;\n        }\n        System.out.println(sum + \" \" + scores[1][0]);\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "355 88",
          "className": "",
          "points": [
            "二维数组初始化",
            "a[行][列]",
            "行数与列数",
            "嵌套遍历"
          ],
          "hints": [
            "外层 for 取出每一行 int[] row。",
            "内层 for 取出这一行的每个 int x。",
            "scores[1][0] 是第二行第一个元素。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "355 88",
              "数组越界",
              "count=2000"
            ],
            "answer": 0,
            "explanation": "参考输出是 `355 88`。",
            "badge": "「数组」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "arrays-tools",
          "title": "Arrays 工具类",
          "subtitle": "排序、打印、查找、复制",
          "difficulty": 2,
          "minutes": 12,
          "normal": "java.util.Arrays 提供了常用数组操作：sort 排序、toString 转成可读字符串、binarySearch 二分查找、copyOf 复制。\nArrays.toString 和直接 println(array) 不一样：后者打印的是数组对象的地址，前者才打印内容。\nbinarySearch 之前必须先排序，否则结果不可靠。",
          "plain": "Arrays 是数组的瑞士军刀：想排序、想打印、想查东西，都有现成工具。\n但使用 binarySearch 前一定先 sort，不然就像在没整理的书架上按目录找书。",
          "task": "对 {3,1,2} 排序，输出排序后的内容和 2 的下标（1）。",
          "example": "int[] a = {3, 1, 2};\nArrays.sort(a);\nSystem.out.println(Arrays.toString(a) + \" \" + Arrays.binarySearch(a, 2));",
          "exampleOutput": "[1, 2, 3] 1",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 2};\n        // TODO: 排序并输出\n\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 2};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a) + \" \" + Arrays.binarySearch(a, 2));\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "[1, 2, 3] 1",
          "className": "",
          "points": [
            "Arrays.sort",
            "Arrays.toString",
            "Arrays.binarySearch",
            "先排序再查找"
          ],
          "hints": [
            "排序：Arrays.sort(a);",
            "打印内容：Arrays.toString(a)。",
            "排序后是 [1,2,3]，2 在下标 1。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "借出:Java",
              "[1, 2, 3] 1",
              "7.0 3 65"
            ],
            "answer": 1,
            "explanation": "参考输出是 `[1, 2, 3] 1`。",
            "badge": "「数组」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "varargs",
          "title": "可变参数",
          "subtitle": "参数个数不固定",
          "difficulty": 2,
          "minutes": 10,
          "normal": "在参数类型后面加三个点，表示可变参数：int... nums。调用时可以传 0 个、1 个或多个 int。\n在方法内部，nums 会被当成一个数组使用。可变参数必须是参数列表的最后一个。",
          "plain": "可变参数像“随便来几个”的篮子：你可以放 1 个、3 个，甚至空着。\n进了方法之后，篮子就变成一个数组，用 for 遍历即可。",
          "task": "实现 sum(int... nums)，返回所有参数的和。测试会调用 sum(1,2,3,4) 和 sum()。",
          "example": "static int sum(int... nums) {\n    int s = 0;\n    for (int n : nums) s += n;\n    return s;\n}",
          "exampleOutput": "sum(1,2,3,4) → 10",
          "starter": "public class Main {\n    static int sum(int... nums) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int sum(int... nums) {\n        int s = 0;\n        for (int n : nums) s += n;\n        return s;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "int... nums",
            "可变参数是数组",
            "必须是最后一个参数",
            "空参数"
          ],
          "hints": [
            "nums 在方法里就是 int[]。",
            "用 for-each 把每个数累加。",
            "空参数时 nums 长度为 0，循环不执行，返回 0。"
          ],
          "calls": [
            {
              "name": "sum",
              "invoke": "sum(1,2,3,4)",
              "expect": "10"
            },
            {
              "name": "sum",
              "invoke": "sum()",
              "expect": "0"
            },
            {
              "name": "sum",
              "invoke": "sum(7)",
              "expect": "7"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `sum(1,2,3,4)` 后，返回值/结果是什么？",
            "options": [
              "Java",
              "x",
              "10"
            ],
            "answer": 2,
            "explanation": "参考答案：`sum(1,2,3,4)` 的结果是 `10`。",
            "badge": "「数组」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "score-stats",
          "title": "综合：成绩统计",
          "subtitle": "数组、循环、方法一起用",
          "difficulty": 3,
          "minutes": 18,
          "normal": "综合题通常把“遍历、计算、格式化”拆成小步骤：先求和，再找最高最低，最后计算平均分并拼成字符串。\n平均分要注意整数除法问题：sum / count 是整数除法，想得到小数要把其中一个转成 double。",
          "plain": "统计成绩就像老师算分：先全部加起来，再找出最高最低，最后除以人数。\n如果直接拿整数除，小数会被砍掉，所以要先变成 double。",
          "task": "实现 stats(int[] scores)，返回格式：最高:90 最低:60 平均:75.0。测试数组为 {60,80,90,70}。",
          "example": "static String stats(int[] a) {\n    int sum = 0, max = a[0], min = a[0];\n    for (int x : a) {\n        sum += x;\n        if (x > max) max = x;\n        if (x < min) min = x;\n    }\n    double avg = (double) sum / a.length;\n    return \"最高:\" + max + \" 最低:\" + min + \" 平均:\" + avg;\n}",
          "exampleOutput": "最高:90 最低:60 平均:75.0",
          "starter": "public class Main {\n    static String stats(int[] scores) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String stats(int[] scores) {\n        int sum = 0, max = scores[0], min = scores[0];\n        for (int x : scores) {\n            sum += x;\n            if (x > max) max = x;\n            if (x < min) min = x;\n        }\n        double avg = (double) sum / scores.length;\n        return \"最高:\" + max + \" 最低:\" + min + \" 平均:\" + avg;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "数组遍历",
            "最高最低",
            "double 平均分",
            "字符串拼接"
          ],
          "hints": [
            "用三个变量分别记录 sum、max、min。",
            "平均分：double avg = (double) sum / scores.length;",
            "返回字符串时注意冒号是英文冒号，空格位置要和题目一致。"
          ],
          "calls": [
            {
              "name": "stats",
              "invoke": "stats(new int[]{60,80,90,70})",
              "expect": "最高:90 最低:60 平均:75.0"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `stats(new int[]{60,80,90,70})` 后，返回值/结果是什么？",
            "options": [
              "{a=2, b=1}",
              "最高:90 最低:60 平均:75.0",
              "Java JavaJava true"
            ],
            "answer": 1,
            "explanation": "参考答案：`stats(new int[]{60,80,90,70})` 的结果是 `最高:90 最低:60 平均:75.0`。",
            "badge": "「数组」水晶收集者",
            "xp": 21,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch05",
      "title": "方法",
      "subtitle": "把代码拆成可复用的小积木",
      "color": "#FF8FA3",
      "lessons": [
        {
          "id": "methods",
          "title": "方法定义与调用",
          "subtitle": "给一段逻辑起名字",
          "difficulty": 2,
          "minutes": 12,
          "normal": "方法是类中的一段可复用代码，包含修饰符、返回值类型、方法名、参数列表和方法体。\n调用方法时写 方法名(参数)。方法让代码可以复用，也更容易阅读和测试。static 方法属于类，可以直接用类名调用。",
          "plain": "方法就像厨房里的菜谱：把“洗菜、切菜、炒菜”打包成一个名字，下次直接喊名字就行。\n参数是食材，返回值是做好的菜。",
          "task": "实现 square(int n)，返回 n 的平方。测试会调用 square(5) 和 square(-3)。",
          "example": "static int square(int n) {\n    return n * n;\n}",
          "exampleOutput": "square(5) → 25",
          "starter": "public class Main {\n    static int square(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int square(int n) {\n        return n * n;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "方法签名",
            "return",
            "形参与实参",
            "static 方法"
          ],
          "hints": [
            "方法头已经给出：static int square(int n)。",
            "平方就是 n * n。",
            "用 return 把结果交回给调用者。"
          ],
          "calls": [
            {
              "name": "square",
              "invoke": "square(5)",
              "expect": "25"
            },
            {
              "name": "square",
              "invoke": "square(-3)",
              "expect": "9"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `square(5)` 后，返回值/结果是什么？",
            "options": [
              "25",
              "4",
              "周三"
            ],
            "answer": 0,
            "explanation": "参考答案：`square(5)` 的结果是 `25`。",
            "badge": "「方法」屠龙者",
            "xp": 36,
            "boss": true
          }
        },
        {
          "id": "params-return",
          "title": "参数与返回值",
          "subtitle": "方法之间传数据",
          "difficulty": 2,
          "minutes": 12,
          "normal": "参数是方法接收的输入，返回值是方法交回的结果。一个方法最多返回一个值，但参数可以有多个。\n基本类型参数传递的是值的副本，方法内部修改参数不会影响外面的变量；对象参数传递的是引用副本，可能修改对象内部状态。",
          "plain": "参数像你递给方法的材料，返回值像它做完后交给你的成品。\n方法内部改基本类型参数，只是改了“复印件”，原件不会变。",
          "task": "实现 area(double r)，用 3.14 作为圆周率，返回圆面积。测试 r=2 时返回 12.56。",
          "example": "static double area(double r) {\n    return 3.14 * r * r;\n}",
          "exampleOutput": "area(2) → 12.56",
          "starter": "public class Main {\n    static double area(double r) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static double area(double r) {\n        return 3.14 * r * r;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "形参",
            "实参",
            "return 表达式",
            "double 返回值"
          ],
          "hints": [
            "圆面积公式是 π × r × r。",
            "题目指定 π 用 3.14。",
            "返回类型是 double，直接 return 3.14 * r * r;"
          ],
          "calls": [
            {
              "name": "area",
              "invoke": "area(2)",
              "expect": "12.56"
            },
            {
              "name": "area",
              "invoke": "area(1)",
              "expect": "3.14"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `area(2)` 后，返回值/结果是什么？",
            "options": [
              "8",
              "small",
              "12.56"
            ],
            "answer": 2,
            "explanation": "参考答案：`area(2)` 的结果是 `12.56`。",
            "badge": "「方法」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "overload",
          "title": "方法重载",
          "subtitle": "同名方法，不同参数",
          "difficulty": 3,
          "minutes": 12,
          "normal": "方法重载指同一个类中有多个同名方法，但参数个数或参数类型不同。编译器会根据实参选择最匹配的版本。\n只有返回值类型不同不算重载，因为调用时无法仅凭返回值区分。",
          "plain": "重载就像同名的“加法”：两个数相加、三个数相加、小数相加，名字都叫 add，但材料不同。\nJava 看到你递了几样材料，就知道该叫哪个版本。",
          "task": "实现三个 add 重载：两个 int、三个 int、两个 double。测试会分别调用。",
          "example": "static int add(int a, int b) { return a + b; }\nstatic int add(int a, int b, int c) { return a + b + c; }\nstatic double add(double a, double b) { return a + b; }",
          "exampleOutput": "add(2,3) → 5",
          "starter": "public class Main {\n    static int add(int a, int b) {\n        return 0;\n    }\n    static int add(int a, int b, int c) {\n        return 0;\n    }\n    static double add(double a, double b) {\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    static double add(double a, double b) {\n        return a + b;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "方法重载",
            "参数列表不同",
            "返回值不参与重载",
            "自动匹配"
          ],
          "hints": [
            "三个方法名字都叫 add，但参数列表不同。",
            "两个 int 返回 int，三个 int 也返回 int。",
            "两个 double 返回 double，注意 1.5 + 2.5 的结果是 4.0。"
          ],
          "calls": [
            {
              "name": "add2",
              "invoke": "add(2,3)",
              "expect": "5"
            },
            {
              "name": "add3",
              "invoke": "add(1,2,3)",
              "expect": "6"
            },
            {
              "name": "addd",
              "invoke": "add(1.5,2.5)",
              "expect": "4.0"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `add(2,3)` 后，返回值/结果是什么？",
            "options": [
              "Shape 12.56",
              "Hi Java",
              "5"
            ],
            "answer": 2,
            "explanation": "参考答案：`add(2,3)` 的结果是 `5`。",
            "badge": "「方法」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "recursion",
          "title": "递归",
          "subtitle": "方法自己调用自己",
          "difficulty": 3,
          "minutes": 15,
          "normal": "递归是方法直接或间接调用自身。写递归必须有两部分：终止条件（base case）和向终止条件逼近的递归调用。\n以阶乘为例：0! = 1，n! = n × (n-1)!。每一次递归都会把问题规模缩小。",
          "plain": "递归像俄罗斯套娃：打开一个，里面还有一个更小的，直到打开最小的那个就停。\n如果没有“最小的那个”，就会一直开下去，最后栈溢出。",
          "task": "实现 factorial(int n) 和 fib(int n)，分别返回阶乘和斐波那契数列第 n 项。",
          "example": "static int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\nstatic int fib(int n) {\n    if (n <= 1) return n;\n    return fib(n - 1) + fib(n - 2);\n}",
          "exampleOutput": "factorial(5) → 120",
          "starter": "public class Main {\n    static int factorial(int n) {\n        // TODO\n        return 0;\n    }\n    static int fib(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n - 1) + fib(n - 2);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "终止条件",
            "递归调用",
            "问题规模缩小",
            "栈溢出"
          ],
          "hints": [
            "阶乘的终止条件：n <= 1 时返回 1。",
            "阶乘递归：n * factorial(n - 1)。",
            "斐波那契：n <= 1 返回 n，否则 fib(n-1) + fib(n-2)。"
          ],
          "calls": [
            {
              "name": "factorial",
              "invoke": "factorial(5)",
              "expect": "120"
            },
            {
              "name": "factorial",
              "invoke": "factorial(0)",
              "expect": "1"
            },
            {
              "name": "fib",
              "invoke": "fib(6)",
              "expect": "8"
            },
            {
              "name": "fib",
              "invoke": "fib(10)",
              "expect": "55"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `factorial(5)` 后，返回值/结果是什么？",
            "options": [
              "a:18",
              "9",
              "120"
            ],
            "answer": 2,
            "explanation": "参考答案：`factorial(5)` 的结果是 `120`。",
            "badge": "「方法」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "prime",
          "title": "方法练习：素数判断",
          "subtitle": "循环、条件、return 的组合",
          "difficulty": 3,
          "minutes": 15,
          "normal": "素数（质数）是大于 1 且只能被 1 和自身整除的整数。判断 n 是否为素数，可以从 2 试到 √n，看是否存在因子。\n如果发现一个因子就立即 return false；循环结束都没找到，才 return true。1 和负数都不是素数。",
          "plain": "素数是“不合群”的数：除了 1 和自己，谁都不能整除它。\n检查时只需要试到根号 n，因为因子总是成对出现，试完一半就够了。",
          "task": "实现 isPrime(int n)。测试会检查 2、9、13、1。",
          "example": "static boolean isPrime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}",
          "exampleOutput": "isPrime(13) → true",
          "starter": "public class Main {\n    static boolean isPrime(int n) {\n        // TODO\n        return false;\n    }\n}",
          "solution": "public class Main {\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "素数定义",
            "循环试除",
            "提前 return",
            "边界值 1"
          ],
          "hints": [
            "先处理 n < 2 的情况，直接返回 false。",
            "从 i=2 开始试，条件可以写 i * i <= n。",
            "一旦 n % i == 0，就说明不是素数，立即 return false。"
          ],
          "calls": [
            {
              "name": "prime2",
              "invoke": "isPrime(2)",
              "expect": "true"
            },
            {
              "name": "prime9",
              "invoke": "isPrime(9)",
              "expect": "false"
            },
            {
              "name": "prime13",
              "invoke": "isPrime(13)",
              "expect": "true"
            },
            {
              "name": "prime1",
              "invoke": "isPrime(1)",
              "expect": "false"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `isPrime(2)` 后，返回值/结果是什么？",
            "options": [
              "周三",
              "true",
              "[12, 345]"
            ],
            "answer": 1,
            "explanation": "参考答案：`isPrime(2)` 的结果是 `true`。",
            "badge": "「方法」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "calculator",
          "title": "综合：简易计算器",
          "subtitle": "方法 + 条件分支",
          "difficulty": 3,
          "minutes": 18,
          "normal": "把不同运算封装进一个方法，根据运算符字符串选择对应分支，是常见的“分发”写法。\n除法要单独处理除数为 0 的情况；遇到不认识的运算符，可以返回一个特殊值或抛出异常。",
          "plain": "计算器方法像一个小前台：你递上“6 + 3”，它看一眼符号，把活分给对应的师傅。\n遇到除以 0 这种刁难，要提前拦住。",
          "task": "实现 calc(int a, String op, int b)：支持 +、-、*、/；除数为 0 返回 0；未知运算符返回 -1。",
          "example": "static int calc(int a, String op, int b) {\n    if (op.equals(\"+\")) return a + b;\n    if (op.equals(\"-\")) return a - b;\n    if (op.equals(\"*\")) return a * b;\n    if (op.equals(\"/\")) return b == 0 ? 0 : a / b;\n    return -1;\n}",
          "exampleOutput": "calc(6,\"+\",3) → 9",
          "starter": "public class Main {\n    static int calc(int a, String op, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int calc(int a, String op, int b) {\n        if (op.equals(\"+\")) return a + b;\n        if (op.equals(\"-\")) return a - b;\n        if (op.equals(\"*\")) return a * b;\n        if (op.equals(\"/\")) return b == 0 ? 0 : a / b;\n        return -1;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "字符串 equals",
            "if-else 分发",
            "除零保护",
            "返回多个分支"
          ],
          "hints": [
            "字符串比较必须用 equals，不能用 ==。",
            "依次判断 +、-、*、/。",
            "除法前先判断 b == 0，除零返回 0；其他符号返回 -1。"
          ],
          "calls": [
            {
              "name": "calc+",
              "invoke": "calc(6,\"+\",3)",
              "expect": "9"
            },
            {
              "name": "calc-",
              "invoke": "calc(6,\"-\",3)",
              "expect": "3"
            },
            {
              "name": "calc*",
              "invoke": "calc(6,\"*\",3)",
              "expect": "18"
            },
            {
              "name": "calc/",
              "invoke": "calc(6,\"/\",3)",
              "expect": "2"
            },
            {
              "name": "calc0",
              "invoke": "calc(6,\"/\",0)",
              "expect": "0"
            },
            {
              "name": "calc?",
              "invoke": "calc(6,\"?\",3)",
              "expect": "-1"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `calc(6,\"+\",3)` 后，返回值/结果是什么？",
            "options": [
              "25",
              "9",
              "empty"
            ],
            "answer": 1,
            "explanation": "参考答案：`calc(6,\"+\",3)` 的结果是 `9`。",
            "badge": "「方法」屠龙者",
            "xp": 39,
            "boss": true
          }
        }
      ]
    },
    {
      "id": "ch06",
      "title": "面向对象基础",
      "subtitle": "用类和对象描述真实世界",
      "color": "#FFD166",
      "lessons": [
        {
          "id": "class-object",
          "title": "类与对象",
          "subtitle": "从模板到实例",
          "difficulty": 2,
          "minutes": 15,
          "normal": "类（class）是模板，对象（object）是根据模板创建出来的实例。用 new 创建对象，例如 new Person(\"小明\", 18)。\n类里可以包含字段（描述状态）和方法（描述行为）。对象有自己的字段副本，互不干扰。",
          "plain": "类像做饼干的模具，对象像用模具压出来的一块块饼干。\n每块饼干都有自己的名字和年龄，改一块不会影响另一块。",
          "task": "定义 Person 类：字段 name、age，构造方法给它们赋值，introduce() 返回“小明 18”。测试会用 new Person(\"小明\",18)。",
          "example": "class Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    String introduce() {\n        return name + \" \" + age;\n    }\n}",
          "exampleOutput": "小明 18",
          "starter": "public class Main {\n}\n\nclass Person {\n    // TODO: 字段、构造方法、introduce()\n}",
          "solution": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    String introduce() {\n        return name + \" \" + age;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "class 模板",
            "new 创建对象",
            "字段",
            "方法"
          ],
          "hints": [
            "字段写在类里面、方法外面：String name; int age;",
            "构造方法名必须和类名一样，没有返回值类型。",
            "introduce 返回 name + \" \" + age。"
          ],
          "calls": [
            {
              "name": "introduce",
              "invoke": "new Person(\"小明\",18).introduce()",
              "expect": "小明 18"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `new Person(\"小明\",18).introduce()` 后，返回值/结果是什么？",
            "options": [
              "8",
              "小明 18",
              "未知"
            ],
            "answer": 1,
            "explanation": "参考答案：`new Person(\"小明\",18).introduce()` 的结果是 `小明 18`。",
            "badge": "「面向对象基础」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "encapsulation",
          "title": "封装与 private",
          "subtitle": "把数据保护起来",
          "difficulty": 3,
          "minutes": 15,
          "normal": "封装是把字段设为 private，只通过 public 方法访问和修改，从而保护数据不被随意破坏。\ngetter 用于读取，setter 或业务方法用于修改。方法内部可以加校验，例如余额不能变成负数。",
          "plain": "封装像 ATM：钱放在机器内部，你不能直接伸手拿，只能通过存款、取款按钮操作。\n按钮里可以先检查“余额够不够”，避免出现负数。",
          "task": "实现 Account：private balance；deposit(int) 只接受正数并返回余额；withdraw(int) 余额不足时返回当前余额；getBalance()。",
          "example": "class Account {\n    private int balance;\n    int deposit(int n) {\n        if (n > 0) balance += n;\n        return balance;\n    }\n    int withdraw(int n) {\n        if (n > 0 && n <= balance) balance -= n;\n        return balance;\n    }\n    int getBalance() { return balance; }\n}",
          "exampleOutput": "new Account().deposit(100) → 100",
          "starter": "public class Main {\n}\n\nclass Account {\n    private int balance;\n    int deposit(int n) {\n        // TODO\n        return balance;\n    }\n    int withdraw(int n) {\n        // TODO\n        return balance;\n    }\n    int getBalance() {\n        return balance;\n    }\n}",
          "solution": "public class Main {\n}\n\nclass Account {\n    private int balance;\n    int deposit(int n) {\n        if (n > 0) balance += n;\n        return balance;\n    }\n    int withdraw(int n) {\n        if (n > 0 && n <= balance) balance -= n;\n        return balance;\n    }\n    int getBalance() {\n        return balance;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "private",
            "public 方法",
            "数据校验",
            "getter"
          ],
          "hints": [
            "deposit 里先判断 n > 0，再累加。",
            "withdraw 要同时满足 n > 0 和 n <= balance。",
            "两个方法都返回最新的 balance。"
          ],
          "calls": [
            {
              "name": "deposit",
              "invoke": "new Account().deposit(100)",
              "expect": "100"
            },
            {
              "name": "deposit-neg",
              "invoke": "new Account().deposit(-5)",
              "expect": "0"
            },
            {
              "name": "withdraw",
              "invoke": "new Account().withdraw(50)",
              "expect": "0"
            },
            {
              "name": "balance",
              "invoke": "new Account().getBalance()",
              "expect": "0"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new Account().deposit(100)` 后，返回值/结果是什么？",
            "options": [
              "100",
              "小明 18",
              "8"
            ],
            "answer": 0,
            "explanation": "参考答案：`new Account().deposit(100)` 的结果是 `100`。",
            "badge": "「面向对象基础」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "constructor",
          "title": "构造方法",
          "subtitle": "对象出生时做的事",
          "difficulty": 2,
          "minutes": 12,
          "normal": "构造方法的名字与类名相同，没有返回值类型，在 new 时自动调用，用来初始化对象。\n可以重载多个构造方法；this(...) 可以在一个构造方法里调用另一个构造方法，但必须放在第一行。",
          "plain": "构造方法像新生入学时的报到流程：一创建对象，就自动填好姓名、年龄等信息。\n如果没写构造方法，Java 会送你一个无参的默认构造方法。",
          "task": "实现 Point：无参构造调用 this(0,0)，有参构造保存 x、y，show() 返回“x,y”。",
          "example": "class Point {\n    int x, y;\n    Point() { this(0, 0); }\n    Point(int x, int y) { this.x = x; this.y = y; }\n    String show() { return x + \",\" + y; }\n}",
          "exampleOutput": "new Point(2,3).show() → 2,3",
          "starter": "public class Main {\n}\n\nclass Point {\n    int x, y;\n    Point() {\n        // TODO: this(0,0)\n    }\n    Point(int x, int y) {\n        // TODO\n    }\n    String show() {\n        return x + \",\" + y;\n    }\n}",
          "solution": "public class Main {\n}\n\nclass Point {\n    int x, y;\n    Point() {\n        this(0, 0);\n    }\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    String show() {\n        return x + \",\" + y;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "构造方法名与类名相同",
            "没有返回值类型",
            "构造方法重载",
            "this(...) 委托"
          ],
          "hints": [
            "无参构造里写 this(0, 0); 调用另一个构造。",
            "有参构造用 this.x = x; 区分字段和参数。",
            "注意构造方法没有 void，也不写返回类型。"
          ],
          "calls": [
            {
              "name": "default",
              "invoke": "new Point().show()",
              "expect": "0,0"
            },
            {
              "name": "args",
              "invoke": "new Point(2,3).show()",
              "expect": "2,3"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new Point().show()` 后，返回值/结果是什么？",
            "options": [
              "你好, Java",
              "0,0",
              "面积:4.0"
            ],
            "answer": 1,
            "explanation": "参考答案：`new Point().show()` 的结果是 `0,0`。",
            "badge": "「面向对象基础」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "this",
          "title": "this 关键字",
          "subtitle": "指向当前对象",
          "difficulty": 2,
          "minutes": 12,
          "normal": "this 表示当前对象。最常见的作用是区分同名的字段和参数：this.name = name。\nthis 也可以调用当前类的其他方法，或作为参数把自己传给别的对象。",
          "plain": "this 就是“我自己”。当参数和字段同名时，this.name 明确表示“我的 name 字段”。\n没有 this 的话，Java 会优先看到离得最近的参数。",
          "task": "实现 Student：字段 name、score；betterThan(Student other) 用 this.score 和 other.score 比较。",
          "example": "class Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n    boolean betterThan(Student other) {\n        return this.score > other.score;\n    }\n}",
          "exampleOutput": "new Student(\"a\",90).betterThan(new Student(\"b\",80)) → true",
          "starter": "public class Main {\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        // TODO: 用 this 赋值\n    }\n    boolean betterThan(Student other) {\n        // TODO\n        return false;\n    }\n}",
          "solution": "public class Main {\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n    boolean betterThan(Student other) {\n        return this.score > other.score;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "this 指向当前对象",
            "解决字段与参数同名",
            "this 调用方法",
            "对象比较"
          ],
          "hints": [
            "构造方法里写 this.name = name; this.score = score;",
            "betterThan 里比较 this.score 和 other.score。",
            "返回一个 boolean 表达式即可。"
          ],
          "calls": [
            {
              "name": "better",
              "invoke": "new Student(\"a\",90).betterThan(new Student(\"b\",80))",
              "expect": "true"
            },
            {
              "name": "worse",
              "invoke": "new Student(\"a\",70).betterThan(new Student(\"b\",80))",
              "expect": "false"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `new Student(\"a\",90).betterThan(new Student(\"b\",80))` 后，返回值/结果是什么？",
            "options": [
              "[2, 4]",
              "x",
              "true"
            ],
            "answer": 2,
            "explanation": "参考答案：`new Student(\"a\",90).betterThan(new Student(\"b\",80))` 的结果是 `true`。",
            "badge": "「面向对象基础」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "static",
          "title": "static 静态成员",
          "subtitle": "属于类，而不是某个对象",
          "difficulty": 3,
          "minutes": 15,
          "normal": "static 字段属于类，所有对象共享一份；static 方法属于类，可以直接用 类名.方法() 调用，不需要创建对象。\n静态方法里不能直接使用 this，也不能直接访问非静态字段，因为它不知道你要操作哪个对象。",
          "plain": "普通字段是每个对象各有一份，static 字段是全班共用一份。\nstatic 方法像班级公告栏，不用找到某个同学，直接去看公告栏就行。",
          "task": "实现 Counter：static count；每 new 一个对象 count 加 1；static getCount() 返回总数。main 里创建两个对象后输出 2。",
          "example": "class Counter {\n    static int count;\n    Counter() { count++; }\n    static int getCount() { return count; }\n}",
          "exampleOutput": "2",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        // TODO: 输出 Counter.getCount()\n\n    }\n}\n\nclass Counter {\n    static int count;\n    Counter() {\n        // TODO: count++\n    }\n    static int getCount() {\n        return count;\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        System.out.println(Counter.getCount());\n    }\n}\n\nclass Counter {\n    static int count;\n    Counter() {\n        count++;\n    }\n    static int getCount() {\n        return count;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "2",
          "className": "",
          "points": [
            "static 字段共享",
            "static 方法",
            "类名调用",
            "静态上下文"
          ],
          "hints": [
            "count 已经声明为 static，所有 Counter 对象共享。",
            "构造方法里写 count++。",
            "main 里输出 Counter.getCount()。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "2",
              "true",
              "1*1=1"
            ],
            "answer": 0,
            "explanation": "参考输出是 `2`。",
            "badge": "「面向对象基础」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "inheritance",
          "title": "继承",
          "subtitle": "extends 复用父类",
          "difficulty": 3,
          "minutes": 15,
          "normal": "继承用 extends 表示“是一个（is-a）”关系：Dog extends Animal，Dog 自动拥有 Animal 的字段和方法。\n子类构造方法必须先调用父类构造方法，可以用 super(...) 显式调用；不写时 Java 会尝试调用父类无参构造。\nJava 是单继承：一个类只能有一个直接父类。",
          "plain": "继承像儿子继承家业：父类有的东西，子类天然就有，还能自己再添点新本事。\n但儿子只能有一个亲生父亲，Java 的类也只能 extends 一个父类。",
          "task": "定义 Animal(name, sound()) 和 Dog extends Animal，Dog 构造时用 super(name)，sound() 返回“Woof”。",
          "example": "class Animal {\n    String name;\n    Animal(String name) { this.name = name; }\n    String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n    Dog(String name) { super(name); }\n    String sound() { return \"Woof\"; }\n}",
          "exampleOutput": "new Dog(\"d\").sound() → Woof",
          "starter": "public class Main {\n}\n\nclass Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n    }\n    String sound() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        // TODO: super(name)\n    }\n    String sound() {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n}\n\nclass Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n    }\n    String sound() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n    String sound() {\n        return \"Woof\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "extends",
            "父类字段与方法",
            "super(...)",
            "单继承"
          ],
          "hints": [
            "Dog 的构造方法第一行写 super(name);。",
            "Dog 自动拥有 name 字段，不需要重复声明。",
            "重写 sound() 返回 Woof。"
          ],
          "calls": [
            {
              "name": "sound",
              "invoke": "new Dog(\"d\").sound()",
              "expect": "Woof"
            },
            {
              "name": "name",
              "invoke": "new Dog(\"d\").name",
              "expect": "d"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new Dog(\"d\").sound()` 后，返回值/结果是什么？",
            "options": [
              "4",
              "Woof",
              "[a, c]"
            ],
            "answer": 1,
            "explanation": "参考答案：`new Dog(\"d\").sound()` 的结果是 `Woof`。",
            "badge": "「面向对象基础」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "override",
          "title": "方法重写",
          "subtitle": "子类改写父类行为",
          "difficulty": 3,
          "minutes": 15,
          "normal": "方法重写（override）是子类提供与父类同签名的方法，从而改变行为。调用时看对象的实际类型，这叫动态绑定。\n重写的方法不能比父类方法有更严格的访问权限；建议加 @Override 注解让编译器帮你检查。",
          "plain": "重写就像儿子把父亲传下来的菜谱改了：同一道菜名，做法不同。\n客人点菜时，看的是“这道菜是谁做的”，而不是菜谱来自哪里。",
          "task": "Shape.area() 返回 0，describe() 返回“Shape ”+area()；Circle 重写 area() 返回 3.14*r*r。测试 Circle(2).describe()。",
          "example": "class Shape {\n    double area() { return 0; }\n    String describe() { return \"Shape \" + area(); }\n}\nclass Circle extends Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    @Override double area() { return 3.14 * r * r; }\n}",
          "exampleOutput": "Shape 12.56",
          "starter": "public class Main {\n}\n\nclass Shape {\n    double area() {\n        return 0;\n    }\n    String describe() {\n        return \"Shape \" + area();\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n    Circle(double r) {\n        this.r = r;\n    }\n    // TODO: 重写 area()\n}",
          "solution": "public class Main {\n}\n\nclass Shape {\n    double area() {\n        return 0;\n    }\n    String describe() {\n        return \"Shape \" + area();\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n    Circle(double r) {\n        this.r = r;\n    }\n    @Override\n    double area() {\n        return 3.14 * r * r;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "方法重写",
            "同签名",
            "@Override",
            "动态绑定"
          ],
          "hints": [
            "Circle 里写 double area() { ... }。",
            "area 内部返回 3.14 * r * r。",
            "describe() 里调用 area()，会动态找到 Circle 的版本。"
          ],
          "calls": [
            {
              "name": "describe",
              "invoke": "new Circle(2).describe()",
              "expect": "Shape 12.56"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `new Circle(2).describe()` 后，返回值/结果是什么？",
            "options": [
              "Shape 12.56",
              "small",
              "6"
            ],
            "answer": 0,
            "explanation": "参考答案：`new Circle(2).describe()` 的结果是 `Shape 12.56`。",
            "badge": "「面向对象基础」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "polymorphism",
          "title": "多态",
          "subtitle": "父类引用指向子类对象",
          "difficulty": 4,
          "minutes": 18,
          "normal": "多态指同一个父类引用可以指向不同子类对象，调用被重写的方法时，实际执行的是对象所属子类的版本。\n多态让代码可以面向抽象编程：Animal[] 里可以放 Dog、Cat，循环时统一调用 sound()，不用写一堆 if。",
          "plain": "多态像遥控器：同一个“播放”按钮，电视、投影仪、音响各有各的播放方式。\n你只管按按钮，具体怎么播放由设备自己决定。",
          "task": "定义 Animal、Dog、Cat；用 Animal[] 存放一只狗和一只猫，循环输出它们的 sound()。",
          "example": "Animal[] zoo = { new Dog(), new Cat() };\nfor (Animal a : zoo) System.out.print(a.sound());",
          "exampleOutput": "WoofMeow",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Animal[] zoo = { new Dog(), new Cat() };\n        // TODO: 循环输出 sound()\n\n    }\n}\n\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n    String sound() { return \"Woof\"; }\n}\nclass Cat extends Animal {\n    String sound() { return \"Meow\"; }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Animal[] zoo = { new Dog(), new Cat() };\n        for (Animal a : zoo) {\n            System.out.print(a.sound());\n        }\n    }\n}\n\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n    String sound() { return \"Woof\"; }\n}\nclass Cat extends Animal {\n    String sound() { return \"Meow\"; }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "WoofMeow",
          "className": "",
          "points": [
            "父类引用指向子类",
            "动态绑定",
            "数组多态",
            "统一接口"
          ],
          "hints": [
            "Animal[] zoo 可以装 Dog 和 Cat 对象。",
            "for (Animal a : zoo) 每次拿到一个父类引用。",
            "调用 a.sound() 时，会执行实际对象的重写版本。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "1*1=1",
              "count=2000",
              "WoofMeow"
            ],
            "answer": 2,
            "explanation": "参考输出是 `WoofMeow`。",
            "badge": "「面向对象基础」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "library",
          "title": "综合：迷你图书管理",
          "subtitle": "类、数组、循环、封装",
          "difficulty": 4,
          "minutes": 20,
          "normal": "综合项目把多个知识点串起来：Book 负责数据，Library 负责管理，main 负责演示。\nLibrary 用数组保存书籍，add 方法维护数量，find 方法按书名查找。真实项目里还会拆分更多类，但思路相同。",
          "plain": "图书管理就像一个小仓库：Book 是每本书的档案，Library 是仓库管理员。\n管理员负责进货、登记、按书名找书，main 只是来办事的顾客。",
          "task": "实现 Book(title, price)、Library.add(Book)、Library.find(String)、Library.count()；main 添加两本书并输出数量与 Java 书价格。",
          "example": "Book b1 = new Book(\"Java\", 59);\nBook b2 = new Book(\"Python\", 49);\nLibrary lib = new Library();\nlib.add(b1); lib.add(b2);\nSystem.out.println(lib.count() + \" \" + lib.find(\"Java\").price);",
          "exampleOutput": "2 59",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", 59));\n        lib.add(new Book(\"Python\", 49));\n        // TODO: 输出 2 59\n\n    }\n}\n\nclass Book {\n    String title;\n    int price;\n    Book(String title, int price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Library {\n    Book[] books = new Book[10];\n    int count;\n    void add(Book b) {\n        // TODO\n    }\n    Book find(String title) {\n        // TODO\n        return null;\n    }\n    int count() {\n        return count;\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", 59));\n        lib.add(new Book(\"Python\", 49));\n        System.out.println(lib.count() + \" \" + lib.find(\"Java\").price);\n    }\n}\n\nclass Book {\n    String title;\n    int price;\n    Book(String title, int price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Library {\n    Book[] books = new Book[10];\n    int count;\n    void add(Book b) {\n        books[count] = b;\n        count++;\n    }\n    Book find(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].title.equals(title)) return books[i];\n        }\n        return null;\n    }\n    int count() {\n        return count;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "2 59",
          "className": "",
          "points": [
            "类的协作",
            "对象数组",
            "封装",
            "按条件查找"
          ],
          "hints": [
            "add 里把书放进 books[count]，然后 count++。",
            "find 遍历 0 到 count-1，用 title.equals 比较书名。",
            "main 里依次添加两本书，再输出 lib.count() 和 lib.find(\"Java\").price。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "算错了",
              "2 59",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `2 59`。",
            "badge": "「面向对象基础」水晶收集者",
            "xp": 24,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch07",
      "title": "面向对象进阶",
      "subtitle": "抽象、接口、枚举与记录类",
      "color": "#A5D6A7",
      "lessons": [
        {
          "id": "abstract",
          "title": "抽象类",
          "subtitle": "只定义“应该有什么”，不急着实现",
          "difficulty": 3,
          "minutes": 15,
          "normal": "抽象类用 abstract 修饰，不能直接 new。它可以包含抽象方法（只有声明、没有方法体），也可以包含普通方法和字段。\n子类必须实现所有抽象方法，否则子类也必须是抽象类。抽象类适合表达“一类事物的共同模板”。",
          "plain": "抽象类像一份没填完的表格：它规定了必须填哪些项，但具体内容留给子类。\n你不能直接交一份空白表格，必须先补完才能使用。",
          "task": "抽象类 Shape 有抽象方法 area() 和普通方法 describe()；Square 继承并实现 area()。测试 Square(2).describe() 返回“面积:4.0”。",
          "example": "abstract class Shape {\n    abstract double area();\n    String describe() { return \"面积:\" + area(); }\n}\nclass Square extends Shape {\n    double side;\n    Square(double side) { this.side = side; }\n    double area() { return side * side; }\n}",
          "exampleOutput": "面积:4.0",
          "starter": "public class Main {\n}\n\nabstract class Shape {\n    abstract double area();\n    String describe() {\n        return \"面积:\" + area();\n    }\n}\n\nclass Square extends Shape {\n    double side;\n    Square(double side) {\n        this.side = side;\n    }\n    // TODO: 实现 area()\n}",
          "solution": "public class Main {\n}\n\nabstract class Shape {\n    abstract double area();\n    String describe() {\n        return \"面积:\" + area();\n    }\n}\n\nclass Square extends Shape {\n    double side;\n    Square(double side) {\n        this.side = side;\n    }\n    double area() {\n        return side * side;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "abstract class",
            "抽象方法",
            "子类必须实现",
            "模板方法"
          ],
          "hints": [
            "Square 必须提供 area() 的具体实现。",
            "area 返回 side * side。",
            "describe 里调用 area() 时会用到 Square 的实现。"
          ],
          "calls": [
            {
              "name": "describe",
              "invoke": "new Square(2).describe()",
              "expect": "面积:4.0"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `new Square(2).describe()` 后，返回值/结果是什么？",
            "options": [
              "面积:4.0",
              "周三",
              "[]"
            ],
            "answer": 0,
            "explanation": "参考答案：`new Square(2).describe()` 的结果是 `面积:4.0`。",
            "badge": "「面向对象进阶」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "interface",
          "title": "接口",
          "subtitle": "定义能力与契约",
          "difficulty": 3,
          "minutes": 15,
          "normal": "接口用 interface 定义，里面的方法默认是 public abstract。类用 implements 实现接口，并必须实现其中的抽象方法。\n接口描述“能做什么”，不关心“怎么做到”。一个类可以实现多个接口，从而组合多种能力。",
          "plain": "接口像一份能力证书：上面写着“会打招呼”，至于用中文、英文还是手势，由实现者决定。\n一个类可以考很多张证书，所以能 implements 多个接口。",
          "task": "定义 Greeter 接口和 ChineseGreeter 实现类，greet(name) 返回“你好, name”。测试 greet(\"Java\")。",
          "example": "interface Greeter {\n    String greet(String name);\n}\nclass ChineseGreeter implements Greeter {\n    public String greet(String name) { return \"你好, \" + name; }\n}",
          "exampleOutput": "你好, Java",
          "starter": "public class Main {\n}\n\ninterface Greeter {\n    String greet(String name);\n}\n\nclass ChineseGreeter implements Greeter {\n    // TODO: 实现 greet\n}",
          "solution": "public class Main {\n}\n\ninterface Greeter {\n    String greet(String name);\n}\n\nclass ChineseGreeter implements Greeter {\n    public String greet(String name) {\n        return \"你好, \" + name;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "interface",
            "implements",
            "接口方法默认 public",
            "面向接口编程"
          ],
          "hints": [
            "实现接口的方法要写 public。",
            "方法签名：public String greet(String name)。",
            "返回 \"你好, \" + name。"
          ],
          "calls": [
            {
              "name": "greet",
              "invoke": "new ChineseGreeter().greet(\"Java\")",
              "expect": "你好, Java"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new ChineseGreeter().greet(\"Java\")` 后，返回值/结果是什么？",
            "options": [
              "你好, Java",
              "最高:90 最低:60 平均:75.0",
              "a:2"
            ],
            "answer": 0,
            "explanation": "参考答案：`new ChineseGreeter().greet(\"Java\")` 的结果是 `你好, Java`。",
            "badge": "「面向对象进阶」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "default-method",
          "title": "接口默认方法",
          "subtitle": "接口也能带实现",
          "difficulty": 3,
          "minutes": 12,
          "normal": "接口方法可以用 default 关键字提供默认实现，实现类不强制重写。默认方法让接口可以在不破坏旧实现的情况下新增能力。\n如果多个接口提供同名默认方法，实现类必须自己重写以解决冲突。",
          "plain": "默认方法像“出厂设置”：接口先给你一个能用的版本，想改再改，不想改就直接用。\n这样给旧接口加新功能时，不会让所有实现类都报错。",
          "task": "接口 Animal 有 name() 和 default hello()；Cat 实现 name() 返回“Cat”。测试 new Cat().hello() 返回“I am Cat”。",
          "example": "interface Animal {\n    String name();\n    default String hello() { return \"I am \" + name(); }\n}\nclass Cat implements Animal {\n    public String name() { return \"Cat\"; }\n}",
          "exampleOutput": "I am Cat",
          "starter": "public class Main {\n}\n\ninterface Animal {\n    String name();\n    default String hello() {\n        // TODO: 返回 I am + name()\n        return \"\";\n    }\n}\n\nclass Cat implements Animal {\n    public String name() {\n        return \"Cat\";\n    }\n}",
          "solution": "public class Main {\n}\n\ninterface Animal {\n    String name();\n    default String hello() {\n        return \"I am \" + name();\n    }\n}\n\nclass Cat implements Animal {\n    public String name() {\n        return \"Cat\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "default 方法",
            "接口演化",
            "实现类可选重写",
            "默认方法冲突"
          ],
          "hints": [
            "默认方法用 default 开头，带方法体。",
            "hello 里拼接 \"I am \" + name()。",
            "Cat 只需要实现 name()。"
          ],
          "calls": [
            {
              "name": "hello",
              "invoke": "new Cat().hello()",
              "expect": "I am Cat"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new Cat().hello()` 后，返回值/结果是什么？",
            "options": [
              "偶数",
              "8",
              "I am Cat"
            ],
            "answer": 2,
            "explanation": "参考答案：`new Cat().hello()` 的结果是 `I am Cat`。",
            "badge": "「面向对象进阶」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "anonymous",
          "title": "匿名内部类",
          "subtitle": "现场实现一个接口",
          "difficulty": 3,
          "minutes": 15,
          "normal": "匿名内部类的语法是 new 接口或父类() { ... }，它会在创建对象的同时定义类体，通常用于只使用一次的简单实现。\n匿名类不能写构造方法，但可以重写方法。Lambda 能替代“只有一个抽象方法”的接口，匿名类则更通用。",
          "plain": "匿名内部类像临时工：不办入职手续，现场把活干完就走。\n如果只需要用一次，没必要专门写一个类文件。",
          "task": "用匿名内部类实现 Greeter，让 greet(\"Java\") 返回“Hi Java”，并输出它。",
          "example": "Greeter g = new Greeter() {\n    public String greet(String name) {\n        return \"Hi \" + name;\n    }\n};\nSystem.out.println(g.greet(\"Java\"));",
          "exampleOutput": "Hi Java",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            // TODO: 实现 greet\n        };\n        System.out.println(g.greet(\"Java\"));\n    }\n}\n\ninterface Greeter {\n    String greet(String name);\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            public String greet(String name) {\n                return \"Hi \" + name;\n            }\n        };\n        System.out.println(g.greet(\"Java\"));\n    }\n}\n\ninterface Greeter {\n    String greet(String name);\n}",
          "mode": "output",
          "stdin": "",
          "expected": "Hi Java",
          "className": "",
          "points": [
            "new 接口() { ... }",
            "一次性实现",
            "匿名类不能有构造方法",
            "与 Lambda 的关系"
          ],
          "hints": [
            "在大括号里写 public String greet(String name)。",
            "返回 \"Hi \" + name。",
            "匿名类最后有一个分号：};"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "7.0 3 65",
              "try",
              "Hi Java"
            ],
            "answer": 2,
            "explanation": "参考输出是 `Hi Java`。",
            "badge": "「面向对象进阶」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "enum",
          "title": "枚举",
          "subtitle": "一组固定的常量",
          "difficulty": 3,
          "minutes": 15,
          "normal": "枚举用 enum 定义，适合表示一组固定的值，例如颜色、星期、订单状态。枚举常量本质上是该类的实例。\n常用方法：name() 返回常量名，ordinal() 返回序号（从 0 开始），values() 返回所有常量，valueOf() 按名字查找。",
          "plain": "枚举像一盒固定口味的糖果：只有这几种，不能临时发明新口味。\n用枚举比用 1、2、3 更安全，因为写错名字编译器会提醒你。",
          "task": "定义 Color { RED, GREEN, BLUE }，测试 name()、ordinal() 和 values().length。",
          "example": "enum Color { RED, GREEN, BLUE }\nColor c = Color.RED;\nSystem.out.println(c.name() + \" \" + c.ordinal() + \" \" + Color.values().length);",
          "exampleOutput": "RED 0 3",
          "starter": "public class Main {\n}\n\nenum Color {\n    RED\n    // TODO: 再补上 GREEN 和 BLUE，注意逗号\n}",
          "solution": "public class Main {\n}\n\nenum Color {\n    RED, GREEN, BLUE\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "enum",
            "name()",
            "ordinal()",
            "values()",
            "valueOf()"
          ],
          "hints": [
            "枚举常量之间用逗号分隔。",
            "在 RED 后面补上 GREEN 和 BLUE。",
            "name() 是方法，记得写括号；values() 返回数组，用 .length 取长度。"
          ],
          "calls": [
            {
              "name": "name",
              "invoke": "Color.RED.name()",
              "expect": "RED"
            },
            {
              "name": "ordinal",
              "invoke": "Color.GREEN.ordinal()",
              "expect": "1"
            },
            {
              "name": "values",
              "invoke": "Color.values().length",
              "expect": "3"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `Color.RED.name()` 后，返回值/结果是什么？",
            "options": [
              "true",
              "面积:4.0",
              "RED"
            ],
            "answer": 2,
            "explanation": "参考答案：`Color.RED.name()` 的结果是 `RED`。",
            "badge": "「面向对象进阶」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "record",
          "title": "record 记录类",
          "subtitle": "写数据载体不再啰嗦",
          "difficulty": 3,
          "minutes": 12,
          "normal": "record 是 Java 16 正式引入的轻量数据类。record Point(int x, int y) 会自动生成字段、全参构造、访问器 x()/y()、equals、hashCode 和 toString。\nrecord 适合“只装数据”的场景，不适合需要可变状态的对象。",
          "plain": "record 像一张已经印好的登记表：你只需要写“有哪些字段”，构造、getter、比较、打印都自动送。\n但它默认不可变，想改值就得创建一个新对象。",
          "task": "定义 record Point(int x, int y)，并添加 sum() 方法返回 x + y。测试访问器、toString、equals 和 sum。",
          "example": "record Point(int x, int y) {\n    int sum() { return x + y; }\n}\nPoint p = new Point(2, 3);\nSystem.out.println(p.x() + \",\" + p.y() + \" \" + p);",
          "exampleOutput": "2,3 Point[x=2, y=3]",
          "starter": "public class Main {\n}\n\nrecord Point(int x, int y) {\n    int sum() {\n        // TODO: 返回 x + y\n        return 0;\n    }\n}",
          "solution": "public class Main {\n}\n\nrecord Point(int x, int y) {\n    int sum() {\n        return x + y;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "record 语法",
            "自动访问器",
            "equals/hashCode/toString",
            "不可变数据",
            "record 里也能写方法"
          ],
          "hints": [
            "record 的字段写在类名后面的括号里，访问器是 x()、y()。",
            "sum 方法可以直接使用 x 和 y，返回 x + y。",
            "两个字段相同的 Point 用 equals 比较应为 true。"
          ],
          "calls": [
            {
              "name": "x",
              "invoke": "new Point(2,3).x()",
              "expect": "2"
            },
            {
              "name": "toString",
              "invoke": "new Point(2,3).toString()",
              "expect": "Point[x=2, y=3]"
            },
            {
              "name": "equals",
              "invoke": "new Point(1,2).equals(new Point(1,2))",
              "expect": "true"
            },
            {
              "name": "sum",
              "invoke": "new Point(2,3).sum()",
              "expect": "5"
            }
          ],
          "reading": false,
          "since": "Java 16+",
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `new Point(2,3).x()` 后，返回值/结果是什么？",
            "options": [
              "2",
              "x",
              "I am Cat"
            ],
            "answer": 0,
            "explanation": "参考答案：`new Point(2,3).x()` 的结果是 `2`。",
            "badge": "「面向对象进阶」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "payment",
          "title": "综合：支付系统",
          "subtitle": "接口 + 多态 + 数组",
          "difficulty": 4,
          "minutes": 20,
          "normal": "支付系统可以抽象出 PayMethod 接口，支付宝、微信各自实现 pay(amount)。\n业务代码只依赖接口数组，循环调用 pay，就能在不修改循环的情况下接入新的支付方式。这就是“开闭原则”的雏形。",
          "plain": "收银台不关心你用什么付款，只关心“你能付”。\n支付宝、微信都实现同一个付款接口，收银员挨个调用就行，以后加银行卡也不用改收银台。",
          "task": "定义 PayMethod 接口、Alipay 和 WeChat 实现；main 中用接口数组依次输出“支付宝:100”和“微信:100”。",
          "example": "PayMethod[] methods = { new Alipay(), new WeChat() };\nfor (PayMethod m : methods) System.out.print(m.pay(100) + \" \");",
          "exampleOutput": "支付宝:100 微信:100",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        PayMethod[] methods = { new Alipay(), new WeChat() };\n        // TODO: 循环输出 pay(100)\n\n    }\n}\n\ninterface PayMethod {\n    String pay(int amount);\n}\n\nclass Alipay implements PayMethod {\n    public String pay(int amount) {\n        // TODO\n        return \"\";\n    }\n}\n\nclass WeChat implements PayMethod {\n    public String pay(int amount) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        PayMethod[] methods = { new Alipay(), new WeChat() };\n        for (PayMethod m : methods) {\n            System.out.print(m.pay(100) + \" \");\n        }\n    }\n}\n\ninterface PayMethod {\n    String pay(int amount);\n}\n\nclass Alipay implements PayMethod {\n    public String pay(int amount) {\n        return \"支付宝:\" + amount;\n    }\n}\n\nclass WeChat implements PayMethod {\n    public String pay(int amount) {\n        return \"微信:\" + amount;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "支付宝:100 微信:100 ",
          "className": "",
          "points": [
            "接口数组",
            "多态调用",
            "开闭原则",
            "字符串拼接"
          ],
          "hints": [
            "Alipay 返回 \"支付宝:\" + amount。",
            "WeChat 返回 \"微信:\" + amount。",
            "main 里 for-each 遍历 PayMethod[]，每次 print 结果加空格。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "13",
              "支付宝:100 微信:100",
              "7.0 3 65"
            ],
            "answer": 1,
            "explanation": "参考输出是 `支付宝:100 微信:100`。",
            "badge": "「面向对象进阶」寻宝人",
            "xp": 24,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch08",
      "title": "核心类库",
      "subtitle": "String、集合、工具类，日常开发的主力",
      "color": "#4DD0E1",
      "lessons": [
        {
          "id": "string",
          "title": "String 常用方法",
          "subtitle": "字符串是不可变的",
          "difficulty": 2,
          "minutes": 15,
          "normal": "String 是不可变对象：每次调用 toUpperCase、substring、replace 都会返回新字符串，原字符串不变。\n常用方法：length、charAt、substring、indexOf、contains、startsWith、endsWith、equals、trim、split、replace。\n判断字符串内容是否相等必须用 equals，不能用 ==；== 比较的是引用地址。",
          "plain": "String 像刻在石头上的字：你可以拓印一份新的、改一改，但原来的石头不会变。\n比较两句话内容是否一样，要用 equals，别用 ==。",
          "task": "实现 shout(String s)：去掉首尾空格、转大写，并在末尾加感叹号。测试 shout(\"  hello  \")。",
          "example": "static String shout(String s) {\n    return s.trim().toUpperCase() + \"!\";\n}",
          "exampleOutput": "HELLO!",
          "starter": "public class Main {\n    static String shout(String s) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String shout(String s) {\n        return s.trim().toUpperCase() + \"!\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "String 不可变",
            "trim / toUpperCase",
            "equals 与 ==",
            "常用查找方法"
          ],
          "hints": [
            "去掉首尾空格用 trim()。",
            "转大写用 toUpperCase()。",
            "最后拼接一个 \"!\"。"
          ],
          "calls": [
            {
              "name": "shout",
              "invoke": "shout(\"  hello  \")",
              "expect": "HELLO!"
            },
            {
              "name": "shout2",
              "invoke": "shout(\"Java\")",
              "expect": "JAVA!"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `shout(\"  hello  \")` 后，返回值/结果是什么？",
            "options": [
              "HELLO!",
              "4",
              "zero"
            ],
            "answer": 0,
            "explanation": "参考答案：`shout(\"  hello  \")` 的结果是 `HELLO!`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "stringbuilder",
          "title": "StringBuilder",
          "subtitle": "频繁拼接字符串的好帮手",
          "difficulty": 2,
          "minutes": 12,
          "normal": "String 每次拼接都会创建新对象，大量拼接时效率低。StringBuilder 是可变的字符序列，append 会直接修改自身。\n常用方法：append、insert、delete、reverse、toString。拼接完成后通常调用 toString() 转回 String。",
          "plain": "String 拼接像每次都用新纸重抄一遍；StringBuilder 像在一块白板上接着写，写完再拍照（toString）。\n循环里拼字符串，优先用 StringBuilder。",
          "task": "实现 join(String[] words)：用 StringBuilder 把单词用“-”连接起来。测试 {\"a\",\"b\",\"c\"}。",
          "example": "static String join(String[] words) {\n    StringBuilder sb = new StringBuilder();\n    for (int i = 0; i < words.length; i++) {\n        if (i > 0) sb.append(\"-\");\n        sb.append(words[i]);\n    }\n    return sb.toString();\n}",
          "exampleOutput": "a-b-c",
          "starter": "public class Main {\n    static String join(String[] words) {\n        StringBuilder sb = new StringBuilder();\n        // TODO\n        return sb.toString();\n    }\n}",
          "solution": "public class Main {\n    static String join(String[] words) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < words.length; i++) {\n            if (i > 0) sb.append(\"-\");\n            sb.append(words[i]);\n        }\n        return sb.toString();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "StringBuilder",
            "append",
            "toString",
            "循环拼接"
          ],
          "hints": [
            "遍历 words 数组。",
            "不是第一个单词时，先 append(\"-\")。",
            "每个单词都要 append 到 sb，最后 toString()。"
          ],
          "calls": [
            {
              "name": "join",
              "invoke": "join(new String[]{\"a\",\"b\",\"c\"})",
              "expect": "a-b-c"
            },
            {
              "name": "one",
              "invoke": "join(new String[]{\"x\"})",
              "expect": "x"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `join(new String[]{\"a\",\"b\",\"c\"})` 后，返回值/结果是什么？",
            "options": [
              "奇数",
              "small",
              "a-b-c"
            ],
            "answer": 2,
            "explanation": "参考答案：`join(new String[]{\"a\",\"b\",\"c\"})` 的结果是 `a-b-c`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "math",
          "title": "Math 工具类",
          "subtitle": "开方、幂、绝对值、四舍五入",
          "difficulty": 2,
          "minutes": 10,
          "normal": "Math 是 java.lang 下的工具类，所有方法都是 static。常用：abs、max、min、pow、sqrt、round、floor、ceil、random。\nMath.round 返回 long，采用“四舍五入”；Math.floor 向下取整，Math.ceil 向上取整。",
          "plain": "Math 像计算器上的科学模式：开根号、乘方、绝对值、取整，按名字就能用。\n它不用 new，直接 Math.xxx()。",
          "task": "实现 hypotenuse(double a, double b)，返回直角三角形斜边，使用 Math.sqrt。测试 3、4 返回 5.0。",
          "example": "static double hypotenuse(double a, double b) {\n    return Math.sqrt(a * a + b * b);\n}",
          "exampleOutput": "5.0",
          "starter": "public class Main {\n    static double hypotenuse(double a, double b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static double hypotenuse(double a, double b) {\n        return Math.sqrt(a * a + b * b);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Math.sqrt",
            "Math.pow",
            "Math.abs",
            "static 调用"
          ],
          "hints": [
            "勾股定理：斜边 = √(a² + b²)。",
            "平方可以写 a * a，或 Math.pow(a, 2)。",
            "开方用 Math.sqrt。"
          ],
          "calls": [
            {
              "name": "3-4",
              "invoke": "hypotenuse(3,4)",
              "expect": "5.0"
            },
            {
              "name": "6-8",
              "invoke": "hypotenuse(6,8)",
              "expect": "10.0"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `hypotenuse(3,4)` 后，返回值/结果是什么？",
            "options": [
              "5.0",
              "Hi Java",
              "-1"
            ],
            "answer": 0,
            "explanation": "参考答案：`hypotenuse(3,4)` 的结果是 `5.0`。",
            "badge": "「核心类库」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "wrapper",
          "title": "包装类与自动装箱",
          "subtitle": "int 和 Integer 的互相转换",
          "difficulty": 3,
          "minutes": 12,
          "normal": "每种基本类型都有对应的包装类：int→Integer、double→Double、char→Character、boolean→Boolean。\n自动装箱是基本类型自动变成包装类，自动拆箱是反过来。包装类提供了 parseInt、valueOf、MAX_VALUE 等工具。\n包装类对象可以为 null，拆箱时如果为 null 会抛 NullPointerException。",
          "plain": "包装类像给基本类型穿上快递盒：需要当对象用、放进集合时，就装箱；要算数时再拆箱。\n盒子里可能是空的（null），拆之前要小心。",
          "task": "实现 parseAdd(String a, String b)，把两个字符串转成 int 后相加。测试 \"12\" 和 \"30\"。",
          "example": "static int parseAdd(String a, String b) {\n    return Integer.parseInt(a) + Integer.parseInt(b);\n}",
          "exampleOutput": "42",
          "starter": "public class Main {\n    static int parseAdd(String a, String b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int parseAdd(String a, String b) {\n        return Integer.parseInt(a) + Integer.parseInt(b);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "包装类",
            "Integer.parseInt",
            "自动装箱/拆箱",
            "MAX_VALUE"
          ],
          "hints": [
            "字符串转 int 用 Integer.parseInt。",
            "两个转换结果直接相加。",
            "注意输入不是数字时会抛 NumberFormatException。"
          ],
          "calls": [
            {
              "name": "12+30",
              "invoke": "parseAdd(\"12\",\"30\")",
              "expect": "42"
            },
            {
              "name": "1+2",
              "invoke": "parseAdd(\"1\",\"2\")",
              "expect": "3"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `parseAdd(\"12\",\"30\")` 后，返回值/结果是什么？",
            "options": [
              "9",
              "42",
              "false"
            ],
            "answer": 1,
            "explanation": "参考答案：`parseAdd(\"12\",\"30\")` 的结果是 `42`。",
            "badge": "「核心类库」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "object-equals",
          "title": "Object 与 equals/hashCode",
          "subtitle": "判断两个对象是否“相等”",
          "difficulty": 4,
          "minutes": 18,
          "normal": "所有类都默认继承 Object。Object 的 equals 比较引用地址，hashCode 返回对象哈希值，toString 返回类名@地址。\n如果业务上希望“内容相同就相等”，要重写 equals；重写 equals 时必须同时重写 hashCode，保证相等对象哈希值相同。",
          "plain": "默认的 equals 只认“是不是同一个对象”，像只认身份证号，不认长相。\n如果两个 Person 名字年龄都一样就算同一个人，就要自己重写 equals 和 hashCode。",
          "task": "实现 Person.equals：姓名和年龄都相同返回 true；并重写 hashCode、toString。测试两个内容相同的 Person。",
          "example": "public boolean equals(Object o) {\n    if (!(o instanceof Person)) return false;\n    Person p = (Person) o;\n    return name.equals(p.name) && age == p.age;\n}\npublic int hashCode() { return name.hashCode() * 31 + age; }",
          "exampleOutput": "true",
          "starter": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    // TODO: equals、hashCode、toString\n}",
          "solution": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public boolean equals(Object o) {\n        if (!(o instanceof Person)) return false;\n        Person p = (Person) o;\n        return name.equals(p.name) && age == p.age;\n    }\n    public int hashCode() {\n        return name.hashCode() * 31 + age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Object 默认方法",
            "重写 equals",
            "重写 hashCode",
            "toString"
          ],
          "hints": [
            "先用 instanceof 判断类型，再强转。",
            "比较 name 用 equals，比较 age 用 ==。",
            "hashCode 可以用 name.hashCode() * 31 + age。"
          ],
          "calls": [
            {
              "name": "equals",
              "invoke": "new Person(\"a\",18).equals(new Person(\"a\",18))",
              "expect": "true"
            },
            {
              "name": "not-equals",
              "invoke": "new Person(\"a\",18).equals(new Person(\"a\",19))",
              "expect": "false"
            },
            {
              "name": "toString",
              "invoke": "new Person(\"a\",18).toString()",
              "expect": "a:18"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `new Person(\"a\",18).equals(new Person(\"a\",18))` 后，返回值/结果是什么？",
            "options": [
              "周三",
              "true",
              "RED"
            ],
            "answer": 1,
            "explanation": "参考答案：`new Person(\"a\",18).equals(new Person(\"a\",18))` 的结果是 `true`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "arraylist",
          "title": "ArrayList 动态数组",
          "subtitle": "长度可变的集合",
          "difficulty": 2,
          "minutes": 15,
          "normal": "ArrayList 是 List 接口最常用的实现，底层是数组，但会自动扩容，长度可变。\n常用方法：add、get、set、remove、size、contains、indexOf、clear。泛型 List<String> 限定元素类型。\nremove(int) 按下标删除，remove(Object) 按内容删除；对 Integer 集合要特别注意这个区别。",
          "plain": "数组像定好座位的电影院，ArrayList 像可以加座的活动场地。\n想加就 add，想拿就 get，想知道多少人就看 size。",
          "task": "实现 evens(List<Integer> nums)，返回其中所有偶数组成的新 List。测试 [1,2,3,4]。",
          "example": "static List<Integer> evens(List<Integer> nums) {\n    List<Integer> out = new ArrayList<>();\n    for (int n : nums) if (n % 2 == 0) out.add(n);\n    return out;\n}",
          "exampleOutput": "[2, 4]",
          "starter": "import java.util.*;\n\npublic class Main {\n    static List<Integer> evens(List<Integer> nums) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static List<Integer> evens(List<Integer> nums) {\n        List<Integer> out = new ArrayList<>();\n        for (int n : nums) {\n            if (n % 2 == 0) out.add(n);\n        }\n        return out;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "ArrayList",
            "泛型 List<Integer>",
            "add/get/size",
            "for-each"
          ],
          "hints": [
            "创建一个新的 ArrayList<Integer>。",
            "遍历 nums，判断 n % 2 == 0。",
            "把满足条件的 n 加到新集合，最后返回。"
          ],
          "calls": [
            {
              "name": "evens",
              "invoke": "evens(Arrays.asList(1,2,3,4))",
              "expect": "[2, 4]"
            },
            {
              "name": "none",
              "invoke": "evens(Arrays.asList(1,3))",
              "expect": "[]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `evens(Arrays.asList(1,2,3,4))` 后，返回值/结果是什么？",
            "options": [
              "[2, 4]",
              "最高:90 最低:60 平均:75.0",
              "[a, b]"
            ],
            "answer": 0,
            "explanation": "参考答案：`evens(Arrays.asList(1,2,3,4))` 的结果是 `[2, 4]`。",
            "badge": "「核心类库」寻宝人",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "hashmap",
          "title": "HashMap 键值对",
          "subtitle": "用键快速查找值",
          "difficulty": 3,
          "minutes": 18,
          "normal": "HashMap 存储键值对（key-value），通过 key 快速查找 value。key 不能重复，重复 put 会覆盖旧值。\n常用方法：put、get、getOrDefault、containsKey、remove、size、keySet、values、entrySet。\nHashMap 不保证顺序；需要保持插入顺序时可以用 LinkedHashMap。",
          "plain": "HashMap 像字典：查“apple”这个词，直接翻到它的解释，不用从头找。\n每个 key 只能对应一个 value，重复放会覆盖。",
          "task": "实现 count(String[] words)，统计每个单词出现次数并返回 Map。测试 {\"a\",\"b\",\"a\"}。",
          "example": "static Map<String,Integer> count(String[] words) {\n    Map<String,Integer> map = new HashMap<>();\n    for (String w : words) map.put(w, map.getOrDefault(w, 0) + 1);\n    return map;\n}",
          "exampleOutput": "{a=2, b=1}",
          "starter": "import java.util.*;\n\npublic class Main {\n    static Map<String,Integer> count(String[] words) {\n        // TODO\n        return new HashMap<>();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static Map<String,Integer> count(String[] words) {\n        Map<String,Integer> map = new HashMap<>();\n        for (String w : words) {\n            map.put(w, map.getOrDefault(w, 0) + 1);\n        }\n        return map;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "HashMap",
            "put/get",
            "getOrDefault",
            "entrySet 遍历"
          ],
          "hints": [
            "创建 HashMap<String,Integer>。",
            "遍历单词，用 getOrDefault(w, 0) 取旧次数。",
            "put(w, 旧次数 + 1)。"
          ],
          "calls": [
            {
              "name": "count",
              "invoke": "count(new String[]{\"a\",\"b\",\"a\"})",
              "expect": "{a=2, b=1}"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `count(new String[]{\"a\",\"b\",\"a\"})` 后，返回值/结果是什么？",
            "options": [
              "{a=2, b=1}",
              "8",
              "small"
            ],
            "answer": 0,
            "explanation": "参考答案：`count(new String[]{\"a\",\"b\",\"a\"})` 的结果是 `{a=2, b=1}`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "hashset",
          "title": "HashSet 去重集合",
          "subtitle": "只关心“有没有”",
          "difficulty": 2,
          "minutes": 12,
          "normal": "HashSet 是不允许重复元素的集合，适合去重和快速判断存在性。add 重复元素会返回 false。\nHashSet 不保证顺序；需要保留插入顺序可以用 LinkedHashSet，需要排序可以用 TreeSet。",
          "plain": "HashSet 像夜店的保安：同一个人只能进一次，重复来会被拦下。\n它不记排队顺序，只负责“你在不在里面”。",
          "task": "实现 unique(String[] words)，返回去重后的 Set。测试 {\"a\",\"b\",\"a\"}。",
          "example": "static Set<String> unique(String[] words) {\n    Set<String> set = new HashSet<>();\n    for (String w : words) set.add(w);\n    return set;\n}",
          "exampleOutput": "[a, b]",
          "starter": "import java.util.*;\n\npublic class Main {\n    static Set<String> unique(String[] words) {\n        // TODO\n        return new HashSet<>();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static Set<String> unique(String[] words) {\n        Set<String> set = new HashSet<>();\n        for (String w : words) set.add(w);\n        return set;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "HashSet",
            "去重",
            "add 返回值",
            "Set 遍历"
          ],
          "hints": [
            "HashSet 的 add 会自动忽略重复元素。",
            "遍历数组，把每个单词 add 进去。",
            "返回 Set 即可，显示时会用 [a, b] 的形式。"
          ],
          "calls": [
            {
              "name": "unique",
              "invoke": "unique(new String[]{\"a\",\"b\",\"a\"})",
              "expect": "[a, b]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `unique(new String[]{\"a\",\"b\",\"a\"})` 后，返回值/结果是什么？",
            "options": [
              "7",
              "小明 18",
              "[a, b]"
            ],
            "answer": 2,
            "explanation": "参考答案：`unique(new String[]{\"a\",\"b\",\"a\"})` 的结果是 `[a, b]`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 18,
            "boss": false
          }
        },
        {
          "id": "collections",
          "title": "Collections 工具类",
          "subtitle": "排序、反转、最值",
          "difficulty": 3,
          "minutes": 15,
          "normal": "Collections 是操作集合的工具类，常用方法：sort、reverse、shuffle、max、min、frequency、swap、unmodifiableList。\nsort 默认使用元素的自然顺序；对自定义对象排序时，需要实现 Comparable 或传入 Comparator。",
          "plain": "Collections 是集合的瑞士军刀：排序、翻转、洗牌、找最大最小，都有现成工具。\n不过它只负责“操作”，集合本身还是 List/Set/Map。",
          "task": "实现 desc(List<Integer> nums)：先升序排序，再反转，返回降序列表。测试 [3,9,2]。",
          "example": "static List<Integer> desc(List<Integer> nums) {\n    Collections.sort(nums);\n    Collections.reverse(nums);\n    return nums;\n}",
          "exampleOutput": "[9, 3, 2]",
          "starter": "import java.util.*;\n\npublic class Main {\n    static List<Integer> desc(List<Integer> nums) {\n        // TODO\n        return nums;\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static List<Integer> desc(List<Integer> nums) {\n        Collections.sort(nums);\n        Collections.reverse(nums);\n        return nums;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Collections.sort",
            "Collections.reverse",
            "自然排序",
            "原地修改"
          ],
          "hints": [
            "先调用 Collections.sort(nums) 升序。",
            "再调用 Collections.reverse(nums) 反转。",
            "返回同一个 nums 即可。"
          ],
          "calls": [
            {
              "name": "desc",
              "invoke": "desc(new ArrayList<>(Arrays.asList(3,9,2)))",
              "expect": "[9, 3, 2]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `desc(new ArrayList<>(Arrays.asList(3,9,2)))` 后，返回值/结果是什么？",
            "options": [
              "面积:4.0",
              "[9, 3, 2]",
              "10"
            ],
            "answer": 1,
            "explanation": "参考答案：`desc(new ArrayList<>(Arrays.asList(3,9,2)))` 的结果是 `[9, 3, 2]`。",
            "badge": "「核心类库」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "comparator",
          "title": "Comparator 自定义排序",
          "subtitle": "按姓名、年龄、成绩排序",
          "difficulty": 4,
          "minutes": 18,
          "normal": "Comparator 是一个比较器接口，compare(a,b) 返回负数表示 a 排在 b 前，0 表示相等，正数表示 a 在后。\nJava 8 提供了 Comparator.comparing、comparingInt、reversed、thenComparing 等链式工具，配合 Lambda 非常简洁。",
          "plain": "Comparator 像裁判：你告诉它“按年龄比”还是“按姓名比”，它负责给队列排顺序。\ncomparing 是裁判的快捷口令，不用自己写一长串比较逻辑。",
          "task": "实现 byAge(List<Person> ps)，按年龄升序排序并返回。Person 的 toString 返回“name:age”。",
          "example": "ps.sort(Comparator.comparingInt(p -> p.age));",
          "exampleOutput": "[b:20, a:30]",
          "starter": "import java.util.*;\n\npublic class Main {\n    static List<Person> byAge(List<Person> ps) {\n        // TODO\n        return ps;\n    }\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static List<Person> byAge(List<Person> ps) {\n        ps.sort(Comparator.comparingInt(p -> p.age));\n        return ps;\n    }\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Comparator.comparingInt",
            "List.sort",
            "Lambda",
            "链式比较器"
          ],
          "hints": [
            "使用 ps.sort(...)。",
            "Comparator.comparingInt(p -> p.age) 可以按年龄升序。",
            "返回 ps，排序是原地修改。"
          ],
          "calls": [
            {
              "name": "byAge",
              "invoke": "byAge(new ArrayList<>(Arrays.asList(new Person(\"a\",30), new Person(\"b\",20))))",
              "expect": "[b:20, a:30]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `byAge(new ArrayList<>(Arrays.asList(new Person(\"a\",30), new Person(\"b\",20))))` 后，返回值/结果是什么？",
            "options": [
              "[b:20, a:30]",
              "a-b-c",
              "3"
            ],
            "answer": 0,
            "explanation": "参考答案：`byAge(new ArrayList<>(Arrays.asList(new Person(\"a\",30), new Person(\"b\",20))))` 的结果是 `[b:20, a:30]`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "datetime",
          "title": "日期时间 API",
          "subtitle": "LocalDate 与格式化",
          "difficulty": 3,
          "minutes": 15,
          "normal": "java.time 包提供了线程安全的日期时间类：LocalDate 表示日期，LocalDateTime 表示日期时间，Duration 表示时间间隔。\nLocalDate.of(2024,2,28).plusDays(2) 会正确处理闰年，得到 2024-03-01。\n格式化用 DateTimeFormatter.ofPattern(\"yyyy-MM-dd\")。",
          "plain": "LocalDate 像一张会自己翻页的日历：加两天，它会自动处理月底和闰年，不用你手算。\n它比老的 Date 更清晰，也不会莫名其妙被改。",
          "task": "实现 addDays(String date, int n)：解析 yyyy-MM-dd，加 n 天，返回 yyyy-MM-dd 字符串。测试 2024-02-28 加 2 天。",
          "example": "static String addDays(String date, int n) {\n    LocalDate d = LocalDate.parse(date);\n    return d.plusDays(n).toString();\n}",
          "exampleOutput": "2024-03-01",
          "starter": "import java.time.*;\n\npublic class Main {\n    static String addDays(String date, int n) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.time.*;\n\npublic class Main {\n    static String addDays(String date, int n) {\n        LocalDate d = LocalDate.parse(date);\n        return d.plusDays(n).toString();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "LocalDate.parse",
            "plusDays",
            "DateTimeFormatter",
            "不可变对象"
          ],
          "hints": [
            "用 LocalDate.parse(date) 解析日期。",
            "调用 plusDays(n) 得到新日期。",
            "toString() 默认就是 yyyy-MM-dd 格式。"
          ],
          "calls": [
            {
              "name": "leap",
              "invoke": "addDays(\"2024-02-28\",2)",
              "expect": "2024-03-01"
            },
            {
              "name": "month",
              "invoke": "addDays(\"2024-01-31\",1)",
              "expect": "2024-02-01"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `addDays(\"2024-02-28\",2)` 后，返回值/结果是什么？",
            "options": [
              "RED",
              "[]",
              "2024-03-01"
            ],
            "answer": 2,
            "explanation": "参考答案：`addDays(\"2024-02-28\",2)` 的结果是 `2024-03-01`。",
            "badge": "「核心类库」水晶收集者",
            "xp": 21,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch09",
      "title": "泛型与函数式",
      "subtitle": "写出更通用、更简洁的 Java",
      "color": "#F48FB1",
      "lessons": [
        {
          "id": "generics-class",
          "title": "泛型类",
          "subtitle": "一个类适配多种类型",
          "difficulty": 4,
          "minutes": 18,
          "normal": "泛型用尖括号声明类型参数，例如 class Box<T>。T 是一个占位符，使用 Box<String> 时 T 就是 String。\n泛型的主要价值是类型安全和代码复用：编译器会在编译期检查你放进去和取出来的类型是否匹配，避免强转。\nJava 泛型采用类型擦除，运行时不保留具体类型参数。",
          "plain": "泛型像可调节的快递箱：今天装书，明天装鞋，箱子的规则会根据你贴的标签自动检查。\nBox<String> 就表示“只能装字符串的箱子”，塞整数进去编译器会拦。",
          "task": "实现泛型类 Box<T>：字段 value，set(T) 保存，get() 返回。测试 Box<String>。",
          "example": "class Box<T> {\n    T value;\n    void set(T v) { value = v; }\n    T get() { return value; }\n}",
          "exampleOutput": "x",
          "starter": "public class Main {\n    static String boxed() {\n        Box<String> b = new Box<String>();\n        b.set(\"x\");\n        return b.get();\n    }\n    static int boxedInt() {\n        Box<Integer> b = new Box<Integer>();\n        b.set(7);\n        return b.get();\n    }\n}\n\nclass Box<T> {\n    T value;\n    void set(T v) {\n        // TODO\n    }\n    T get() {\n        // TODO\n        return null;\n    }\n}",
          "solution": "public class Main {\n    static String boxed() {\n        Box<String> b = new Box<String>();\n        b.set(\"x\");\n        return b.get();\n    }\n    static int boxedInt() {\n        Box<Integer> b = new Box<Integer>();\n        b.set(7);\n        return b.get();\n    }\n}\n\nclass Box<T> {\n    T value;\n    void set(T v) {\n        value = v;\n    }\n    T get() {\n        return value;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "class Box<T>",
            "类型参数",
            "泛型复用",
            "类型擦除"
          ],
          "hints": [
            "字段类型写 T，表示“某种类型”。",
            "set 方法把参数 v 赋给 value。",
            "get 直接返回 value。"
          ],
          "calls": [
            {
              "name": "box",
              "invoke": "boxed()",
              "expect": "x"
            },
            {
              "name": "boxInt",
              "invoke": "boxedInt()",
              "expect": "7"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `boxed()` 后，返回值/结果是什么？",
            "options": [
              "[9, 3, 2]",
              "4",
              "x"
            ],
            "answer": 2,
            "explanation": "参考答案：`boxed()` 的结果是 `x`。",
            "badge": "「泛型与函数式」寻宝人",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "generics-method",
          "title": "泛型方法",
          "subtitle": "让方法自己推断类型",
          "difficulty": 4,
          "minutes": 15,
          "normal": "泛型方法在返回值前面声明类型参数，例如 static <T> T first(List<T> list)。调用时编译器会根据实参推断 T。\n泛型方法适合写与具体类型无关的工具逻辑。类型参数只在该方法内有效。",
          "plain": "泛型方法像万能开瓶器：你递上啤酒瓶，它就按啤酒瓶的规则开；递上罐头，它就换成罐头模式。\n你不需要告诉它具体是什么，它自己看参数就能猜出来。",
          "task": "实现 static <T> T first(List<T> list)，返回第一个元素。测试 List<String> 和 List<Integer>。",
          "example": "static <T> T first(List<T> list) {\n    return list.get(0);\n}",
          "exampleOutput": "first([a,b]) → a",
          "starter": "import java.util.*;\n\npublic class Main {\n    static <T> T first(List<T> list) {\n        // TODO\n        return null;\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static <T> T first(List<T> list) {\n        return list.get(0);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "<T> 方法类型参数",
            "类型推断",
            "List<T>",
            "泛型方法复用"
          ],
          "hints": [
            "方法签名里的 <T> 声明类型参数。",
            "List<T> 表示元素类型为 T 的列表。",
            "get(0) 取出第一个元素，直接 return。"
          ],
          "calls": [
            {
              "name": "str",
              "invoke": "first(Arrays.asList(\"a\",\"b\"))",
              "expect": "a"
            },
            {
              "name": "int",
              "invoke": "first(Arrays.asList(7,8))",
              "expect": "7"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `first(Arrays.asList(\"a\",\"b\"))` 后，返回值/结果是什么？",
            "options": [
              "small",
              "a",
              "big"
            ],
            "answer": 1,
            "explanation": "参考答案：`first(Arrays.asList(\"a\",\"b\"))` 的结果是 `a`。",
            "badge": "「泛型与函数式」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "lambda",
          "title": "Lambda 表达式",
          "subtitle": "把行为当作参数传递",
          "difficulty": 3,
          "minutes": 15,
          "normal": "Lambda 的语法是 (参数) -> 表达式 或 (参数) -> { 语句 }，用于实现函数式接口（只有一个抽象方法的接口）。\nLambda 让代码更短，也让“把一段逻辑传给方法”变得自然，例如排序规则、过滤条件、点击回调。",
          "plain": "Lambda 像把一段动作装进信封：不用专门写一个类，直接把“怎么做”递给方法。\n例如“按年龄排序”就是一张小纸条，递给 sort 即可。",
          "task": "实现 applyOp(Operation op, int a, int b)，调用 op.apply(a,b)。测试传入 (a,b)->a+b 和 (a,b)->a*b。",
          "example": "interface Operation { int apply(int a, int b); }\nstatic int applyOp(Operation op, int a, int b) {\n    return op.apply(a, b);\n}",
          "exampleOutput": "5 / 6",
          "starter": "public class Main {\n    interface Operation {\n        int apply(int a, int b);\n    }\n    static int applyOp(Operation op, int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    interface Operation {\n        int apply(int a, int b);\n    }\n    static int applyOp(Operation op, int a, int b) {\n        return op.apply(a, b);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "(参数) -> 表达式",
            "函数式接口",
            "行为参数化",
            "类型推断"
          ],
          "hints": [
            "Operation 只有一个抽象方法 apply。",
            "applyOp 里调用 op.apply(a, b)。",
            "Lambda (a,b)->a+b 会自动匹配 Operation。"
          ],
          "calls": [
            {
              "name": "add",
              "invoke": "applyOp((a,b)->a+b, 2, 3)",
              "expect": "5"
            },
            {
              "name": "mul",
              "invoke": "applyOp((a,b)->a*b, 2, 3)",
              "expect": "6"
            }
          ],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `applyOp((a,b)->a+b, 2, 3)` 后，返回值/结果是什么？",
            "options": [
              "5",
              "Hi Java",
              "9"
            ],
            "answer": 0,
            "explanation": "参考答案：`applyOp((a,b)->a+b, 2, 3)` 的结果是 `5`。",
            "badge": "「泛型与函数式」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "functional",
          "title": "函数式接口",
          "subtitle": "Predicate、Function、Consumer",
          "difficulty": 4,
          "minutes": 15,
          "normal": "只有一个抽象方法的接口叫函数式接口，可以用 @FunctionalInterface 标注。Java 内置了常用接口：\nPredicate<T> 判断（test）、Function<T,R> 转换（apply）、Consumer<T> 消费（accept）、Supplier<T> 提供（get）。\n它们让通用逻辑可以接收不同的行为。",
          "plain": "函数式接口是“只留一个动作插槽”的接口：Predicate 插“判断”，Function 插“转换”，Consumer 插“处理”。\n有了这些标准插槽，很多工具方法就不用为每种行为各写一遍。",
          "task": "实现 filter(List<Integer> nums, Predicate<Integer> p)，返回满足条件的元素。测试保留偶数。",
          "example": "static List<Integer> filter(List<Integer> nums, Predicate<Integer> p) {\n    List<Integer> out = new ArrayList<>();\n    for (int n : nums) if (p.test(n)) out.add(n);\n    return out;\n}",
          "exampleOutput": "[2, 4]",
          "starter": "import java.util.*;\nimport java.util.function.*;\n\npublic class Main {\n    static List<Integer> filter(List<Integer> nums, Predicate<Integer> p) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.function.*;\n\npublic class Main {\n    static List<Integer> filter(List<Integer> nums, Predicate<Integer> p) {\n        List<Integer> out = new ArrayList<>();\n        for (int n : nums) {\n            if (p.test(n)) out.add(n);\n        }\n        return out;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "@FunctionalInterface",
            "Predicate.test",
            "Function.apply",
            "行为复用"
          ],
          "hints": [
            "Predicate 的判断方法是 test。",
            "遍历 nums，test 为 true 就 add 到结果。",
            "测试会传入 n -> n % 2 == 0。"
          ],
          "calls": [
            {
              "name": "even",
              "invoke": "filter(Arrays.asList(1,2,3,4), n -> n % 2 == 0)",
              "expect": "[2, 4]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `filter(Arrays.asList(1,2,3,4), n -> n % 2 == 0)` 后，返回值/结果是什么？",
            "options": [
              "9",
              "[2, 4]",
              "0"
            ],
            "answer": 1,
            "explanation": "参考答案：`filter(Arrays.asList(1,2,3,4), n -> n % 2 == 0)` 的结果是 `[2, 4]`。",
            "badge": "「泛型与函数式」寻宝人",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "method-ref",
          "title": "方法引用",
          "subtitle": ":: 是 Lambda 的简写",
          "difficulty": 4,
          "minutes": 15,
          "normal": "方法引用用 :: 引用一个已有方法，常见形式：类名::静态方法、对象::实例方法、类名::实例方法、类名::new。\n当 Lambda 只是“原样调用某个方法”时，方法引用更短、更清晰。编译器会根据函数式接口推断参数。",
          "plain": "方法引用像给现有工具贴一个快捷方式：不用再写一遍“把参数传给这个方法”。\nString::length 就是“拿到字符串，调用它的 length”。",
          "task": "实现 transform(String s, Function<String,Integer> f)，返回 f.apply(s)。测试传入 String::length。",
          "example": "static int transform(String s, Function<String,Integer> f) {\n    return f.apply(s);\n}",
          "exampleOutput": "4",
          "starter": "import java.util.function.*;\n\npublic class Main {\n    static int transform(String s, Function<String,Integer> f) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "import java.util.function.*;\n\npublic class Main {\n    static int transform(String s, Function<String,Integer> f) {\n        return f.apply(s);\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            ":: 方法引用",
            "静态方法引用",
            "实例方法引用",
            "构造方法引用"
          ],
          "hints": [
            "Function 的抽象方法是 apply。",
            "直接 return f.apply(s);",
            "String::length 等价于 s -> s.length()。"
          ],
          "calls": [
            {
              "name": "length",
              "invoke": "transform(\"java\", String::length)",
              "expect": "4"
            },
            {
              "name": "parse",
              "invoke": "transform(\"42\", Integer::parseInt)",
              "expect": "42"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `transform(\"java\", String::length)` 后，返回值/结果是什么？",
            "options": [
              "周三",
              "4",
              "18"
            ],
            "answer": 1,
            "explanation": "参考答案：`transform(\"java\", String::length)` 的结果是 `4`。",
            "badge": "「泛型与函数式」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "stream",
          "title": "Stream 入门",
          "subtitle": "像流水线一样处理集合",
          "difficulty": 4,
          "minutes": 18,
          "normal": "Stream 是 Java 8 引入的集合处理方式：先创建流，再经过 filter、map 等中间操作，最后用 collect、forEach、count 等终止操作得到结果。\n中间操作是惰性的，只有遇到终止操作才会真正执行。Stream 不修改原集合，而是产生新的结果。",
          "plain": "Stream 像一条流水线：原料（集合）进去，先过滤掉不合格的，再加工，最后装箱（collect）。\n每一步都不改原料，只把半成品传给下一站。",
          "task": "实现 squares(List<Integer> nums)：保留偶数，平方，收集成 List。测试 [1,2,3,4] 返回 [4, 16]。",
          "example": "nums.stream().filter(n -> n % 2 == 0).map(n -> n * n).collect(Collectors.toList())",
          "exampleOutput": "[4, 16]",
          "starter": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<Integer> squares(List<Integer> nums) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<Integer> squares(List<Integer> nums) {\n        return nums.stream()\n                .filter(n -> n % 2 == 0)\n                .map(n -> n * n)\n                .collect(Collectors.toList());\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "stream()",
            "filter",
            "map",
            "collect(Collectors.toList())"
          ],
          "hints": [
            "先 nums.stream()。",
            "filter 保留偶数，map 把 n 变成 n*n。",
            "最后 collect(Collectors.toList())。"
          ],
          "calls": [
            {
              "name": "squares",
              "invoke": "squares(Arrays.asList(1,2,3,4))",
              "expect": "[4, 16]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `squares(Arrays.asList(1,2,3,4))` 后，返回值/结果是什么？",
            "options": [
              "最高:90 最低:60 平均:75.0",
              "[4, 16]",
              "Point[x=2, y=3]"
            ],
            "answer": 1,
            "explanation": "参考答案：`squares(Arrays.asList(1,2,3,4))` 的结果是 `[4, 16]`。",
            "badge": "「泛型与函数式」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "optional",
          "title": "Optional 空值容器",
          "subtitle": "优雅地处理“可能没有值”",
          "difficulty": 4,
          "minutes": 15,
          "normal": "Optional<T> 是一个可能包含值、也可能为空的容器，用来减少 NullPointerException。\n常用方法：of、ofNullable、empty、isPresent、isEmpty、get、orElse、map、ifPresent。\nOptional 适合作为返回值表达“可能找不到”，不建议作为字段类型或方法参数滥用。",
          "plain": "Optional 像盲盒：可能里面有东西，也可能是空的。\n用 orElse 可以提前准备一个“没有就用的默认值”，避免直接拆盒时炸掉。",
          "task": "实现 nameOrUnknown(Optional<String> o)：有值返回该值，否则返回“未知”。测试 of(\"Java\") 和 empty()。",
          "example": "static String nameOrUnknown(Optional<String> o) {\n    return o.orElse(\"未知\");\n}",
          "exampleOutput": "Java / 未知",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String nameOrUnknown(Optional<String> o) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String nameOrUnknown(Optional<String> o) {\n        return o.orElse(\"未知\");\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Optional.of / empty",
            "isPresent",
            "orElse",
            "map"
          ],
          "hints": [
            "orElse(默认值) 会在 Optional 为空时返回默认值。",
            "有值时直接返回内部的值。",
            "测试会传 Optional.of(\"Java\") 和 Optional.empty()。"
          ],
          "calls": [
            {
              "name": "present",
              "invoke": "nameOrUnknown(Optional.of(\"Java\"))",
              "expect": "Java"
            },
            {
              "name": "empty",
              "invoke": "nameOrUnknown(Optional.empty())",
              "expect": "未知"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `nameOrUnknown(Optional.of(\"Java\"))` 后，返回值/结果是什么？",
            "options": [
              "Java",
              "8",
              "[9, 3, 2]"
            ],
            "answer": 0,
            "explanation": "参考答案：`nameOrUnknown(Optional.of(\"Java\"))` 的结果是 `Java`。",
            "badge": "「泛型与函数式」寻宝人",
            "xp": 24,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch10",
      "title": "异常处理",
      "subtitle": "程序出错时，别让整个应用崩掉",
      "color": "#EF9A9A",
      "lessons": [
        {
          "id": "try-catch",
          "title": "try-catch",
          "subtitle": "捕获并处理异常",
          "difficulty": 3,
          "minutes": 15,
          "normal": "把可能出错的代码放在 try 块里；一旦抛出异常，程序会跳转到匹配的 catch 块，而不是直接崩溃。\ncatch 的参数是异常对象，可以调用 getMessage() 查看原因。多个 catch 要从具体到宽泛排列。",
          "plain": "try 像走钢丝，catch 像下面的安全网：掉下去会被接住，不至于摔到整个程序都停掉。\n接住之后你可以选择记录原因、给用户提示，或者继续尝试。",
          "task": "用 try-catch 捕获整数除零异常，输出“不能除以0”，程序不要崩溃。",
          "example": "try {\n    int x = 10 / 0;\n    System.out.println(x);\n} catch (ArithmeticException e) {\n    System.out.println(\"不能除以0\");\n}",
          "exampleOutput": "不能除以0",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 try-catch 捕获 10 / 0\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 10 / 0;\n            System.out.println(x);\n        } catch (ArithmeticException e) {\n            System.out.println(\"不能除以0\");\n        }\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "不能除以0",
          "className": "",
          "points": [
            "try / catch",
            "ArithmeticException",
            "异常对象",
            "程序恢复"
          ],
          "hints": [
            "把 10 / 0 放进 try 块。",
            "catch (ArithmeticException e) 捕获算术异常。",
            "在 catch 里输出 不能除以0。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "1*1=1",
              "Hi Java",
              "不能除以0"
            ],
            "answer": 2,
            "explanation": "参考输出是 `不能除以0`。",
            "badge": "「异常处理」屠龙者",
            "xp": 39,
            "boss": true
          }
        },
        {
          "id": "finally",
          "title": "finally",
          "subtitle": "无论成败都会执行",
          "difficulty": 3,
          "minutes": 12,
          "normal": "finally 块无论 try 是否抛出异常、是否 return，都会执行，常用于释放资源、关闭连接。\n如果 finally 里也 return，会覆盖 try/catch 的返回值，所以不要在 finally 里写 return。",
          "plain": "finally 像出门前关灯：不管今天顺利不顺利，最后这一步都要做。\n哪怕中途 return 了，finally 也会先执行完再走。",
          "task": "在 try 中输出“try”，在 finally 中输出“finally”，观察执行顺序。",
          "example": "try {\n    System.out.println(\"try\");\n} finally {\n    System.out.println(\"finally\");\n}",
          "exampleOutput": "try\nfinally",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: try 输出 try，finally 输出 finally\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"try\");\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "try\nfinally",
          "className": "",
          "points": [
            "finally 必执行",
            "return 与 finally",
            "资源释放",
            "执行顺序"
          ],
          "hints": [
            "finally 必须和 try 一起出现。",
            "try 里输出 try。",
            "finally 里输出 finally。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "Hello IO",
              "try",
              "count=2000"
            ],
            "answer": 1,
            "explanation": "参考输出是 `try\\nfinally`。",
            "badge": "「异常处理」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "throw-custom",
          "title": "throw 与自定义异常",
          "subtitle": "主动抛出业务异常",
          "difficulty": 4,
          "minutes": 18,
          "normal": "throw 用于主动抛出异常对象；throws 写在方法签名上，声明这个方法可能抛出哪些异常。\n自定义异常通常继承 Exception（受检异常）或 RuntimeException（非受检异常），并保留带 message 的构造方法。\n受检异常必须被 catch 或在方法上声明 throws。",
          "plain": "throw 是你主动拉响警报：这事不对，我要报告。\n自定义异常就是公司内部专用的警报类型，比“通用错误”更能说明问题。",
          "task": "实现 safeDivide(int a,int b)：b 为 0 时返回 -1，否则返回 a/b；可自行用异常实现。",
          "example": "static int safeDivide(int a, int b) {\n    if (b == 0) return -1;\n    return a / b;\n}",
          "exampleOutput": "3 / -1",
          "starter": "public class Main {\n    static int safeDivide(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int safeDivide(int a, int b) {\n        if (b == 0) return -1;\n        return a / b;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "throw",
            "throws",
            "extends Exception",
            "受检异常"
          ],
          "hints": [
            "先判断 b == 0，直接返回 -1。",
            "正常情况返回 a / b。",
            "如果使用异常，记得在调用处 catch。"
          ],
          "calls": [
            {
              "name": "ok",
              "invoke": "safeDivide(6,3)",
              "expect": "2"
            },
            {
              "name": "zero",
              "invoke": "safeDivide(6,0)",
              "expect": "-1"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `safeDivide(6,3)` 后，返回值/结果是什么？",
            "options": [
              "x",
              "2",
              "最高:90 最低:60 平均:75.0"
            ],
            "answer": 1,
            "explanation": "参考答案：`safeDivide(6,3)` 的结果是 `2`。",
            "badge": "「异常处理」寻宝人",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "try-resources",
          "title": "try-with-resources",
          "subtitle": "自动关闭资源",
          "difficulty": 4,
          "minutes": 15,
          "normal": "try-with-resources 的语法是 try (资源声明) { ... }，只要资源实现了 AutoCloseable，离开 try 时会自动调用 close()。\n它比手写 finally 更简洁，也能避免忘记关闭文件、网络连接、Scanner 等资源。",
          "plain": "try-with-resources 像自动关门的电梯：你进去用完，门自己关上，不用手动按关闭。\n忘记 close 会导致资源泄漏，这个语法帮你兜底。",
          "task": "用 try-with-resources 创建 Scanner 读取 42 并输出，让 Scanner 自动关闭。",
          "example": "try (Scanner sc = new Scanner(\"42\")) {\n    System.out.println(sc.nextInt());\n}",
          "exampleOutput": "42",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: try-with-resources 读取 42\n\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        try (Scanner sc = new Scanner(\"42\")) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "42",
          "className": "",
          "points": [
            "try (资源)",
            "AutoCloseable",
            "自动 close",
            "资源泄漏"
          ],
          "hints": [
            "资源声明写在 try 后面的圆括号里。",
            "Scanner sc = new Scanner(\"42\")。",
            "在 try 块里输出 sc.nextInt()。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "42",
              "13 7 30 3 1",
              "1*1=1"
            ],
            "answer": 0,
            "explanation": "参考输出是 `42`。",
            "badge": "「异常处理」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "exception-practice",
          "title": "综合：异常处理实战",
          "subtitle": "多分支 catch 与恢复",
          "difficulty": 4,
          "minutes": 18,
          "normal": "真实程序可能同时面对多种异常：数组越界、数字格式错误、空指针等。可以为每种异常写一个 catch，分别处理。\n处理异常时，至少要记录原因或给用户可理解的提示；不要写一个空的 catch 把错误吞掉。",
          "plain": "异常处理像医院分诊：骨折去骨科，感冒去内科，不能所有人都塞进同一个房间。\n更不能用一块布把警报器捂住——出了问题要让人知道。",
          "task": "分别捕获 ArrayIndexOutOfBoundsException 和 NumberFormatException，输出对应的提示。",
          "example": "try {\n    int[] a = new int[2];\n    a[3] = 1;\n} catch (ArrayIndexOutOfBoundsException e) {\n    System.out.println(\"数组越界\");\n}",
          "exampleOutput": "数组越界",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 捕获数组越界，输出 数组越界\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] a = new int[2];\n            a[3] = 1;\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"数组越界\");\n        }\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "数组越界",
          "className": "",
          "points": [
            "多个 catch",
            "具体到宽泛",
            "异常信息",
            "不要吞异常"
          ],
          "hints": [
            "创建长度为 2 的数组，访问下标 3。",
            "catch (ArrayIndexOutOfBoundsException e)。",
            "在 catch 里输出 数组越界。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "数组越界",
              "5",
              "count=2000"
            ],
            "answer": 0,
            "explanation": "参考输出是 `数组越界`。",
            "badge": "「异常处理」水晶收集者",
            "xp": 24,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch11",
      "title": "并发、IO 与拓展",
      "subtitle": "让程序同时做事、读写文件、连接世界",
      "color": "#90CAF9",
      "lessons": [
        {
          "id": "thread",
          "title": "线程基础",
          "subtitle": "让两段代码“同时”跑",
          "difficulty": 4,
          "minutes": 18,
          "normal": "线程是程序执行的最小单位。创建线程常见方式：继承 Thread 并重写 run()，或把 Runnable 传给 Thread。\n调用 start() 才会启动新线程，直接调用 run() 只是普通方法调用。多个线程的执行顺序由调度器决定，不能假设谁先谁后。\n本学习运行时为了保证结果可复现，会把 start() 按顺序模拟执行，真实 JVM 中则是并发执行。",
          "plain": "线程像餐厅里的多个服务员：可以同时接待不同客人，但谁先上菜没有固定剧本。\nstart 是“新开一个服务员”，run 只是“你自己把活干一遍”。",
          "task": "创建线程输出 child，主线程 join 后输出 main。",
          "example": "Thread t = new Thread(() -> System.out.println(\"child\"));\nt.start();\nt.join();\nSystem.out.println(\"main\");",
          "exampleOutput": "child\nmain",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 创建线程输出 child，join 后输出 main\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println(\"child\"));\n        t.start();\n        t.join();\n        System.out.println(\"main\");\n    }\n}\n",
          "mode": "output",
          "stdin": "",
          "expected": "child\nmain",
          "className": "",
          "points": [
            "Thread",
            "Runnable",
            "start 与 run",
            "join",
            "并发不确定性"
          ],
          "hints": [
            "new Thread(() -> { ... }) 可以传入 Runnable。",
            "调用 t.start() 启动，t.join() 等待它结束。",
            "最后在主线程输出 main。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "7.0 3 65",
              "[1, 2, 3] 1",
              "child"
            ],
            "answer": 2,
            "explanation": "参考输出是 `child\\nmain`。",
            "badge": "「并发、IO 与拓展」屠龙者",
            "xp": 42,
            "boss": true
          }
        },
        {
          "id": "sync",
          "title": "线程同步",
          "subtitle": "synchronized 保护共享数据",
          "difficulty": 5,
          "minutes": 20,
          "normal": "多个线程同时修改共享变量会出现竞态条件，结果可能少加。synchronized 可以让同一时刻只有一个线程进入临界区。\n可以修饰方法，也可以写 synchronized (锁对象) { ... }。锁的对象必须一致，否则保护不住。\n本学习运行时是顺序模拟，因此结果总是 2000，但请理解真实并发下的风险。",
          "plain": "共享变量像一个公共账本，两个会计同时写会写乱。synchronized 像给账本加一把锁：一个人写完，另一个人再写。\n锁必须锁同一本账本，锁不同的本子等于没锁。",
          "task": "用 synchronized 方法让两个线程各加 1000 次，输出 count=2000。",
          "example": "class Counter {\n    int count;\n    synchronized void inc() { count++; }\n}",
          "exampleOutput": "count=2000",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Counter c = new Counter();\n        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        // TODO: start、join，然后输出 count\n\n    }\n}\n\nclass Counter {\n    int count;\n    // TODO: 给 inc 加 synchronized\n    void inc() {\n        count++;\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Counter c = new Counter();\n        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        System.out.println(\"count=\" + c.count);\n    }\n}\n\nclass Counter {\n    int count;\n    synchronized void inc() {\n        count++;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "count=2000",
          "className": "",
          "points": [
            "竞态条件",
            "synchronized 方法",
            "临界区",
            "锁对象"
          ],
          "hints": [
            "两个线程都操作同一个 Counter 对象。",
            "在 inc 方法前加 synchronized。",
            "start 两个线程后 join，最后输出 count=2000。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "try",
              "count=2000",
              "1*1=1"
            ],
            "answer": 1,
            "explanation": "参考输出是 `count=2000`。",
            "badge": "「并发、IO 与拓展」水晶收集者",
            "xp": 27,
            "boss": false
          }
        },
        {
          "id": "file-io",
          "title": "文件读写",
          "subtitle": "NIO 的 Files 与 Path",
          "difficulty": 4,
          "minutes": 18,
          "normal": "java.nio.file.Files 提供了便捷的文件读写方法：Files.writeString(path, text)、Files.readString(path)、Files.exists(path)。\nPath 表示路径，可以用 Paths.get(\"a.txt\") 创建。真实项目中还要处理 IOException、字符编码和相对路径。\n本学习运行时使用隔离的虚拟文件系统，不会读写你手机上的真实文件。",
          "plain": "文件读写像把纸条放进抽屉再拿出来：writeString 放进去，readString 拿出来。\n这里用的是“教学抽屉”，不会碰你手机里的真实文件，放心试。",
          "task": "把 Hello IO 写入 note.txt，再读出来输出。",
          "example": "Path p = Paths.get(\"note.txt\");\nFiles.writeString(p, \"Hello IO\");\nSystem.out.println(Files.readString(p));",
          "exampleOutput": "Hello IO",
          "starter": "import java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Path p = Paths.get(\"note.txt\");\n        // TODO: 写入并读取\n\n    }\n}",
          "solution": "import java.nio.file.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Path p = Paths.get(\"note.txt\");\n        Files.writeString(p, \"Hello IO\");\n        System.out.println(Files.readString(p));\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "Hello IO",
          "className": "",
          "points": [
            "Path / Paths.get",
            "Files.writeString",
            "Files.readString",
            "IOException"
          ],
          "hints": [
            "写入用 Files.writeString(p, \"Hello IO\")。",
            "读取用 Files.readString(p)。",
            "把读取结果打印出来。"
          ],
          "calls": [],
          "reading": false,
          "since": "Java 11+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "child",
              "[x] 学习Java",
              "Hello IO"
            ],
            "answer": 2,
            "explanation": "参考输出是 `Hello IO`。",
            "badge": "「并发、IO 与拓展」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "regex",
          "title": "正则表达式",
          "subtitle": "用模式匹配文本",
          "difficulty": 5,
          "minutes": 20,
          "normal": "正则表达式是描述文本模式的字符串，常用于校验、查找、替换。\\\\d 表示数字，+ 表示一个或多个，* 表示零个或多个。\nJava 中用 Pattern.compile(regex) 编译模式，matcher(text) 创建匹配器，find() 查找下一个匹配，group() 取匹配内容。\nString 也提供了 matches、replaceAll、split 等正则方法。",
          "plain": "正则像一张筛子：你定义筛孔形状，符合条件的文本就留下来。\n\\\\d+ 就是“一段连续数字”的筛孔，能从 a12b345 里筛出 12 和 345。",
          "task": "实现 findAll(String text, String regex)，返回所有匹配到的子串 List。测试 a12b345 和 \\\\d+ 返回 [12, 345]。",
          "example": "Pattern p = Pattern.compile(\"\\\\d+\");\nMatcher m = p.matcher(\"a12b345\");\nwhile (m.find()) System.out.println(m.group());",
          "exampleOutput": "12\n345",
          "starter": "import java.util.*;\nimport java.util.regex.*;\n\npublic class Main {\n    static List<String> findAll(String text, String regex) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.regex.*;\n\npublic class Main {\n    static List<String> findAll(String text, String regex) {\n        List<String> out = new ArrayList<>();\n        Matcher m = Pattern.compile(regex).matcher(text);\n        while (m.find()) out.add(m.group());\n        return out;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Pattern.compile",
            "Matcher.find",
            "group",
            "量词 + 与 *"
          ],
          "hints": [
            "先 Pattern.compile(regex)，再 matcher(text)。",
            "用 while (m.find()) 循环查找。",
            "每次 find 成功后用 m.group() 取内容。"
          ],
          "calls": [
            {
              "name": "nums",
              "invoke": "findAll(\"a12b345\", \"\\\\d+\")",
              "expect": "[12, 345]"
            },
            {
              "name": "words",
              "invoke": "findAll(\"a1b2\", \"[a-z]\")",
              "expect": "[a, b]"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `findAll(\"a12b345\", \"\\\\d+\")` 后，返回值/结果是什么？",
            "options": [
              "25",
              "周三",
              "[12, 345]"
            ],
            "answer": 2,
            "explanation": "参考答案：`findAll(\"a12b345\", \"\\\\d+\")` 的结果是 `[12, 345]`。",
            "badge": "「并发、IO 与拓展」寻宝人",
            "xp": 27,
            "boss": false
          }
        },
        {
          "id": "network-reading",
          "title": "拓展阅读：网络编程地图",
          "subtitle": "HTTP、Socket 与 HttpClient",
          "difficulty": 3,
          "minutes": 12,
          "normal": "网络编程让程序与远程服务器通信。Java 提供了 Socket（TCP 底层）、HttpURLConnection（传统 HTTP）和 HttpClient（Java 11+ 现代 HTTP）。\n一个 HTTP 请求包含方法（GET/POST）、URL、请求头、请求体；响应包含状态码、响应头和响应体。\nAndroid 中网络请求必须在后台线程执行，并且要在 Manifest 中声明 INTERNET 权限；明文 HTTP 还需要额外配置。\n真实项目通常使用 OkHttp、Retrofit 等库，并处理超时、重试、JSON 解析和错误码。",
          "plain": "网络编程就是让你的 App 去别人家敲门：说明你要什么（请求），等对方把东西递出来（响应）。\n敲门要等，不能在主线程傻站着，否则界面会卡死。",
          "task": "阅读本关，理解 HTTP 请求/响应、状态码、后台线程和 INTERNET 权限。完成后点击“我读完了”。",
          "example": "HttpClient client = HttpClient.newHttpClient();\nHttpRequest req = HttpRequest.newBuilder()\n        .uri(URI.create(\"https://example.com\"))\n        .GET().build();\nHttpResponse<String> res = client.send(req, BodyHandlers.ofString());\nSystem.out.println(res.statusCode());",
          "exampleOutput": "（示例代码，不在本运行时执行）",
          "starter": "",
          "solution": "",
          "mode": "output",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "HTTP 请求与响应",
            "HttpClient",
            "后台线程",
            "INTERNET 权限",
            "JSON"
          ],
          "hints": [
            "先分清请求和响应各包含什么。",
            "记住网络操作不能阻塞主线程。",
            "真实项目还需要处理异常、超时和 JSON。"
          ],
          "calls": [],
          "reading": true,
          "since": "Java 11+",
          "extension": {
            "title": "支线 · 状态码罗盘",
            "flavor": "网络港口的风向标坏了，船长只记得状态码。答对才能校准罗盘。",
            "prompt": "HTTP 状态码 200 通常表示什么？",
            "options": [
              "请求成功",
              "资源未找到",
              "服务器内部错误"
            ],
            "answer": 0,
            "explanation": "2xx 表示成功；200 是最常见的“请求成功，响应体里是内容”。",
            "badge": "「并发与 IO」港口领航员",
            "xp": 20,
            "boss": false
          }
        },
        {
          "id": "jdbc-reading",
          "title": "拓展阅读：JDBC 数据库地图",
          "subtitle": "用 Java 连接关系型数据库",
          "difficulty": 3,
          "minutes": 12,
          "normal": "JDBC 是 Java 访问关系型数据库的标准 API：加载驱动、建立 Connection、创建 PreparedStatement、执行 SQL、处理 ResultSet、关闭资源。\n始终使用 PreparedStatement 和 ? 占位符，不要把用户输入拼进 SQL，否则会有 SQL 注入风险。\nAndroid 本地数据通常使用 Room/SQLite；JDBC 更多用于服务端。真实项目会使用连接池和事务管理。",
          "plain": "JDBC 像给数据库打电话：先拨号（连接），再说要查什么（SQL），最后听结果（ResultSet）。\n千万别把用户输入直接拼进 SQL，那等于把家门钥匙交给陌生人。",
          "task": "阅读本关，理解 Connection、PreparedStatement、ResultSet 和 SQL 注入防护。完成后点击“我读完了”。",
          "example": "String sql = \"SELECT name FROM student WHERE id = ?\";\ntry (Connection c = DriverManager.getConnection(url);\n     PreparedStatement ps = c.prepareStatement(sql)) {\n    ps.setInt(1, 1);\n    ResultSet rs = ps.executeQuery();\n    while (rs.next()) System.out.println(rs.getString(\"name\"));\n}",
          "exampleOutput": "（示例代码，不在本运行时执行）",
          "starter": "",
          "solution": "",
          "mode": "output",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Connection",
            "PreparedStatement",
            "ResultSet",
            "SQL 注入",
            "事务"
          ],
          "hints": [
            "记住 JDBC 的五步流程。",
            "SQL 用 ? 占位，再用 setXxx 填值。",
            "资源要用 try-with-resources 关闭。"
          ],
          "calls": [],
          "reading": true,
          "extension": {
            "title": "支线 · 数据库门禁",
            "flavor": "数据库守卫拦住你：想进去，先证明你不会把用户输入直接拼进 SQL。",
            "prompt": "防止 SQL 注入，最推荐使用哪种方式？",
            "options": [
              "PreparedStatement + ? 占位符",
              "把用户输入直接拼进 SQL",
              "关闭数据库连接"
            ],
            "answer": 0,
            "explanation": "PreparedStatement 会把 SQL 结构和参数分开，避免输入被当成 SQL 语法。",
            "badge": "「并发与 IO」数据库守门人",
            "xp": 20,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch12",
      "title": "综合项目",
      "subtitle": "把学过的知识组装成真正能用的小程序",
      "color": "#FFCC80",
      "lessons": [
        {
          "id": "student-manager",
          "title": "项目：学生成绩管理",
          "subtitle": "数组、类、方法、统计",
          "difficulty": 5,
          "minutes": 25,
          "normal": "学生成绩管理需要先定义 Student 数据类，再实现统计逻辑：平均分、最高分学生、生成报告。\n把“数据”和“操作”分开，是面向对象设计的基本功。真实系统还会增加增删改查、排序和持久化。",
          "plain": "这个项目像班主任的记分册：每个学生一条记录，再算平均分、找第一名、写评语。\n先把学生做成类，再写统计方法，思路就清楚了。",
          "task": "实现 report(Student[] ss)：返回“平均:80.0 最高:小明”。测试学生：小明90、小红80、小刚70。",
          "example": "static String report(Student[] ss) {\n    int sum = 0;\n    Student top = ss[0];\n    for (Student s : ss) {\n        sum += s.score;\n        if (s.score > top.score) top = s;\n    }\n    return \"平均:\" + ((double) sum / ss.length) + \" 最高:\" + top.name;\n}",
          "exampleOutput": "平均:80.0 最高:小明",
          "starter": "public class Main {\n    static String report(Student[] ss) {\n        // TODO\n        return \"\";\n    }\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}",
          "solution": "public class Main {\n    static String report(Student[] ss) {\n        int sum = 0;\n        Student top = ss[0];\n        for (Student s : ss) {\n            sum += s.score;\n            if (s.score > top.score) top = s;\n        }\n        double avg = (double) sum / ss.length;\n        return \"平均:\" + avg + \" 最高:\" + top.name;\n    }\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "数据类",
            "对象数组",
            "求平均",
            "找最大值"
          ],
          "hints": [
            "遍历数组，累加 score。",
            "用 top 记录当前最高分学生。",
            "平均分要转成 double，否则会截断。"
          ],
          "calls": [
            {
              "name": "report",
              "invoke": "report(new Student[]{new Student(\"小明\",90),new Student(\"小红\",80),new Student(\"小刚\",70)})",
              "expect": "平均:80.0 最高:小明"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `report(new Student[]{new Student(\"小明\",90),new Student(\"小红\",80),new Student(\"小刚\",70)})` 后，返回值/结果是什么？",
            "options": [
              "平均:80.0 最高:小明",
              "小明 18",
              "2024-03-01"
            ],
            "answer": 0,
            "explanation": "参考答案：`report(new Student[]{new Student(\"小明\",90),new Student(\"小红\",80),new Student(\"小刚\",70)})` 的结果是 `平均:80.0 最高:小明`。",
            "badge": "「综合项目」寻宝人",
            "xp": 27,
            "boss": false
          }
        },
        {
          "id": "guess-number",
          "title": "项目：猜数字游戏",
          "subtitle": "循环 + 输入 + 条件判断",
          "difficulty": 4,
          "minutes": 20,
          "normal": "猜数字游戏先设定一个目标数，然后循环读取用户输入：太大提示“大了”，太小提示“小了”，相等则结束。\n循环 + Scanner + if-else 是控制台小游戏的经典组合。真实游戏还可以限制次数、记录用时。",
          "plain": "这个游戏像你心里想一个数，让朋友猜：每次只告诉他大了还是小了，直到猜中。\n程序用 while 一直问，直到输入等于答案。",
          "task": "目标数固定为 42，读取输入直到猜中；大于 42 输出“大了”，小于输出“小了”，等于输出“猜对了”。测试输入 50 30 42。",
          "example": "while (true) {\n    int g = sc.nextInt();\n    if (g > 42) System.out.println(\"大了\");\n    else if (g < 42) System.out.println(\"小了\");\n    else { System.out.println(\"猜对了\"); break; }\n}",
          "exampleOutput": "大了\n小了\n猜对了",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // TODO: 猜 42\n\n        sc.close();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (true) {\n            int g = sc.nextInt();\n            if (g > 42) {\n                System.out.println(\"大了\");\n            } else if (g < 42) {\n                System.out.println(\"小了\");\n            } else {\n                System.out.println(\"猜对了\");\n                break;\n            }\n        }\n        sc.close();\n    }\n}",
          "mode": "output",
          "stdin": "50 30 42",
          "expected": "大了\n小了\n猜对了",
          "className": "",
          "points": [
            "while 循环",
            "Scanner",
            "if-else",
            "提前结束"
          ],
          "hints": [
            "用 while (true) 不断读取。",
            "三个分支：大于、小于、等于。",
            "猜中后输出“猜对了”并 break。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "大了",
              "child",
              "1*1=1"
            ],
            "answer": 0,
            "explanation": "参考输出是 `大了\\n小了\\n猜对了`。",
            "badge": "「综合项目」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "word-frequency",
          "title": "项目：词频统计",
          "subtitle": "HashMap 的经典应用",
          "difficulty": 4,
          "minutes": 20,
          "normal": "词频统计遍历数组或文本，用 HashMap 记录每个单词出现的次数：getOrDefault(word, 0) + 1。\n统计完成后遍历 entrySet，找出出现次数最多的单词。真实场景还要处理大小写、标点和停用词。",
          "plain": "词频统计像数投票：每个词是一个候选人，出现一次就加一票，最后看谁票最多。\nHashMap 就是计票板，key 是词，value 是票数。",
          "task": "实现 topWord(String[] words)，返回出现次数最多的词，格式“词:次数”。测试 {\"a\",\"b\",\"a\"}。",
          "example": "Map<String,Integer> map = new HashMap<>();\nfor (String w : words) map.put(w, map.getOrDefault(w, 0) + 1);\nString best = \"\";\nint max = 0;\nfor (Map.Entry<String,Integer> e : map.entrySet()) {\n    if (e.getValue() > max) { max = e.getValue(); best = e.getKey(); }\n}\nreturn best + \":\" + max;",
          "exampleOutput": "a:2",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String topWord(String[] words) {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String topWord(String[] words) {\n        Map<String,Integer> map = new HashMap<>();\n        for (String w : words) {\n            map.put(w, map.getOrDefault(w, 0) + 1);\n        }\n        String best = \"\";\n        int max = 0;\n        for (Map.Entry<String,Integer> e : map.entrySet()) {\n            if (e.getValue() > max) {\n                max = e.getValue();\n                best = e.getKey();\n            }\n        }\n        return best + \":\" + max;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "HashMap 计数",
            "getOrDefault",
            "entrySet",
            "找最大值"
          ],
          "hints": [
            "先统计每个词的次数。",
            "再遍历 entrySet 找最大值。",
            "返回 best + \":\" + max。"
          ],
          "calls": [
            {
              "name": "top",
              "invoke": "topWord(new String[]{\"a\",\"b\",\"a\"})",
              "expect": "a:2"
            }
          ],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `topWord(new String[]{\"a\",\"b\",\"a\"})` 后，返回值/结果是什么？",
            "options": [
              "a:2",
              "a-b-c",
              "B"
            ],
            "answer": 0,
            "explanation": "参考答案：`topWord(new String[]{\"a\",\"b\",\"a\"})` 的结果是 `a:2`。",
            "badge": "「综合项目」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "bank-system",
          "title": "项目：银行账户系统",
          "subtitle": "封装、集合、转账",
          "difficulty": 5,
          "minutes": 25,
          "normal": "银行系统需要 Account 保存账户名和余额，Bank 用集合管理多个账户，并提供开户、存款、转账、查询余额。\n转账操作要先校验账户存在、金额合法、余额充足，再同时修改两个账户。真实系统还需要事务和并发控制。",
          "plain": "银行系统像一个小账房：每个账户一个账本，转账就是从一个账本扣钱、往另一个账本加钱。\n扣钱前必须确认余额够，不然后面就乱套了。",
          "task": "实现 Bank：open、deposit、transfer、balance。main 中 A 存 100、B 存 50、A 转 30 给 B，输出“70 80”。",
          "example": "Bank b = new Bank();\nb.open(\"A\", 100); b.open(\"B\", 50);\nb.transfer(\"A\", \"B\", 30);\nSystem.out.println(b.balance(\"A\") + \" \" + b.balance(\"B\"));",
          "exampleOutput": "70 80",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b = new Bank();\n        b.open(\"A\", 100);\n        b.open(\"B\", 50);\n        b.transfer(\"A\", \"B\", 30);\n        // TODO: 输出 A、B 余额\n\n    }\n}\n\nclass Account {\n    String name;\n    int balance;\n    Account(String name, int balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n}\n\nclass Bank {\n    List<Account> accounts = new ArrayList<>();\n    void open(String name, int money) {\n        // TODO\n    }\n    Account find(String name) {\n        // TODO\n        return null;\n    }\n    void deposit(String name, int money) {\n        // TODO\n    }\n    void transfer(String from, String to, int money) {\n        // TODO\n    }\n    int balance(String name) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b = new Bank();\n        b.open(\"A\", 100);\n        b.open(\"B\", 50);\n        b.transfer(\"A\", \"B\", 30);\n        System.out.println(b.balance(\"A\") + \" \" + b.balance(\"B\"));\n    }\n}\n\nclass Account {\n    String name;\n    int balance;\n    Account(String name, int balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n}\n\nclass Bank {\n    List<Account> accounts = new ArrayList<>();\n    void open(String name, int money) {\n        accounts.add(new Account(name, money));\n    }\n    Account find(String name) {\n        for (Account a : accounts) {\n            if (a.name.equals(name)) return a;\n        }\n        return null;\n    }\n    void deposit(String name, int money) {\n        Account a = find(name);\n        if (a != null && money > 0) a.balance += money;\n    }\n    void transfer(String from, String to, int money) {\n        Account a = find(from);\n        Account b = find(to);\n        if (a == null || b == null || money <= 0 || a.balance < money) return;\n        a.balance -= money;\n        b.balance += money;\n    }\n    int balance(String name) {\n        Account a = find(name);\n        return a == null ? 0 : a.balance;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "70 80",
          "className": "",
          "points": [
            "Account 封装",
            "ArrayList 管理",
            "转账校验",
            "按名称查找"
          ],
          "hints": [
            "open 创建 Account 并加入 accounts。",
            "find 按 name.equals 查找。",
            "transfer 先校验余额，再从 from 扣、给 to 加。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "70 80",
              "3.14 100",
              "7.0 3 65"
            ],
            "answer": 0,
            "explanation": "参考输出是 `70 80`。",
            "badge": "「综合项目」寻宝人",
            "xp": 27,
            "boss": false
          }
        },
        {
          "id": "todo-list",
          "title": "项目：待办清单",
          "subtitle": "集合、对象、状态管理",
          "difficulty": 4,
          "minutes": 20,
          "normal": "待办清单用 Task 表示一条任务（标题、是否完成），TodoList 负责添加、完成、渲染。\nrender 方法把集合转成多行字符串，这是“把数据变成展示”的常见做法。真实 App 还会加上持久化和筛选。",
          "plain": "待办清单像便利贴墙：每张便利贴是一个任务，做完就打勾。\nrender 就是把整面墙抄成一张清单给你看。",
          "task": "实现 TodoList：add、done、render；main 添加“学习Java”“写项目”，完成第一条，输出两行带 [x]/[ ] 的清单。",
          "example": "t.add(\"学习Java\"); t.add(\"写项目\"); t.done(0);\nSystem.out.println(t.render());",
          "exampleOutput": "[x] 学习Java\n[ ] 写项目",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        TodoList t = new TodoList();\n        t.add(\"学习Java\");\n        t.add(\"写项目\");\n        t.done(0);\n        // TODO: 输出 t.render()\n\n    }\n}\n\nclass Task {\n    String title;\n    boolean done;\n    Task(String title) {\n        this.title = title;\n    }\n}\n\nclass TodoList {\n    List<Task> tasks = new ArrayList<>();\n    void add(String title) {\n        // TODO\n    }\n    void done(int index) {\n        // TODO\n    }\n    String render() {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        TodoList t = new TodoList();\n        t.add(\"学习Java\");\n        t.add(\"写项目\");\n        t.done(0);\n        System.out.println(t.render());\n    }\n}\n\nclass Task {\n    String title;\n    boolean done;\n    Task(String title) {\n        this.title = title;\n    }\n}\n\nclass TodoList {\n    List<Task> tasks = new ArrayList<>();\n    void add(String title) {\n        tasks.add(new Task(title));\n    }\n    void done(int index) {\n        tasks.get(index).done = true;\n    }\n    String render() {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < tasks.size(); i++) {\n            if (i > 0) sb.append(\"\\n\");\n            Task t = tasks.get(i);\n            sb.append(t.done ? \"[x] \" : \"[ ] \").append(t.title);\n        }\n        return sb.toString();\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "[x] 学习Java\n[ ] 写项目",
          "className": "",
          "points": [
            "对象集合",
            "状态字段",
            "字符串拼接",
            "渲染"
          ],
          "hints": [
            "add 创建 Task 并加入 tasks。",
            "done 把对应下标的 task.done 设为 true。",
            "render 用 StringBuilder，前三元表达式选择 [x] 或 [ ]。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "[x] 学习Java",
              "5050",
              "1*1=1"
            ],
            "answer": 0,
            "explanation": "参考输出是 `[x] 学习Java\\n[ ] 写项目`。",
            "badge": "「综合项目」屠龙者",
            "xp": 42,
            "boss": true
          }
        },
        {
          "id": "mini-library",
          "title": "项目：迷你图书管理系统",
          "subtitle": "综合运用面向对象与集合",
          "difficulty": 5,
          "minutes": 30,
          "normal": "把之前的图书管理升级为借阅系统：Book 有标题、作者、是否借出；Library 负责添加、借书、还书、列出可借书籍。\n业务方法要维护对象状态，并返回清晰的字符串结果。实际系统还会加入用户、借阅记录、逾期罚款等。",
          "plain": "这个项目像学校图书馆：书有“在架/借出”两种状态，管理员负责借出和归还。\n每借出一本，就把状态改成借出；归还时再改回来。",
          "task": "实现 Library 的 add、borrow、giveBack、availableCount；main 输出借书结果和可借数量。",
          "example": "Library lib = new Library();\nlib.add(new Book(\"Java\", \"A\"));\nlib.add(new Book(\"Python\", \"B\"));\nSystem.out.println(lib.borrow(\"Java\"));\nSystem.out.println(lib.availableCount());",
          "exampleOutput": "借出:Java\n1",
          "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", \"A\"));\n        lib.add(new Book(\"Python\", \"B\"));\n        // TODO: 借 Java，输出结果和可借数量\n\n    }\n}\n\nclass Book {\n    String title;\n    String author;\n    boolean borrowed;\n    Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n}\n\nclass Library {\n    List<Book> books = new ArrayList<>();\n    void add(Book b) {\n        // TODO\n    }\n    Book find(String title) {\n        // TODO\n        return null;\n    }\n    String borrow(String title) {\n        // TODO\n        return \"\";\n    }\n    void giveBack(String title) {\n        // TODO\n    }\n    int availableCount() {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", \"A\"));\n        lib.add(new Book(\"Python\", \"B\"));\n        System.out.println(lib.borrow(\"Java\"));\n        System.out.println(lib.availableCount());\n    }\n}\n\nclass Book {\n    String title;\n    String author;\n    boolean borrowed;\n    Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n}\n\nclass Library {\n    List<Book> books = new ArrayList<>();\n    void add(Book b) {\n        books.add(b);\n    }\n    Book find(String title) {\n        for (Book b : books) {\n            if (b.title.equals(title)) return b;\n        }\n        return null;\n    }\n    String borrow(String title) {\n        Book b = find(title);\n        if (b == null) return \"没有:\" + title;\n        if (b.borrowed) return \"已借出:\" + title;\n        b.borrowed = true;\n        return \"借出:\" + title;\n    }\n    void giveBack(String title) {\n        Book b = find(title);\n        if (b != null) b.borrowed = false;\n    }\n    int availableCount() {\n        int n = 0;\n        for (Book b : books) if (!b.borrowed) n++;\n        return n;\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "借出:Java\n1",
          "className": "",
          "points": [
            "状态管理",
            "集合遍历",
            "业务方法",
            "字符串结果"
          ],
          "hints": [
            "add 把书加入 books。",
            "borrow 先 find，再判断是否已借出。",
            "availableCount 统计 borrowed 为 false 的书。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "355 88",
              "借出:Java",
              "child"
            ],
            "answer": 1,
            "explanation": "参考输出是 `借出:Java\\n1`。",
            "badge": "「综合项目」水晶收集者",
            "xp": 27,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch13",
      "title": "现代 Java 语法",
      "subtitle": "文本块、switch 表达式、multi-catch、sealed 与模式匹配",
      "color": "#B39DDB",
      "lessons": [
        {
          "id": "text-block",
          "title": "文本块 text block",
          "subtitle": "写多行字符串不再堆 \\n",
          "difficulty": 3,
          "minutes": 12,
          "normal": "文本块用三个双引号开始和结束，可以直接写多行文本，适合 SQL、JSON、HTML 和长段提示语。\nJava 会去掉每行共同的缩进，并忽略开头换行和结尾的收尾换行；常见转义（\\n、\\t、\\\"）仍然有效。\n文本块仍然是 String，只是书写方式更自然。",
          "plain": "以前写多行文字要不断写 \\n，像用胶带把纸条一段段粘起来。\n文本块就是一张真正的多行纸：开头三个引号，写完再三个引号，中间怎么换行就怎么保留。",
          "task": "用文本块输出两行文字：第一行 Hello，第二行 World。",
          "example": "String text = \"\"\"\n        Hello\n        World\n        \"\"\";\nSystem.out.print(text);",
          "exampleOutput": "Hello\nWorld",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用文本块生成两行文字\n        String text = \"\";\n        System.out.print(text);\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String text = \"\"\"\n                Hello\n                World\n                \"\"\";\n        System.out.print(text);\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "Hello\nWorld",
          "className": "",
          "points": [
            "三引号文本块",
            "保留换行",
            "去掉公共缩进",
            "仍是 String"
          ],
          "hints": [
            "文本块以三个双引号开始，也以三个双引号结束。",
            "中间直接写 Hello 换行 World，不需要写 \\n。",
            "结尾的三个引号最好单独一行，前面的缩进会被自动去掉。"
          ],
          "calls": [],
          "reading": false,
          "since": "Java 15+",
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "本关参考代码运行后，控制台输出的第一行是什么？",
            "options": [
              "不能除以0",
              "Hello",
              "7.0 3 65"
            ],
            "answer": 1,
            "explanation": "参考输出是 `Hello\\nWorld`。",
            "badge": "「现代 Java 语法」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "switch-expression",
          "title": "switch 表达式",
          "subtitle": "用箭头和 yield 直接产出值",
          "difficulty": 4,
          "minutes": 18,
          "normal": "switch 表达式把整个 switch 当作一个值：return switch (n) { ... };。\n箭头分支 case 0 -> \"zero\"; 不会穿透；如果分支需要多行，用大括号包起来，并用 yield 交回结果。\nswitch 表达式通常要求覆盖所有可能值（或提供 default），否则编译器会报错。",
          "plain": "传统 switch 像一条走廊，不写 break 会一直走到下一间房；switch 表达式像自动售货机：\n你选一个编号，它直接掉出一件商品。多行分支就用 yield 把商品递出来。",
          "task": "实现 kind(int n)：0 返回 zero，1 或 2 返回 small，其他返回 big。必须使用 switch 表达式。",
          "example": "static String kind(int n) {\n    return switch (n) {\n        case 0 -> \"zero\";\n        case 1, 2 -> \"small\";\n        default -> { yield \"big\"; }\n    };\n}",
          "exampleOutput": "kind(2) → small",
          "starter": "public class Main {\n    static String kind(int n) {\n        // TODO: 用 switch 表达式\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String kind(int n) {\n        return switch (n) {\n            case 0 -> \"zero\";\n            case 1, 2 -> \"small\";\n            default -> { yield \"big\"; }\n        };\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "switch 表达式",
            "箭头 case",
            "yield",
            "多标签 case 1,2",
            "不会穿透"
          ],
          "hints": [
            "整体写成 return switch (n) { ... };。",
            "case 1, 2 -> 可以一次匹配两个值。",
            "多行分支用 { yield ...; } 把结果交出来。"
          ],
          "calls": [
            {
              "name": "zero",
              "invoke": "kind(0)",
              "expect": "zero"
            },
            {
              "name": "small1",
              "invoke": "kind(1)",
              "expect": "small"
            },
            {
              "name": "small2",
              "invoke": "kind(2)",
              "expect": "small"
            },
            {
              "name": "big",
              "invoke": "kind(9)",
              "expect": "big"
            }
          ],
          "reading": false,
          "since": "Java 14+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `kind(0)` 后，返回值/结果是什么？",
            "options": [
              "9",
              "zero",
              "Java8:6"
            ],
            "answer": 1,
            "explanation": "参考答案：`kind(0)` 的结果是 `zero`。",
            "badge": "「现代 Java 语法」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "multi-catch",
          "title": "multi-catch 多异常捕获",
          "subtitle": "一个 catch 处理多种异常",
          "difficulty": 4,
          "minutes": 15,
          "normal": "当一个 catch 块要处理多种异常时，可以用竖线把异常类型连起来：catch (ArithmeticException | ArrayIndexOutOfBoundsException e)。\nmulti-catch 的异常变量隐含 final，不能在 catch 块里重新赋值。捕获列表中的类型不能有继承关系，否则编译器会认为重复。\n它适合处理方式相同的多种异常，处理方式不同时应分开写 catch。",
          "plain": "multi-catch 像一张“这些情况都走同一个窗口”的告示：算错、越界，都来这个窗口处理。\n如果两种问题需要不同办法，就别硬塞进同一个窗口。",
          "task": "用 multi-catch 同时捕获 ArithmeticException 和 ArrayIndexOutOfBoundsException，触发除零并输出“算错了”。",
          "example": "try {\n    int x = 10 / 0;\n} catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {\n    System.out.print(\"算错了\");\n}",
          "exampleOutput": "算错了",
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 multi-catch 捕获两种异常\n\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 10 / 0;\n        } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {\n            System.out.print(\"算错了\");\n        }\n    }\n}",
          "mode": "output",
          "stdin": "",
          "expected": "算错了",
          "className": "",
          "points": [
            "catch (A | B e)",
            "异常变量隐式 final",
            "类型不能有继承关系",
            "统一处理"
          ],
          "hints": [
            "try 里写 int x = 10 / 0; 触发算术异常。",
            "catch 的括号里用 | 连接两个异常类型。",
            "两种异常共用一个变量 e，catch 块输出 算错了。"
          ],
          "calls": [],
          "reading": false,
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "本关参考代码运行后，控制台应该输出什么？",
            "options": [
              "child",
              "注释不会运行",
              "算错了"
            ],
            "answer": 2,
            "explanation": "参考输出是 `算错了`。",
            "badge": "「现代 Java 语法」水晶收集者",
            "xp": 24,
            "boss": false
          }
        },
        {
          "id": "sealed",
          "title": "sealed 密封类型",
          "subtitle": "限定谁能继承我",
          "difficulty": 5,
          "minutes": 20,
          "normal": "sealed 类型用 permits 明确列出允许继承/实现的子类型，其他类不能随意扩展。\n子类型必须是 final、sealed 或 non-sealed 之一。sealed 让继承关系可控，配合 switch 模式匹配更容易做穷尽检查。\n本学习运行时接受 sealed/permits 语法并执行多态，但不会在运行时额外检查非法继承。",
          "plain": "sealed 像一份“只允许这几个人进群”的名单：名单外的人不能继承或实现。\n这样你就知道所有可能的子类型，写分支时不容易漏掉情况。",
          "task": "定义 sealed interface Shape permits Circle, Square，两个 final 实现类；实现 area(Shape s) 并测试圆和正方形。",
          "example": "sealed interface Shape permits Circle, Square { double area(); }\nfinal class Circle implements Shape { ... }\nfinal class Square implements Shape { ... }",
          "exampleOutput": "area(new Circle(2)) → 12.56",
          "starter": "public class Main {\n    static double area(Shape s) {\n        // TODO: 调用 area()\n        return 0;\n    }\n}\n\nsealed interface Shape permits Circle, Square {\n    double area();\n}\n\nfinal class Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    // TODO: 实现 area\n}\n\nfinal class Square implements Shape {\n    double side;\n    Square(double side) { this.side = side; }\n    // TODO: 实现 area\n}",
          "solution": "public class Main {\n    static double area(Shape s) {\n        return s.area();\n    }\n}\n\nsealed interface Shape permits Circle, Square {\n    double area();\n}\n\nfinal class Circle implements Shape {\n    double r;\n    Circle(double r) { this.r = r; }\n    public double area() { return 3.14 * r * r; }\n}\n\nfinal class Square implements Shape {\n    double side;\n    Square(double side) { this.side = side; }\n    public double area() { return side * side; }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "sealed",
            "permits",
            "final / non-sealed",
            "可控继承",
            "多态"
          ],
          "hints": [
            "sealed interface 后面用 permits 列出 Circle 和 Square。",
            "两个实现类都必须是 final（或 sealed / non-sealed）。",
            "area(Shape s) 里直接 return s.area(); 利用多态。"
          ],
          "calls": [
            {
              "name": "circle",
              "invoke": "area(new Circle(2))",
              "expect": "12.56"
            },
            {
              "name": "square",
              "invoke": "area(new Square(2))",
              "expect": "4.0"
            }
          ],
          "reading": false,
          "since": "Java 17+",
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `area(new Circle(2))` 后，返回值/结果是什么？",
            "options": [
              "最高:90 最低:60 平均:75.0",
              "12.56",
              "4.0"
            ],
            "answer": 1,
            "explanation": "参考答案：`area(new Circle(2))` 的结果是 `12.56`。",
            "badge": "「现代 Java 语法」屠龙者",
            "xp": 45,
            "boss": true
          }
        },
        {
          "id": "pattern",
          "title": "instanceof 模式匹配",
          "subtitle": "判断类型的同时拿到变量",
          "difficulty": 3,
          "minutes": 15,
          "normal": "Java 16+ 支持 instanceof 模式匹配：if (o instanceof String s) { ... }。\n如果判断为 true，变量 s 会自动完成类型转换并进入作用域，不需要再写 (String) o。\n它常与 sealed 类型、switch 模式匹配一起使用，让类型分支更简洁。",
          "plain": "以前的写法像“先验明身份，再单独发一张通行证”；模式匹配是“验明身份的同时把通行证塞到你手里”。\n只有判断成功，变量才存在，所以不会拿到错误的类型。",
          "task": "实现 describe(Object o)：String 返回“字符串:长度”，Integer 返回“整数:值+1”，其他返回“其他”。",
          "example": "static String describe(Object o) {\n    if (o instanceof String s) return \"字符串:\" + s.length();\n    if (o instanceof Integer n) return \"整数:\" + (n + 1);\n    return \"其他\";\n}",
          "exampleOutput": "describe(\"java\") → 字符串:4",
          "starter": "public class Main {\n    static String describe(Object o) {\n        // TODO: 用 instanceof 模式匹配\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String describe(Object o) {\n        if (o instanceof String s) return \"字符串:\" + s.length();\n        if (o instanceof Integer n) return \"整数:\" + (n + 1);\n        return \"其他\";\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "instanceof 类型 变量",
            "自动强转",
            "模式变量作用域",
            "类型分支"
          ],
          "hints": [
            "写法是 o instanceof String s，s 是模式变量。",
            "判断成功后可以直接用 s.length()，不用强转。",
            "Integer 分支用 n + 1，其他情况返回 其他。"
          ],
          "calls": [
            {
              "name": "string",
              "invoke": "describe(\"java\")",
              "expect": "字符串:4"
            },
            {
              "name": "int",
              "invoke": "describe(41)",
              "expect": "整数:42"
            },
            {
              "name": "other",
              "invoke": "describe(3.14)",
              "expect": "其他"
            }
          ],
          "reading": false,
          "since": "Java 16+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `describe(\"java\")` 后，返回值/结果是什么？",
            "options": [
              "8",
              "字符串:4",
              "0,0"
            ],
            "answer": 1,
            "explanation": "参考答案：`describe(\"java\")` 的结果是 `字符串:4`。",
            "badge": "「现代 Java 语法」水晶收集者",
            "xp": 21,
            "boss": false
          }
        }
      ]
    },
    {
      "id": "ch14",
      "title": "Java 9–17 演进补遗",
      "subtitle": "以 Java 8 为基线，逐项标注后来加入的语法与 API",
      "color": "#80CBC4",
      "lessons": [
        {
          "id": "var-inference",
          "title": "var 局部类型推断",
          "subtitle": "让编译器帮你写类型",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 10 引入 var，用于局部变量：编译器根据右边的初始值推断类型，例如 var n = 10; 推断为 int。\nvar 只能用于有初始值的局部变量、for 循环变量和 for-each 变量，不能用于字段、方法参数或返回值。\nvar 仍然是强类型：一旦推断出来，类型就固定了，不是 JavaScript 那种动态类型。",
          "plain": "var 像让编译器帮你填快递单：你写了收件人（初始值），它自动补上“物品类型”。\n只是省了打字，箱子该是什么类型还是什么类型，不能乱塞。",
          "task": "用 var 声明姓名、版本号和数字列表，遍历求和，返回“Java8:6”。",
          "example": "var name = \"Java\";\nvar version = 8;\nvar nums = List.of(1, 2, 3);\nint sum = 0;\nfor (var n : nums) sum += n;",
          "exampleOutput": "Java8:6",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        // TODO: 用 var 声明 name、version、nums，并遍历求和\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        var name = \"Java\";\n        var version = 8;\n        var nums = List.of(1, 2, 3);\n        int sum = 0;\n        for (var n : nums) sum += n;\n        return name + version + \":\" + sum;\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "var 局部变量",
            "必须有初始值",
            "编译期类型固定",
            "不能用于字段/参数"
          ],
          "hints": [
            "var name = \"Java\"; 会推断为 String。",
            "var nums = List.of(1,2,3); 会推断为 List<Integer>。",
            "for (var n : nums) 可以遍历，最后拼接 name + version + \":\" + sum。"
          ],
          "calls": [
            {
              "name": "var",
              "invoke": "f()",
              "expect": "Java8:6"
            }
          ],
          "reading": false,
          "since": "Java 10+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "Java8:6",
              "小明 18",
              "x"
            ],
            "answer": 0,
            "explanation": "参考答案：`f()` 的结果是 `Java8:6`。",
            "badge": "「Java 9–17 演进补遗」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "collection-factory",
          "title": "集合工厂方法",
          "subtitle": "List.of / Set.of / Map.of",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 9 为集合接口增加了静态工厂方法：List.of、Set.of、Map.of、Map.ofEntries、Map.entry。\n它们可以一行创建小型集合，返回的集合不可修改（add/remove 会抛 UnsupportedOperationException）。\nSet.of 和 Map.of 不允许重复键；需要重复元素时仍应使用 ArrayList/HashSet 等实现。",
          "plain": "以前创建几个元素要 new 集合、再 add 好几次；现在是“套餐”：List.of(\"a\",\"b\") 一行搞定。\n套餐是密封的，不能往里加菜，只能读。",
          "task": "用 List.of、Set.of、Map.of、Map.entry 创建集合，返回“2 2 2 9”。",
          "example": "List<String> l = List.of(\"a\", \"b\");\nMap<String,Integer> m = Map.of(\"x\", 1, \"y\", 2);\nSystem.out.println(m.get(\"y\"));",
          "exampleOutput": "2",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        // TODO: 创建 l、s、m，并返回统计结果\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        List<String> l = List.of(\"a\", \"b\");\n        Set<Integer> s = Set.of(1, 2);\n        Map<String,Integer> m = Map.of(\"x\", 1, \"y\", 2);\n        return l.size() + \" \" + s.size() + \" \" + m.get(\"y\") + \" \" + Map.entry(\"k\", 9).getValue();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "List.of",
            "Set.of",
            "Map.of",
            "Map.entry",
            "不可变集合"
          ],
          "hints": [
            "List.of(\"a\",\"b\")、Set.of(1,2)、Map.of(\"x\",1,\"y\",2)。",
            "Map.of 的键和值必须成对出现。",
            "Map.entry(\"k\",9) 创建一个键值对，再调用 getValue()。"
          ],
          "calls": [
            {
              "name": "factory",
              "invoke": "f()",
              "expect": "2 2 2 9"
            }
          ],
          "reading": false,
          "since": "Java 9+",
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "面积:4.0",
              "2 2 2 9",
              "a"
            ],
            "answer": 1,
            "explanation": "参考答案：`f()` 的结果是 `2 2 2 9`。",
            "badge": "「Java 9–17 演进补遗」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "private-interface",
          "title": "接口私有方法",
          "subtitle": "default 方法之间复用代码",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 9 允许接口定义 private 方法。private 方法只能被接口内部的 default/static 方法调用，不能被实现类调用。\n它适合把多个 default 方法共用的逻辑抽出来，避免在接口里重复代码。\nJava 8 的接口只能有 public 抽象方法、default 方法和 static 方法；private 接口方法是 Java 9 新增的。",
          "plain": "接口的 default 方法像公开的快捷操作；如果两个快捷操作都要用同一段内部小工具，就把小工具设为 private。\n外面的人看不见，也不能直接调用，只能在接口内部用。",
          "task": "实现 Greeter 接口：default hello() 调用 private prefix()，返回“Hi Java”。",
          "example": "interface Greeter {\n    default String hello() { return prefix() + \"Java\"; }\n    private String prefix() { return \"Hi \"; }\n}",
          "exampleOutput": "Hi Java",
          "starter": "public class Main {\n    static String f() {\n        return new G().hello();\n    }\n}\n\ninterface Greeter {\n    default String hello() {\n        // TODO: 调用 prefix()\n        return \"\";\n    }\n    // TODO: 添加 private String prefix()\n}\n\nclass G implements Greeter {\n}",
          "solution": "public class Main {\n    static String f() {\n        return new G().hello();\n    }\n}\n\ninterface Greeter {\n    default String hello() {\n        return prefix() + \"Java\";\n    }\n    private String prefix() {\n        return \"Hi \";\n    }\n}\n\nclass G implements Greeter {\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "private 接口方法",
            "default 方法",
            "接口内部复用",
            "Java 8 与 Java 9 的差异"
          ],
          "hints": [
            "在接口里写 private String prefix() { return \"Hi \"; }。",
            "default hello() 里调用 prefix()。",
            "G 不需要实现 prefix，它只使用接口的 default 方法。"
          ],
          "calls": [
            {
              "name": "private-interface",
              "invoke": "f()",
              "expect": "Hi Java"
            }
          ],
          "reading": false,
          "since": "Java 9+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "a-b-c",
              "Hi Java",
              "Java8:6"
            ],
            "answer": 1,
            "explanation": "参考答案：`f()` 的结果是 `Hi Java`。",
            "badge": "「Java 9–17 演进补遗」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "diamond-anon",
          "title": "匿名类钻石语法",
          "subtitle": "new Comparator<>() { ... }",
          "difficulty": 4,
          "minutes": 15,
          "normal": "Java 9 允许在匿名类中使用钻石语法：new Comparator<>() { ... }，编译器会根据目标类型推断泛型参数。\nJava 8 中匿名类必须显式写 new Comparator<String>()，不能在匿名类构造时使用 <>。\n这个特性减少了泛型匿名类的样板代码，但可读性优先，复杂场景仍建议单独定义类。",
          "plain": "钻石语法 <> 以前只能用在普通对象上，匿名类必须把类型写全。\nJava 9 之后，匿名类也能说“你看着推断吧”，少写一截。",
          "task": "用 new Comparator<>() 匿名类按字符串自然顺序排序，返回 [a, b]。",
          "example": "Comparator<String> c = new Comparator<>() {\n    public int compare(String a, String b) { return a.compareTo(b); }\n};",
          "exampleOutput": "[a, b]",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        List<String> l = new ArrayList<>();\n        l.add(\"b\");\n        l.add(\"a\");\n        // TODO: 用 new Comparator<>() 匿名类排序\n        return l.toString();\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        List<String> l = new ArrayList<>();\n        l.add(\"b\");\n        l.add(\"a\");\n        Comparator<String> c = new Comparator<>() {\n            public int compare(String a, String b) {\n                return a.compareTo(b);\n            }\n        };\n        Collections.sort(l, c);\n        return l.toString();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "匿名内部类",
            "钻石 <>",
            "Comparator",
            "Java 8 差异"
          ],
          "hints": [
            "匿名类写法：new Comparator<>() { public int compare(...) { ... } };",
            "compare 返回 a.compareTo(b) 表示升序。",
            "用 Collections.sort(l, c) 排序，再返回 l.toString()。"
          ],
          "calls": [
            {
              "name": "diamond",
              "invoke": "f()",
              "expect": "[a, b]"
            }
          ],
          "reading": false,
          "since": "Java 9+",
          "extension": {
            "title": "Boss · 知识巨龙",
            "flavor": "知识巨龙盘踞在下一关的传送门前。它不考背诵，只让你预测运行结果。答对才能通过。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "D",
              "[]",
              "[a, b]"
            ],
            "answer": 2,
            "explanation": "参考答案：`f()` 的结果是 `[a, b]`。",
            "badge": "「Java 9–17 演进补遗」屠龙者",
            "xp": 42,
            "boss": true
          }
        },
        {
          "id": "try-resource-var",
          "title": "try 复用已有资源",
          "subtitle": "Java 9 的 try-with-resources 简化",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 9 允许在 try-with-resources 中直接写一个已有的、事实上的 final 变量：try (sc) { ... }。\n不需要再写 Scanner sc2 = sc;。资源离开 try 时仍会自动 close。\nJava 8 中 try 的括号里必须声明新变量，例如 try (Scanner sc = ...)。",
          "plain": "以前 try 的小括号里必须“现场买一个新资源”；Java 9 允许把你已经买好的资源直接递进去。\n用完还是自动关门，不用手动 close。",
          "task": "先创建 Scanner sc，再用 try (sc) 读取 42，返回字符串 42。",
          "example": "Scanner sc = new Scanner(\"42\");\ntry (sc) {\n    return String.valueOf(sc.nextInt());\n}",
          "exampleOutput": "42",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        Scanner sc = new Scanner(\"42\");\n        // TODO: 用 try (sc) 读取并返回\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String f() {\n        Scanner sc = new Scanner(\"42\");\n        try (sc) {\n            return String.valueOf(sc.nextInt());\n        }\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "try-with-resources",
            "复用已有变量",
            "自动 close",
            "Java 8 差异"
          ],
          "hints": [
            "try 的括号里直接写 sc，不需要再声明类型。",
            "try 块里 return String.valueOf(sc.nextInt());。",
            "离开 try 时会自动调用 sc.close()。"
          ],
          "calls": [
            {
              "name": "reuse",
              "invoke": "f()",
              "expect": "42"
            }
          ],
          "reading": false,
          "since": "Java 9+",
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "4",
              "42",
              "4.0"
            ],
            "answer": 1,
            "explanation": "参考答案：`f()` 的结果是 `42`。",
            "badge": "「Java 9–17 演进补遗」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "string-11",
          "title": "Java 11 String 新方法",
          "subtitle": "strip、repeat、isBlank",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 11 为 String 增加了 strip、stripLeading、stripTrailing、isBlank、repeat、lines 等方法。\nstrip 比 trim 更完整地处理 Unicode 空白；isBlank 判断字符串是否只含空白；repeat 重复字符串。\nJava 8 中没有这些方法，需要自己写循环或正则。",
          "plain": "以前去掉首尾空格用 trim，空白判断要自己写；Java 11 直接给你 strip、isBlank、repeat 三个新工具。\n像给字符串配了一套新的清洁工具。",
          "task": "用 strip、repeat、isBlank，返回“Java JavaJava true”。",
          "example": "String s = \"  Java  \";\nSystem.out.println(s.strip());\nSystem.out.println(\" \".isBlank());",
          "exampleOutput": "Java\ntrue",
          "starter": "public class Main {\n    static String f() {\n        String s = \"  Java  \";\n        // TODO: 使用 strip、repeat、isBlank\n        return \"\";\n    }\n}",
          "solution": "public class Main {\n    static String f() {\n        String s = \"  Java  \";\n        return s.strip() + \" \" + s.strip().repeat(2) + \" \" + \" \".isBlank();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "strip",
            "repeat",
            "isBlank",
            "Java 8 差异"
          ],
          "hints": [
            "s.strip() 去掉首尾空白，得到 Java。",
            "s.strip().repeat(2) 得到 JavaJava。",
            "\" \".isBlank() 返回 true。"
          ],
          "calls": [
            {
              "name": "string11",
              "invoke": "f()",
              "expect": "Java JavaJava true"
            }
          ],
          "reading": false,
          "since": "Java 11+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "2,3",
              "zero",
              "Java JavaJava true"
            ],
            "answer": 2,
            "explanation": "参考答案：`f()` 的结果是 `Java JavaJava true`。",
            "badge": "「Java 9–17 演进补遗」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "optional-11",
          "title": "Java 11 Optional 新方法",
          "subtitle": "isEmpty 与更简洁的判断",
          "difficulty": 3,
          "minutes": 10,
          "normal": "Java 11 为 Optional 增加了 isEmpty()，它是 isPresent() 的反义，读起来更自然。\nOptional 本身是 Java 8 引入的；isEmpty 以及后续版本的一些便捷方法才是 Java 11+。\n判断空值时优先用 isEmpty()，不要再写 !isPresent() 绕一圈。",
          "plain": "以前判断 Optional 为空要写“不是有值”，现在直接问“是不是空的”。\n少一个感叹号，少一点绕脑。",
          "task": "实现 f(Optional<String> o)：为空返回 empty，否则返回内部值。",
          "example": "static String f(Optional<String> o) {\n    return o.isEmpty() ? \"empty\" : o.get();\n}",
          "exampleOutput": "empty",
          "starter": "import java.util.*;\n\npublic class Main {\n    static String f(Optional<String> o) {\n        // TODO: 用 isEmpty 判断\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\n\npublic class Main {\n    static String f(Optional<String> o) {\n        return o.isEmpty() ? \"empty\" : o.get();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Optional.isEmpty",
            "Optional 是 Java 8",
            "isEmpty 是 Java 11",
            "空值处理"
          ],
          "hints": [
            "o.isEmpty() 在有值时返回 false。",
            "三元表达式：o.isEmpty() ? \"empty\" : o.get()。",
            "测试会传 Optional.of(\"x\") 和 Optional.empty()。"
          ],
          "calls": [
            {
              "name": "present",
              "invoke": "f(Optional.of(\"x\"))",
              "expect": "x"
            },
            {
              "name": "empty",
              "invoke": "f(Optional.empty())",
              "expect": "empty"
            }
          ],
          "reading": false,
          "since": "Java 11+",
          "extension": {
            "title": "支线 · 记忆水晶",
            "flavor": "一只语法史莱姆蹦到路上，吞掉了你的记忆水晶。它让你先预测运行结果，才肯归还。",
            "prompt": "调用 `f(Optional.of(\"x\"))` 后，返回值/结果是什么？",
            "options": [
              "10.0",
              "Hi Java",
              "x"
            ],
            "answer": 2,
            "explanation": "参考答案：`f(Optional.of(\"x\"))` 的结果是 `x`。",
            "badge": "「Java 9–17 演进补遗」水晶收集者",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "stream-tolist",
          "title": "Stream.toList",
          "subtitle": "Java 16 的收集捷径",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 16 为 Stream 增加了 toList()，可以直接把流收集成不可变 List，省去 collect(Collectors.toList())。\n它返回的列表不可修改；需要可变列表时仍应使用 collect(Collectors.toList()) 或 new ArrayList<>(...)。\n这是 Stream API 的便捷补充，不是新的流处理模型。",
          "plain": "以前流水线末端要写 collect(Collectors.toList())，像绕一圈去装箱；Java 16 直接有 toList() 这个出口。\n出口出来的箱子是封好的，不能再往里塞东西。",
          "task": "用 Stream.of、filter、toList，保留长度为 1 的字符串，返回 [a, c]。",
          "example": "Stream.of(\"a\", \"bb\", \"c\").filter(s -> s.length() == 1).toList()",
          "exampleOutput": "[a, c]",
          "starter": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<String> f() {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<String> f() {\n        return Stream.of(\"a\", \"bb\", \"c\")\n                .filter(s -> s.length() == 1)\n                .toList();\n    }\n}",
          "mode": "calls",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "Stream.toList",
            "filter",
            "不可变列表",
            "Java 8 的 collect 写法"
          ],
          "hints": [
            "入口：Stream.of(\"a\", \"bb\", \"c\")。",
            "过滤：filter(s -> s.length() == 1)。",
            "出口：toList()，不要再写 collect(Collectors.toList())。"
          ],
          "calls": [
            {
              "name": "toList",
              "invoke": "f()",
              "expect": "[a, c]"
            }
          ],
          "reading": false,
          "since": "Java 16+",
          "extension": {
            "title": "支线 · 代码宝箱",
            "flavor": "路边出现一个上锁的宝箱，锁孔上显示着一段程序的结果。答对才能开箱。",
            "prompt": "调用 `f()` 后，返回值/结果是什么？",
            "options": [
              "[a, c]",
              "9",
              "4"
            ],
            "answer": 0,
            "explanation": "参考答案：`f()` 的结果是 `[a, c]`。",
            "badge": "「Java 9–17 演进补遗」寻宝人",
            "xp": 21,
            "boss": false
          }
        },
        {
          "id": "module-reading",
          "title": "拓展阅读：模块系统",
          "subtitle": "module-info.java 与 Java 9",
          "difficulty": 3,
          "minutes": 12,
          "normal": "Java 9 引入模块系统（JPMS），用 module-info.java 描述一个模块的名称、依赖和对外暴露的包。\n关键字包括 module、requires、exports、opens、uses、provides。模块化有助于强封装和减少 classpath 冲突。\n普通业务代码和教学项目很少直接写 module-info；Android 项目通常也不使用 JPMS，但阅读大型 Java 项目时可能遇到。",
          "plain": "模块系统像给项目划楼层：这一层需要哪几层、哪些房间对外开门，都写在 module-info 里。\n好处是边界清楚，坏处是配置更复杂，小项目通常用不上。",
          "task": "阅读本关，理解 module、requires、exports 的作用。完成后点击“我读完了”。",
          "example": "module com.example.app {\n    requires java.base;\n    exports com.example.app.api;\n}",
          "exampleOutput": "（模块声明示例，不在本运行时执行）",
          "starter": "",
          "solution": "",
          "mode": "output",
          "stdin": "",
          "expected": "",
          "className": "",
          "points": [
            "module-info.java",
            "requires",
            "exports",
            "opens",
            "Java 9+"
          ],
          "hints": [
            "module 声明模块名。",
            "requires 声明依赖的其他模块。",
            "exports 决定哪些包对外可见。"
          ],
          "calls": [],
          "reading": true,
          "since": "Java 9+",
          "extension": {
            "title": "支线 · 模块城门",
            "flavor": "模块城的城门上写着一条 exports 指令，守门人要你说出它放行的是谁。",
            "prompt": "module-info.java 里 `exports com.foo;` 的作用是？",
            "options": [
              "把 com.foo 包暴露给其他模块",
              "声明依赖 java.base",
              "指定程序主类"
            ],
            "answer": 0,
            "explanation": "exports 控制哪些包对外可见；requires 才是声明依赖。",
            "badge": "「版本演进」模块守门人",
            "xp": 20,
            "boss": false
          }
        }
      ]
    }
  ]
}
,"stories":{
  "stories": [
    {
      "id": "star-port",
      "title": "星港的第一行代码",
      "subtitle": "帮失忆机器人说出第一句话",
      "difficulty": 1,
      "intro": "你在一座废弃星港醒来，身边只有一台叫 Byte 的机器人。它的喇叭坏了，只能用屏幕显示一行字。",
      "color": "#58C4A0",
      "companion": "Byte",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "星港的第一行代码",
          "text": "你在一座废弃星港醒来，身边只有一台叫 Byte 的机器人。它的喇叭坏了，只能用屏幕显示一行字。\n\nByte 指着控制台：它想说 STAR，但输出模块只接受 Java 程序。远处传来守卫的脚步声。\n\n你隐约注意到：控制台背面有一块松动的维护面板。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "留下来修好它",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "趁守卫没来先离开",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "你在一座废弃星港醒来，身边只有一台叫 Byte 的机器人。它的喇叭坏了，只能用屏幕显示一行字。",
              "portrait": "narrator"
            },
            {
              "speaker": "Byte",
              "text": "先别碰机关。星港的灰尘刚落下来，说明有人比我们更早到。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "那就得比他们更快。你盯住门口，我来读这段代码。",
              "portrait": "hero"
            },
            {
              "speaker": "Byte",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "Byte 指着控制台：它想说 STAR，但输出模块只接受 Java 程序。远处传来守卫的脚步声。\n\n你隐约注意到：控制台背面有一块松动的维护面板。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "修复输出模块",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让控制台输出一行：STAR。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"STAR\");\n    }\n}",
          "mode": "output",
          "expected": "STAR",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "秒针还在走。星港恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "秒针还在走。星港恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "Byte",
              "text": "我们做到了。星港安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "控制台背面有一块松动的维护面板",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "速度判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 60
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "minRemaining": 60
              },
              "next": "good"
            },
            {
              "label": "按时完成，但剩余<60秒",
              "when": {
                "outcome": "success"
              },
              "next": "late"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "速度判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥2次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 2
              },
              "next": "exhausted"
            },
            {
              "label": "超时",
              "when": {
                "outcome": "timeout"
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "速度判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 尝试≥1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            }
          ],
          "defaultNext": "tactical"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "准时完成",
          "text": "你在时间还很充裕时完成，星港的机关稳稳停下。",
          "outcome": "good"
        },
        {
          "id": "late",
          "type": "ending",
          "title": "最后一秒",
          "text": "你在最后几秒才通过，星港擦着边缘得救，但留下了裂缝。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你试了太多次，倒计时还是归零。星港陷入混乱。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "倒计时归零",
          "text": "时间到，星港被黑暗吞没。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "战术撤退",
          "text": "你在尝试过后主动撤退，保住了性命，也记住了失败的路径。",
          "outcome": "neutral"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有运行代码就放弃了。星港没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 星港的地下航线",
          "text": "你掀开维护面板，发现一条通往旧星图的地下航线。Byte 的记忆也在这里恢复。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。星港的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "potion-sum",
      "title": "药水配方的加法",
      "subtitle": "把 12 滴月光和 30 滴晨露倒进坩埚",
      "difficulty": 1,
      "intro": "你是见习药剂师，师父留下的配方只剩最后一步：计算两种材料的总量。",
      "color": "#58C4A0",
      "companion": "小灯",
      "companion2": "霜尾",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "药水配方的加法",
          "text": "你是见习药剂师，师父留下的配方只剩最后一步：计算两种材料的总量。\n\n坩埚里已经有 12 滴月光，还需要 30 滴晨露。总量必须精确显示在锅沿上。\n\n你隐约注意到：坩埚底部刻着一行很小的配方编号。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "按配方加入并计算",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先相信那个陌生人，和他一起进去",
              "next": "code1",
              "setFlag": "trust"
            },
            {
              "text": "凭感觉随便倒一点",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "你是见习药剂师，师父留下的配方只剩最后一步：计算两种材料的总量。",
              "portrait": "narrator"
            },
            {
              "speaker": "小灯",
              "text": "你听见了吗？药房里面有第二种呼吸声，不是你的，也不是我的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我听见了。所以更要进去，趁它还没醒。",
              "portrait": "hero"
            },
            {
              "speaker": "霜尾",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "小灯",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "坩埚里已经有 12 滴月光，还需要 30 滴晨露。总量必须精确显示在锅沿上。\n\n你隐约注意到：坩埚底部刻着一行很小的配方编号。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "精确配药",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "输出 12 + 30 的结果：42。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(12 + 30);\n    }\n}",
          "mode": "output",
          "expected": "42",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，药房暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，药房暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "小灯",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "霜尾",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，药房深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "让洞穴回声输出 ECHO。",
          "time": 120,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"ECHO\");\n    }\n}",
          "mode": "output",
          "expected": "ECHO",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "同伴在门口等你。药房暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "同伴在门口等你。药房暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "小灯",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "霜尾",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "相信同伴，把后背交给对方",
              "next": "successCheck",
              "setFlag": "trust"
            },
            {
              "text": "坩埚底部刻着一行很小的配方编号",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "信任判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 信任同伴",
              "when": {
                "outcome": "success",
                "flags": [
                  "trust"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有信任",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "betrayal"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "信任判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 信任同伴",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "trust"
                ]
              },
              "next": "rescued"
            },
            {
              "label": "超时 + 没有信任",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "abandoned"
            }
          ],
          "defaultNext": "abandoned"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "信任判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 信任同伴",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "trust"
                ]
              },
              "next": "carried"
            },
            {
              "label": "放弃 + 没有信任",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "alone"
            }
          ],
          "defaultNext": "alone"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "并肩完成",
          "text": "同伴接住了你漏掉的那一步，药房在你们的配合下恢复。",
          "outcome": "good"
        },
        {
          "id": "betrayal",
          "type": "ending",
          "title": "背后的刀",
          "text": "你完成了任务，但同伴在你转身时关上了门。你被留在药房。",
          "outcome": "bad"
        },
        {
          "id": "rescued",
          "type": "ending",
          "title": "被拉回的一秒",
          "text": "超时前，同伴把你从机关里拽了出来。药房没有得救，但你活了下来。",
          "outcome": "neutral"
        },
        {
          "id": "abandoned",
          "type": "ending",
          "title": "无人回应",
          "text": "你超时了，向同伴呼救，但身后没有声音。药房把你吞没。",
          "outcome": "bad"
        },
        {
          "id": "carried",
          "type": "ending",
          "title": "被背着离开",
          "text": "你主动放弃，同伴把你背出了药房。任务失败，但信任还在。",
          "outcome": "neutral"
        },
        {
          "id": "alone",
          "type": "ending",
          "title": "独自退场",
          "text": "你放弃了，同伴也转身离开。药房只剩下你一个人的脚印。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 药师的秘密配方",
          "text": "你顺着编号找到夹层，里面是师父藏起来的完整配方。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。药房的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "lighthouse",
      "title": "灯塔守夜人",
      "subtitle": "在天亮前重新点亮 LIGHT 信号",
      "difficulty": 1,
      "intro": "海雾吞没了港口，灯塔的灯语模块只剩一个空程序。守夜人把最后一把钥匙交给你。",
      "color": "#58C4A0",
      "companion": "阿雾",
      "companion2": "铁砧",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "灯塔守夜人",
          "text": "海雾吞没了港口，灯塔的灯语模块只剩一个空程序。守夜人把最后一把钥匙交给你。\n\n塔顶的控制台需要输出 LIGHT，船只才能看见信号。雾里已经传来汽笛声。\n\n你隐约注意到：灯塔的旧航海日志里夹着一张频率表。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "留下点亮灯塔",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先检查值钱的东西，能拿的都拿上",
              "next": "code1",
              "setFlag": "greed"
            },
            {
              "text": "躲进塔下的酒馆",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "海雾吞没了港口，灯塔的灯语模块只剩一个空程序。守夜人把最后一把钥匙交给你。",
              "portrait": "narrator"
            },
            {
              "speaker": "阿雾",
              "text": "这次别又把机关弄炸。我只有一只备用的手，炸坏了就真没有了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我不会炸。至少这次不会。",
              "portrait": "hero"
            },
            {
              "speaker": "铁砧",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "阿雾",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "塔顶的控制台需要输出 LIGHT，船只才能看见信号。雾里已经传来汽笛声。\n\n你隐约注意到：灯塔的旧航海日志里夹着一张频率表。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "重写灯语",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让灯塔输出 LIGHT。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"LIGHT\");\n    }\n}",
          "mode": "output",
          "expected": "LIGHT",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，港口暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，港口暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "阿雾",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "铁砧",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，港口深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "输出 1 到 5 的总和：15。",
          "time": 120,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) sum += i;\n        System.out.println(sum);\n    }\n}",
          "mode": "output",
          "expected": "15",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "宝箱还开着。港口恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝箱还开着。港口恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "阿雾",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "铁砧",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "把额外的宝藏也拿走",
              "next": "successCheck",
              "setFlag": "greed"
            },
            {
              "text": "灯塔的旧航海日志里夹着一张频率表",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "贪婪判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 没有拿额外宝藏 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "notFlags": [
                  "greed"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 没有拿额外宝藏",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 拿了额外宝藏",
              "when": {
                "outcome": "success",
                "flags": [
                  "greed"
                ]
              },
              "next": "cursed"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "贪婪判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 拿了额外宝藏",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "greed"
                ]
              },
              "next": "lost"
            },
            {
              "label": "超时 + 没有贪心",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "escape"
            }
          ],
          "defaultNext": "escape"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "贪婪判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 拿了额外宝藏",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "greed"
                ]
              },
              "next": "empty"
            },
            {
              "label": "放弃 + 没有贪心",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "wise"
            }
          ],
          "defaultNext": "wise"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "只取所需",
          "text": "你只拿走属于自己的那一份，港口的诅咒没有找上你。",
          "outcome": "good"
        },
        {
          "id": "cursed",
          "type": "ending",
          "title": "被诅咒的宝藏",
          "text": "额外的宝藏在你怀里变成黑色，你被永远留在港口。",
          "outcome": "bad"
        },
        {
          "id": "lost",
          "type": "ending",
          "title": "被宝藏拖住",
          "text": "你舍不得额外宝藏，超时后被港口吞了进去。",
          "outcome": "bad"
        },
        {
          "id": "escape",
          "type": "ending",
          "title": "空手逃生",
          "text": "你没有贪心，超时后及时逃出，港口的宝藏留在了原地。",
          "outcome": "neutral"
        },
        {
          "id": "empty",
          "type": "ending",
          "title": "两手空空",
          "text": "你放弃时还抱着宝藏，结果两样都没带走。",
          "outcome": "bad"
        },
        {
          "id": "wise",
          "type": "ending",
          "title": "及时收手",
          "text": "你主动放弃，也放下了不属于自己的东西。港口放你离开。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 雾中的第二座灯塔",
          "text": "你按频率表发出信号，雾里竟回应了另一座早已废弃的灯塔。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。港口的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "ticket",
      "title": "车票找零",
      "subtitle": "把 5 枚铜币和 7 枚银币算成 12 枚",
      "difficulty": 1,
      "intro": "夜间车站的售票机坏了，你身上只剩 5 枚铜币和 7 枚银币，窗口要求一次性投入 12 枚。",
      "color": "#58C4A0",
      "companion": "铜扣",
      "companion2": "纸鹤",
      "companion3": "纸灯",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "车票找零",
          "text": "夜间车站的售票机坏了，你身上只剩 5 枚铜币和 7 枚银币，窗口要求一次性投入 12 枚。\n\n售票机只认总数。把 5 + 7 算出来，列车才会放行。\n\n你隐约注意到：售票机侧面贴着一张褪色的站台地图。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "帮售票员修好计算",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先观察四周的痕迹，再决定怎么走",
              "next": "code1",
              "setFlag": "clue"
            },
            {
              "text": "翻过闸机逃票",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "夜间车站的售票机坏了，你身上只剩 5 枚铜币和 7 枚银币，窗口要求一次性投入 12 枚。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜扣",
              "text": "我可以替你拖十秒。十秒之后，不管你写没写完，我都会把你拽出来。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "十秒够了。你数到十，我们就走。",
              "portrait": "hero"
            },
            {
              "speaker": "纸鹤",
              "text": "如果出不来，我会把这段故事带出去。",
              "portrait": "companion2"
            },
            {
              "speaker": "纸灯",
              "text": "外面还有我。门关上之前，我会想办法。",
              "portrait": "companion3"
            },
            {
              "speaker": "铜扣",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "售票机只认总数。把 5 + 7 算出来，列车才会放行。\n\n你隐约注意到：售票机侧面贴着一张褪色的站台地图。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "修好计数器",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "输出 5 + 7 的结果：12。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(5 + 7);\n    }\n}",
          "mode": "output",
          "expected": "12",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，车站暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，车站暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜扣",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            },
            {
              "speaker": "纸鹤",
              "text": "我不想记录一个失败结局。",
              "portrait": "companion2"
            },
            {
              "speaker": "纸灯",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，车站深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "让控制台输出一行：STAR。",
          "time": 120,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"STAR\");\n    }\n}",
          "mode": "output",
          "expected": "STAR",
          "stdin": "",
          "calls": [],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，车站暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，车站暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜扣",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            },
            {
              "speaker": "纸鹤",
              "text": "我不想记录一个失败结局。",
              "portrait": "companion2"
            },
            {
              "speaker": "纸灯",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "让灯塔输出 LIGHT。",
          "time": 105,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"LIGHT\");\n    }\n}",
          "mode": "output",
          "expected": "LIGHT",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "线索只拼上了一半。车站暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "线索只拼上了一半。车站暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜扣",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            },
            {
              "speaker": "纸鹤",
              "text": "这次，让故事有一个不一样的结尾吧。",
              "portrait": "companion2"
            },
            {
              "speaker": "纸灯",
              "text": "如果那点光是真的，就带它出来。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "再检查一遍线索",
              "next": "successCheck",
              "setFlag": "clue"
            },
            {
              "text": "售票机侧面贴着一张褪色的站台地图",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "线索判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 尝试≤2次 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30,
                "maxAttempts": 2
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 找到线索",
              "when": {
                "outcome": "success",
                "flags": [
                  "clue"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有找到线索",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "blind"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "线索判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 找到线索",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "clue"
                ]
              },
              "next": "deeper"
            },
            {
              "label": "超时 + 没有找到线索",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "wander"
            }
          ],
          "defaultNext": "wander"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "线索判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 找到线索",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "clue"
                ]
              },
              "next": "retreat"
            },
            {
              "label": "放弃 + 没有找到线索",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "nothing"
            }
          ],
          "defaultNext": "nothing"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "看清全貌",
          "text": "你找到了关键线索，车站的机关被真正解开。",
          "outcome": "good"
        },
        {
          "id": "blind",
          "type": "ending",
          "title": "摸黑完成",
          "text": "你完成了任务，却没看懂车站真正的秘密。",
          "outcome": "neutral"
        },
        {
          "id": "deeper",
          "type": "ending",
          "title": "更深的线索",
          "text": "超时后，你顺着线索掉进车站更深的一层。",
          "outcome": "bad"
        },
        {
          "id": "wander",
          "type": "ending",
          "title": "迷失",
          "text": "你没有线索，超时后在车站里彻底迷路。",
          "outcome": "bad"
        },
        {
          "id": "retreat",
          "type": "ending",
          "title": "带着线索撤退",
          "text": "你主动放弃，但把线索带了出来。故事没有结束，只是暂停。",
          "outcome": "neutral"
        },
        {
          "id": "nothing",
          "type": "ending",
          "title": "无功而返",
          "text": "你放弃了，也没有找到任何线索。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 午夜专列",
          "text": "你按地图找到隐藏站台，那里停着一列只在午夜出现的专列。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。车站的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "echo",
      "title": "回声洞穴",
      "subtitle": "让洞穴回声输出 ECHO",
      "difficulty": 1,
      "intro": "回声洞穴只在收到 ECHO 时打开深处的水晶门。你带着一只会复读的机械蝙蝠。",
      "color": "#58C4A0",
      "companion": "纸鸢",
      "companion2": "青苔",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "回声洞穴",
          "text": "回声洞穴只在收到 ECHO 时打开深处的水晶门。你带着一只会复读的机械蝙蝠。\n\n蝙蝠只会复读程序输出。让它说出 ECHO，水晶门才会回应。\n\n你隐约注意到：洞壁上有一些不像自然形成的刻痕。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "教蝙蝠说出 ECHO",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "原路返回",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "回声洞穴只在收到 ECHO 时打开深处的水晶门。你带着一只会复读的机械蝙蝠。",
              "portrait": "narrator"
            },
            {
              "speaker": "纸鸢",
              "text": "如果门后真有东西，你负责代码，我负责别让它咬到你。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "行。你挡一下，我写完就带你出去。",
              "portrait": "hero"
            },
            {
              "speaker": "青苔",
              "text": "我也在。别把我当成背景。",
              "portrait": "companion2"
            },
            {
              "speaker": "纸鸢",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "蝙蝠只会复读程序输出。让它说出 ECHO，水晶门才会回应。\n\n你隐约注意到：洞壁上有一些不像自然形成的刻痕。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "训练回声",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让洞穴回声输出 ECHO。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"ECHO\");\n    }\n}",
          "mode": "output",
          "expected": "ECHO",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，洞穴暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，洞穴暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "纸鸢",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            },
            {
              "speaker": "青苔",
              "text": "我在后面。你们决定，我执行。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，洞穴深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "输出 12 + 30 的结果：42。",
          "time": 120,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(12 + 30);\n    }\n}",
          "mode": "output",
          "expected": "42",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "你的手还在抖。洞穴恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "你的手还在抖。洞穴恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "纸鸢",
              "text": "我们做到了。洞穴安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            },
            {
              "speaker": "青苔",
              "text": "不管你选什么，我都会把这段写进记录。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "洞壁上有一些不像自然形成的刻痕",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "坚持判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜一次通过 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45,
                "maxAttempts": 1
              },
              "next": "hidden"
            },
            {
              "label": "一次通过",
              "when": {
                "outcome": "success",
                "maxAttempts": 1
              },
              "next": "firstTry"
            },
            {
              "label": "多次尝试后通过",
              "when": {
                "outcome": "success",
                "minAttempts": 2
              },
              "next": "scarred"
            }
          ],
          "defaultNext": "firstTry"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "坚持判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥3次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 3
              },
              "next": "exhausted"
            },
            {
              "label": "超时 + 尝试<3次",
              "when": {
                "outcome": "timeout",
                "maxAttempts": 2
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "坚持判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            },
            {
              "label": "放弃 + 尝试≥2次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 2
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 只尝试过1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1,
                "maxAttempts": 1
              },
              "next": "almost"
            }
          ],
          "defaultNext": "almost"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "firstTry",
          "type": "ending",
          "title": "一次通过",
          "text": "你第一次运行就通过了，洞穴的守卫都愣了一下。",
          "outcome": "good"
        },
        {
          "id": "scarred",
          "type": "ending",
          "title": "带着伤通过",
          "text": "你试了很多次，终于通过，但洞穴留下了无法修复的裂痕。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你反复尝试，倒计时归零。洞穴在你眼前关闭。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "时间耗尽",
          "text": "你还没来得及找到答案，时间就结束了。",
          "outcome": "bad"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有尝试就放弃了。洞穴没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "及时止损",
          "text": "你尝试过，也判断出了自己过不去。你带着经验撤退。",
          "outcome": "neutral"
        },
        {
          "id": "almost",
          "type": "ending",
          "title": "只差一步",
          "text": "你只试了一次就放弃，后来才知道那一步已经接近答案。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 回声地图",
          "text": "你发现刻痕是一张地图，标着洞穴更深处的回声泉。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。洞穴的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "sunrise",
      "title": "日出计数",
      "subtitle": "数清 1 到 5 道晨光，唤出日出",
      "difficulty": 1,
      "intro": "山顶的日晷被云封住，你需要数清 1 到 5 道晨光的总和，才能拨动晷针。",
      "color": "#58C4A0",
      "companion": "拾光",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "日出计数",
          "text": "山顶的日晷被云封住，你需要数清 1 到 5 道晨光的总和，才能拨动晷针。\n\n日晷只接受 1 + 2 + 3 + 4 + 5 的结果。云层正在变厚。\n\n你隐约注意到：日晷底座刻着一圈反向的刻度。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "留下数晨光",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先听对方把话说完，也许它不想伤人",
              "next": "code1",
              "setFlag": "mercy"
            },
            {
              "text": "下山等明天",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "山顶的日晷被云封住，你需要数清 1 到 5 道晨光的总和，才能拨动晷针。",
              "portrait": "narrator"
            },
            {
              "speaker": "拾光",
              "text": "你走前面，我断后。别回头，回头会浪费时间。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "不回头。你跟上。",
              "portrait": "hero"
            },
            {
              "speaker": "拾光",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "日晷只接受 1 + 2 + 3 + 4 + 5 的结果。云层正在变厚。\n\n你隐约注意到：日晷底座刻着一圈反向的刻度。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "拨动日晷",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "输出 1 到 5 的总和：15。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) sum += i;\n        System.out.println(sum);\n    }\n}",
          "mode": "output",
          "expected": "15",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "对方没有离开。山顶暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "对方没有离开。山顶暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "拾光",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "放过对方，留它一命",
              "next": "successCheck",
              "setFlag": "mercy"
            },
            {
              "text": "日晷底座刻着一圈反向的刻度",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "慈悲判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 放过对方",
              "when": {
                "outcome": "success",
                "flags": [
                  "mercy"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有放过对方",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "ruthless"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "慈悲判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 放过对方",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "mercy"
                ]
              },
              "next": "forgiven"
            },
            {
              "label": "超时 + 没有放过对方",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "doomed"
            }
          ],
          "defaultNext": "doomed"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "慈悲判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 放过对方",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "mercy"
                ]
              },
              "next": "spared"
            },
            {
              "label": "放弃 + 没有放过对方",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "fled"
            }
          ],
          "defaultNext": "fled"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "留一条生路",
          "text": "你放过了对方，山顶也在最后一刻放过了你。",
          "outcome": "good"
        },
        {
          "id": "ruthless",
          "type": "ending",
          "title": "赢家",
          "text": "你完成了任务，也清除了所有阻碍，但山顶变得异常安静。",
          "outcome": "neutral"
        },
        {
          "id": "forgiven",
          "type": "ending",
          "title": "被原谅",
          "text": "你超时了，但对方记得你的仁慈，把你送出了山顶。",
          "outcome": "neutral"
        },
        {
          "id": "doomed",
          "type": "ending",
          "title": "没有回头路",
          "text": "你超时了，也没有留下任何余地。山顶关上了所有出口。",
          "outcome": "bad"
        },
        {
          "id": "spared",
          "type": "ending",
          "title": "被放过",
          "text": "你主动放弃，对方也没有追上来。山顶放你一条生路。",
          "outcome": "neutral"
        },
        {
          "id": "fled",
          "type": "ending",
          "title": "仓皇逃离",
          "text": "你放弃了，对方却没有放过你。你狼狈地逃出山顶。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 逆流的日出",
          "text": "你把晷针逆拨，云层后退，看到了本该在昨天出现的日出。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。山顶的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "loop-forest",
      "title": "循环森林的守门人",
      "subtitle": "用循环把 1 到 10 的符文加起来",
      "difficulty": 2,
      "intro": "循环森林的大门由十块符文石锁住，每块石头上刻着 1 到 10 的数字。",
      "color": "#6FB8FF",
      "companion": "苔苔",
      "companion2": "弯月",
      "companion3": "星尘",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "循环森林的守门人",
          "text": "循环森林的大门由十块符文石锁住，每块石头上刻着 1 到 10 的数字。\n\n守门人说：把 1 到 10 全部加起来，得到总和，门才会打开。\n\n你隐约注意到：最老的那棵树树干上刻着“十之后还有零”。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用循环计算总和",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "绕路穿过森林",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "循环森林的大门由十块符文石锁住，每块石头上刻着 1 到 10 的数字。",
              "portrait": "narrator"
            },
            {
              "speaker": "苔苔",
              "text": "先别碰机关。森林的灰尘刚落下来，说明有人比我们更早到。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "那就得比他们更快。你盯住门口，我来读这段代码。",
              "portrait": "hero"
            },
            {
              "speaker": "弯月",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "星尘",
              "text": "外面还有我。门关上之前，我会想办法。",
              "portrait": "companion3"
            },
            {
              "speaker": "苔苔",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "守门人说：把 1 到 10 全部加起来，得到总和，门才会打开。\n\n你隐约注意到：最老的那棵树树干上刻着“十之后还有零”。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "符文累加",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "输出 1 到 10 的总和：55。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) sum += i;\n        System.out.println(sum);\n    }\n}",
          "mode": "output",
          "expected": "55",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，森林暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，森林暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "苔苔",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "弯月",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "星尘",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，森林深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "统计字符串 story 里的元音数量并输出：1。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String s = \"story\";\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"story\";\n        int n = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (\"aeiou\".indexOf(s.charAt(i)) >= 0) n++;\n        }\n        System.out.println(n);\n    }\n}",
          "mode": "output",
          "expected": "1",
          "stdin": "",
          "calls": [],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，森林暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，森林暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "苔苔",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "弯月",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "星尘",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "把 0 摄氏度转换成华氏度并输出：32。",
          "time": 135,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        System.out.println(c * 9 / 5 + 32);\n    }\n}",
          "mode": "output",
          "expected": "32",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "秒针还在走。森林恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "秒针还在走。森林恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "苔苔",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "弯月",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            },
            {
              "speaker": "星尘",
              "text": "我在外面等你们。别让我等太久。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "最老的那棵树树干上刻着“十之后还有零”",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "速度判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 60
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "minRemaining": 60
              },
              "next": "good"
            },
            {
              "label": "按时完成，但剩余<60秒",
              "when": {
                "outcome": "success"
              },
              "next": "late"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "速度判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥2次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 2
              },
              "next": "exhausted"
            },
            {
              "label": "超时",
              "when": {
                "outcome": "timeout"
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "速度判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 尝试≥1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            }
          ],
          "defaultNext": "tactical"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "准时完成",
          "text": "你在时间还很充裕时完成，森林的机关稳稳停下。",
          "outcome": "good"
        },
        {
          "id": "late",
          "type": "ending",
          "title": "最后一秒",
          "text": "你在最后几秒才通过，森林擦着边缘得救，但留下了裂缝。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你试了太多次，倒计时还是归零。森林陷入混乱。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "倒计时归零",
          "text": "时间到，森林被黑暗吞没。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "战术撤退",
          "text": "你在尝试过后主动撤退，保住了性命，也记住了失败的路径。",
          "outcome": "neutral"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有运行代码就放弃了。森林没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 森林的隐藏年轮",
          "text": "你数清年轮，发现森林其实有第十一块符文，通往被遗忘的林心。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。森林的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "array-chest",
      "title": "数组宝库的最大值",
      "subtitle": "从三个宝箱里找出最重的那一个",
      "difficulty": 2,
      "intro": "宝库里有三个箱子，重量分别是 3、9、2。只有最重的箱子装着通行证。",
      "color": "#6FB8FF",
      "companion": "黑羽",
      "companion2": "铜铃",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "数组宝库的最大值",
          "text": "宝库里有三个箱子，重量分别是 3、9、2。只有最重的箱子装着通行证。\n\n管理员把三个数字刻在墙上：3、9、2。找出最大值，才能打开正确的箱子。\n\n你隐约注意到：最轻的箱子底部有一道暗格。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "遍历数组找最大",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先相信那个陌生人，和他一起进去",
              "next": "code1",
              "setFlag": "trust"
            },
            {
              "text": "随便选一个箱子",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝库里有三个箱子，重量分别是 3、9、2。只有最重的箱子装着通行证。",
              "portrait": "narrator"
            },
            {
              "speaker": "黑羽",
              "text": "你听见了吗？宝库里面有第二种呼吸声，不是你的，也不是我的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我听见了。所以更要进去，趁它还没醒。",
              "portrait": "hero"
            },
            {
              "speaker": "铜铃",
              "text": "如果出不来，我会把这段故事带出去。",
              "portrait": "companion2"
            },
            {
              "speaker": "黑羽",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "管理员把三个数字刻在墙上：3、9、2。找出最大值，才能打开正确的箱子。\n\n你隐约注意到：最轻的箱子底部有一道暗格。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "最重的箱子",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "创建数组 {3, 9, 2}，输出最大值 9。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 9, 2};\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 9, 2};\n        int max = a[0];\n        for (int x : a) if (x > max) max = x;\n        System.out.println(max);\n    }\n}",
          "mode": "output",
          "expected": "9",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，宝库暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，宝库暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "黑羽",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            },
            {
              "speaker": "铜铃",
              "text": "我不想记录一个失败结局。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，宝库深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "分数 75 大于等于 60 时输出 PASS，否则输出 FAIL。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        if (score >= 60) System.out.println(\"PASS\");\n        else System.out.println(\"FAIL\");\n    }\n}",
          "mode": "output",
          "expected": "PASS",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "同伴在门口等你。宝库暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "同伴在门口等你。宝库暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "黑羽",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            },
            {
              "speaker": "铜铃",
              "text": "这次，让故事有一个不一样的结尾吧。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "相信同伴，把后背交给对方",
              "next": "successCheck",
              "setFlag": "trust"
            },
            {
              "text": "最轻的箱子底部有一道暗格",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "信任判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 信任同伴",
              "when": {
                "outcome": "success",
                "flags": [
                  "trust"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有信任",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "betrayal"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "信任判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 信任同伴",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "trust"
                ]
              },
              "next": "rescued"
            },
            {
              "label": "超时 + 没有信任",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "abandoned"
            }
          ],
          "defaultNext": "abandoned"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "信任判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 信任同伴",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "trust"
                ]
              },
              "next": "carried"
            },
            {
              "label": "放弃 + 没有信任",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "alone"
            }
          ],
          "defaultNext": "alone"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "并肩完成",
          "text": "同伴接住了你漏掉的那一步，宝库在你们的配合下恢复。",
          "outcome": "good"
        },
        {
          "id": "betrayal",
          "type": "ending",
          "title": "背后的刀",
          "text": "你完成了任务，但同伴在你转身时关上了门。你被留在宝库。",
          "outcome": "bad"
        },
        {
          "id": "rescued",
          "type": "ending",
          "title": "被拉回的一秒",
          "text": "超时前，同伴把你从机关里拽了出来。宝库没有得救，但你活了下来。",
          "outcome": "neutral"
        },
        {
          "id": "abandoned",
          "type": "ending",
          "title": "无人回应",
          "text": "你超时了，向同伴呼救，但身后没有声音。宝库把你吞没。",
          "outcome": "bad"
        },
        {
          "id": "carried",
          "type": "ending",
          "title": "被背着离开",
          "text": "你主动放弃，同伴把你背出了宝库。任务失败，但信任还在。",
          "outcome": "neutral"
        },
        {
          "id": "alone",
          "type": "ending",
          "title": "独自退场",
          "text": "你放弃了，同伴也转身离开。宝库只剩下你一个人的脚印。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 宝库的第二层",
          "text": "你打开暗格，找到一把通往宝库第二层的钥匙。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。宝库的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "reverse",
      "title": "逆序咒语",
      "subtitle": "把 java 倒过来念成 avaj",
      "difficulty": 2,
      "intro": "咒语学院的门锁会把词语倒过来校验。你必须把 java 变成 avaj，门才会打开。",
      "color": "#6FB8FF",
      "companion": "火种",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "逆序咒语",
          "text": "咒语学院的门锁会把词语倒过来校验。你必须把 java 变成 avaj，门才会打开。\n\n门锁只接受逆序结果。念错一个字母，门就会重新计时。\n\n你隐约注意到：门锁的铭文从右往左读还有一句话。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "按顺序倒念咒语",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先检查值钱的东西，能拿的都拿上",
              "next": "code1",
              "setFlag": "greed"
            },
            {
              "text": "从侧门溜进去",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "咒语学院的门锁会把词语倒过来校验。你必须把 java 变成 avaj，门才会打开。",
              "portrait": "narrator"
            },
            {
              "speaker": "火种",
              "text": "这次别又把机关弄炸。我只有一只备用的手，炸坏了就真没有了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我不会炸。至少这次不会。",
              "portrait": "hero"
            },
            {
              "speaker": "火种",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "门锁只接受逆序结果。念错一个字母，门就会重新计时。\n\n你隐约注意到：门锁的铭文从右往左读还有一句话。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "逆序咒语",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "把字符串 java 反转后输出：avaj。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        StringBuilder sb = new StringBuilder();\n        for (int i = s.length() - 1; i >= 0; i--) sb.append(s.charAt(i));\n        System.out.println(sb);\n    }\n}",
          "mode": "output",
          "expected": "avaj",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，学院暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，学院暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "火种",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，学院深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "把 0 摄氏度转换成华氏度并输出：32。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        System.out.println(c * 9 / 5 + 32);\n    }\n}",
          "mode": "output",
          "expected": "32",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "宝箱还开着。学院恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝箱还开着。学院恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "火种",
              "text": "我们做到了。学院安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "把额外的宝藏也拿走",
              "next": "successCheck",
              "setFlag": "greed"
            },
            {
              "text": "门锁的铭文从右往左读还有一句话",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "贪婪判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 没有拿额外宝藏 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "notFlags": [
                  "greed"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 没有拿额外宝藏",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 拿了额外宝藏",
              "when": {
                "outcome": "success",
                "flags": [
                  "greed"
                ]
              },
              "next": "cursed"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "贪婪判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 拿了额外宝藏",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "greed"
                ]
              },
              "next": "lost"
            },
            {
              "label": "超时 + 没有贪心",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "escape"
            }
          ],
          "defaultNext": "escape"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "贪婪判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 拿了额外宝藏",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "greed"
                ]
              },
              "next": "empty"
            },
            {
              "label": "放弃 + 没有贪心",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "wise"
            }
          ],
          "defaultNext": "wise"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "只取所需",
          "text": "你只拿走属于自己的那一份，学院的诅咒没有找上你。",
          "outcome": "good"
        },
        {
          "id": "cursed",
          "type": "ending",
          "title": "被诅咒的宝藏",
          "text": "额外的宝藏在你怀里变成黑色，你被永远留在学院。",
          "outcome": "bad"
        },
        {
          "id": "lost",
          "type": "ending",
          "title": "被宝藏拖住",
          "text": "你舍不得额外宝藏，超时后被学院吞了进去。",
          "outcome": "bad"
        },
        {
          "id": "escape",
          "type": "ending",
          "title": "空手逃生",
          "text": "你没有贪心，超时后及时逃出，学院的宝藏留在了原地。",
          "outcome": "neutral"
        },
        {
          "id": "empty",
          "type": "ending",
          "title": "两手空空",
          "text": "你放弃时还抱着宝藏，结果两样都没带走。",
          "outcome": "bad"
        },
        {
          "id": "wise",
          "type": "ending",
          "title": "及时收手",
          "text": "你主动放弃，也放下了不属于自己的东西。学院放你离开。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 镜像教室",
          "text": "你从右往左读出铭文，进入一间所有文字都镜像排列的隐藏教室。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。学院的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "vowels",
      "title": "元音花园",
      "subtitle": "数清 story 里有多少个元音",
      "difficulty": 2,
      "intro": "元音花园的喷泉只会在元音数量正确时喷水。花匠给了你一个单词：story。",
      "color": "#6FB8FF",
      "companion": "墨点",
      "companion2": "白露",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "元音花园",
          "text": "元音花园的喷泉只会在元音数量正确时喷水。花匠给了你一个单词：story。\n\n数出 story 里的 a、e、i、o、u，喷泉才会启动。\n\n你隐约注意到：喷泉底部刻着一个被划掉的单词。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "数元音",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先观察四周的痕迹，再决定怎么走",
              "next": "code1",
              "setFlag": "clue"
            },
            {
              "text": "摘一朵花就走",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "元音花园的喷泉只会在元音数量正确时喷水。花匠给了你一个单词：story。",
              "portrait": "narrator"
            },
            {
              "speaker": "墨点",
              "text": "我可以替你拖十秒。十秒之后，不管你写没写完，我都会把你拽出来。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "十秒够了。你数到十，我们就走。",
              "portrait": "hero"
            },
            {
              "speaker": "白露",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "墨点",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "数出 story 里的 a、e、i、o、u，喷泉才会启动。\n\n你隐约注意到：喷泉底部刻着一个被划掉的单词。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "启动喷泉",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "统计字符串 story 里的元音数量并输出：1。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String s = \"story\";\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"story\";\n        int n = 0;\n        for (int i = 0; i < s.length(); i++) {\n            if (\"aeiou\".indexOf(s.charAt(i)) >= 0) n++;\n        }\n        System.out.println(n);\n    }\n}",
          "mode": "output",
          "expected": "1",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，花园暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，花园暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "墨点",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "白露",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，花园深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "输出 1 到 10 的总和：55。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) sum += i;\n        System.out.println(sum);\n    }\n}",
          "mode": "output",
          "expected": "55",
          "stdin": "",
          "calls": [],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，花园暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，花园暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "墨点",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "白露",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "把字符串 java 反转后输出：avaj。",
          "time": 135,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        StringBuilder sb = new StringBuilder();\n        for (int i = s.length() - 1; i >= 0; i--) sb.append(s.charAt(i));\n        System.out.println(sb);\n    }\n}",
          "mode": "output",
          "expected": "avaj",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "线索只拼上了一半。花园暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "线索只拼上了一半。花园暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "墨点",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "白露",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "再检查一遍线索",
              "next": "successCheck",
              "setFlag": "clue"
            },
            {
              "text": "喷泉底部刻着一个被划掉的单词",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "线索判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 尝试≤2次 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30,
                "maxAttempts": 2
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 找到线索",
              "when": {
                "outcome": "success",
                "flags": [
                  "clue"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有找到线索",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "blind"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "线索判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 找到线索",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "clue"
                ]
              },
              "next": "deeper"
            },
            {
              "label": "超时 + 没有找到线索",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "wander"
            }
          ],
          "defaultNext": "wander"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "线索判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 找到线索",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "clue"
                ]
              },
              "next": "retreat"
            },
            {
              "label": "放弃 + 没有找到线索",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "nothing"
            }
          ],
          "defaultNext": "nothing"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "看清全貌",
          "text": "你找到了关键线索，花园的机关被真正解开。",
          "outcome": "good"
        },
        {
          "id": "blind",
          "type": "ending",
          "title": "摸黑完成",
          "text": "你完成了任务，却没看懂花园真正的秘密。",
          "outcome": "neutral"
        },
        {
          "id": "deeper",
          "type": "ending",
          "title": "更深的线索",
          "text": "超时后，你顺着线索掉进花园更深的一层。",
          "outcome": "bad"
        },
        {
          "id": "wander",
          "type": "ending",
          "title": "迷失",
          "text": "你没有线索，超时后在花园里彻底迷路。",
          "outcome": "bad"
        },
        {
          "id": "retreat",
          "type": "ending",
          "title": "带着线索撤退",
          "text": "你主动放弃，但把线索带了出来。故事没有结束，只是暂停。",
          "outcome": "neutral"
        },
        {
          "id": "nothing",
          "type": "ending",
          "title": "无功而返",
          "text": "你放弃了，也没有找到任何线索。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 元音之心",
          "text": "被划掉的单词是“rhythm”，喷泉底部藏着一颗没有元音的心。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。花园的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "pass",
      "title": "及格线",
      "subtitle": "让 75 分显示 PASS",
      "difficulty": 2,
      "intro": "魔法学院的成绩碑只显示 PASS 或 FAIL。你的分数是 75，及格线是 60。",
      "color": "#6FB8FF",
      "companion": "齿轮",
      "companion2": "墨斗",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "及格线",
          "text": "魔法学院的成绩碑只显示 PASS 或 FAIL。你的分数是 75，及格线是 60。\n\n成绩碑要求 75 分输出 PASS，否则学院大门不会打开。\n\n你隐约注意到：成绩碑背面刻着一条更高的隐藏及格线。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "按规则判定成绩",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "把成绩碑砸了",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "魔法学院的成绩碑只显示 PASS 或 FAIL。你的分数是 75，及格线是 60。",
              "portrait": "narrator"
            },
            {
              "speaker": "齿轮",
              "text": "如果门后真有东西，你负责代码，我负责别让它咬到你。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "行。你挡一下，我写完就带你出去。",
              "portrait": "hero"
            },
            {
              "speaker": "墨斗",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "齿轮",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "成绩碑要求 75 分输出 PASS，否则学院大门不会打开。\n\n你隐约注意到：成绩碑背面刻着一条更高的隐藏及格线。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "点亮成绩碑",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "分数 75 大于等于 60 时输出 PASS，否则输出 FAIL。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int score = 75;\n        if (score >= 60) System.out.println(\"PASS\");\n        else System.out.println(\"FAIL\");\n    }\n}",
          "mode": "output",
          "expected": "PASS",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "你的手还在抖。学院恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "你的手还在抖。学院恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "齿轮",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "墨斗",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "成绩碑背面刻着一条更高的隐藏及格线",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "坚持判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜一次通过 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45,
                "maxAttempts": 1
              },
              "next": "hidden"
            },
            {
              "label": "一次通过",
              "when": {
                "outcome": "success",
                "maxAttempts": 1
              },
              "next": "firstTry"
            },
            {
              "label": "多次尝试后通过",
              "when": {
                "outcome": "success",
                "minAttempts": 2
              },
              "next": "scarred"
            }
          ],
          "defaultNext": "firstTry"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "坚持判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥3次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 3
              },
              "next": "exhausted"
            },
            {
              "label": "超时 + 尝试<3次",
              "when": {
                "outcome": "timeout",
                "maxAttempts": 2
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "坚持判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            },
            {
              "label": "放弃 + 尝试≥2次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 2
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 只尝试过1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1,
                "maxAttempts": 1
              },
              "next": "almost"
            }
          ],
          "defaultNext": "almost"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "firstTry",
          "type": "ending",
          "title": "一次通过",
          "text": "你第一次运行就通过了，学院的守卫都愣了一下。",
          "outcome": "good"
        },
        {
          "id": "scarred",
          "type": "ending",
          "title": "带着伤通过",
          "text": "你试了很多次，终于通过，但学院留下了无法修复的裂痕。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你反复尝试，倒计时归零。学院在你眼前关闭。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "时间耗尽",
          "text": "你还没来得及找到答案，时间就结束了。",
          "outcome": "bad"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有尝试就放弃了。学院没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "及时止损",
          "text": "你尝试过，也判断出了自己过不去。你带着经验撤退。",
          "outcome": "neutral"
        },
        {
          "id": "almost",
          "type": "ending",
          "title": "只差一步",
          "text": "你只试了一次就放弃，后来才知道那一步已经接近答案。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 满分院",
          "text": "你发现隐藏及格线是 90，进入只有满分院学生知道的塔楼。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。学院的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "celsius",
      "title": "冰霜与火焰",
      "subtitle": "把 0 摄氏度转换成 32 华氏度",
      "difficulty": 2,
      "intro": "冰霜桥和火焰桥之间只有一条温度换算公式。守桥人要你把 0℃ 换成华氏度。",
      "color": "#6FB8FF",
      "companion": "铃兰",
      "companion2": "铜齿轮",
      "companion3": "铜环",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "冰霜与火焰",
          "text": "冰霜桥和火焰桥之间只有一条温度换算公式。守桥人要你把 0℃ 换成华氏度。\n\n公式是 C × 9 / 5 + 32。把 0 送进去，桥才会合并。\n\n你隐约注意到：桥墩上刻着绝对零度的位置。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "计算温度",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先听对方把话说完，也许它不想伤人",
              "next": "code1",
              "setFlag": "mercy"
            },
            {
              "text": "跳进河里游过去",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "冰霜桥和火焰桥之间只有一条温度换算公式。守桥人要你把 0℃ 换成华氏度。",
              "portrait": "narrator"
            },
            {
              "speaker": "铃兰",
              "text": "你走前面，我断后。别回头，回头会浪费时间。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "不回头。你跟上。",
              "portrait": "hero"
            },
            {
              "speaker": "铜齿轮",
              "text": "如果出不来，我会把这段故事带出去。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜环",
              "text": "我只说一次：这次别再相信墙上的字。",
              "portrait": "companion3"
            },
            {
              "speaker": "铃兰",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "公式是 C × 9 / 5 + 32。把 0 送进去，桥才会合并。\n\n你隐约注意到：桥墩上刻着绝对零度的位置。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "换算温度",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "把 0 摄氏度转换成华氏度并输出：32。",
          "time": 180,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        int c = 0;\n        System.out.println(c * 9 / 5 + 32);\n    }\n}",
          "mode": "output",
          "expected": "32",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，双桥暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，双桥暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铃兰",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            },
            {
              "speaker": "铜齿轮",
              "text": "我不想记录一个失败结局。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜环",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，双桥深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "把字符串 java 反转后输出：avaj。",
          "time": 150,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        // TODO\n    }\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        String s = \"java\";\n        StringBuilder sb = new StringBuilder();\n        for (int i = s.length() - 1; i >= 0; i--) sb.append(s.charAt(i));\n        System.out.println(sb);\n    }\n}",
          "mode": "output",
          "expected": "avaj",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "对方没有离开。双桥暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "对方没有离开。双桥暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铃兰",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            },
            {
              "speaker": "铜齿轮",
              "text": "这次，让故事有一个不一样的结尾吧。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜环",
              "text": "如果那点光是真的，就带它出来。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "放过对方，留它一命",
              "next": "successCheck",
              "setFlag": "mercy"
            },
            {
              "text": "桥墩上刻着绝对零度的位置",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "慈悲判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 放过对方",
              "when": {
                "outcome": "success",
                "flags": [
                  "mercy"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有放过对方",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "ruthless"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "慈悲判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 放过对方",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "mercy"
                ]
              },
              "next": "forgiven"
            },
            {
              "label": "超时 + 没有放过对方",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "doomed"
            }
          ],
          "defaultNext": "doomed"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "慈悲判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 放过对方",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "mercy"
                ]
              },
              "next": "spared"
            },
            {
              "label": "放弃 + 没有放过对方",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "fled"
            }
          ],
          "defaultNext": "fled"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "留一条生路",
          "text": "你放过了对方，双桥也在最后一刻放过了你。",
          "outcome": "good"
        },
        {
          "id": "ruthless",
          "type": "ending",
          "title": "赢家",
          "text": "你完成了任务，也清除了所有阻碍，但双桥变得异常安静。",
          "outcome": "neutral"
        },
        {
          "id": "forgiven",
          "type": "ending",
          "title": "被原谅",
          "text": "你超时了，但对方记得你的仁慈，把你送出了双桥。",
          "outcome": "neutral"
        },
        {
          "id": "doomed",
          "type": "ending",
          "title": "没有回头路",
          "text": "你超时了，也没有留下任何余地。双桥关上了所有出口。",
          "outcome": "bad"
        },
        {
          "id": "spared",
          "type": "ending",
          "title": "被放过",
          "text": "你主动放弃，对方也没有追上来。双桥放你一条生路。",
          "outcome": "neutral"
        },
        {
          "id": "fled",
          "type": "ending",
          "title": "仓皇逃离",
          "text": "你放弃了，对方却没有放过你。你狼狈地逃出双桥。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 绝对零度之门",
          "text": "你算出绝对零度，桥下打开一扇只对低温开放的门。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。双桥的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "method-forge",
      "title": "方法熔炉",
      "subtitle": "把 6 单位矿石锻造成 36 单位能量",
      "difficulty": 3,
      "intro": "熔炉需要一段可复用的方法：输入边长，返回平方。工匠说，方法写对了，熔炉才会稳定。",
      "color": "#FFD166",
      "companion": "砂砾",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "方法熔炉",
          "text": "熔炉需要一段可复用的方法：输入边长，返回平方。工匠说，方法写对了，熔炉才会稳定。\n\n工匠递给你一块 6 单位的矿石：送进 square 方法，应该得到 36。\n\n你隐约注意到：熔炉内壁有一道没有被烧黑的刻痕。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "写一个 square 方法",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "把矿石直接丢进火里",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "熔炉需要一段可复用的方法：输入边长，返回平方。工匠说，方法写对了，熔炉才会稳定。",
              "portrait": "narrator"
            },
            {
              "speaker": "砂砾",
              "text": "先别碰机关。熔炉的灰尘刚落下来，说明有人比我们更早到。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "那就得比他们更快。你盯住门口，我来读这段代码。",
              "portrait": "hero"
            },
            {
              "speaker": "砂砾",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "工匠递给你一块 6 单位的矿石：送进 square 方法，应该得到 36。\n\n你隐约注意到：熔炉内壁有一道没有被烧黑的刻痕。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "square 方法",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "实现 static int square(int n)，返回 n 的平方。",
          "time": 210,
          "starter": "public class Main {\n    static int square(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int square(int n) {\n        return n * n;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "square",
              "invoke": "square(6)",
              "expect": "36"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，熔炉暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，熔炉暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "砂砾",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，熔炉深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "创建 Account 类：存入 100、取出 20，余额为 80。",
          "time": 180,
          "starter": "public class Main {\n    static int f() {\n        Account a = new Account();\n        a.deposit(100);\n        a.withdraw(20);\n        return a.amount();\n    }\n}\nclass Account {\n    // TODO\n}",
          "solution": "public class Main {\n    static int f() {\n        Account a = new Account();\n        a.deposit(100);\n        a.withdraw(20);\n        return a.amount();\n    }\n}\nclass Account {\n    int balance = 0;\n    void deposit(int x) { balance += x; }\n    void withdraw(int x) { balance -= x; }\n    int amount() { return balance; }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "account",
              "invoke": "f()",
              "expect": "80"
            }
          ],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，熔炉暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，熔炉暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "砂砾",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "让 f() 返回枚举 MONDAY 的名字：MONDAY。",
          "time": 165,
          "starter": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    // TODO\n}",
          "solution": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    MONDAY, TUESDAY, WEDNESDAY\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "enum",
              "invoke": "f()",
              "expect": "MONDAY"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "秒针还在走。熔炉恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "秒针还在走。熔炉恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "砂砾",
              "text": "我们做到了。熔炉安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "熔炉内壁有一道没有被烧黑的刻痕",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "速度判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 60
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "minRemaining": 60
              },
              "next": "good"
            },
            {
              "label": "按时完成，但剩余<60秒",
              "when": {
                "outcome": "success"
              },
              "next": "late"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "速度判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥2次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 2
              },
              "next": "exhausted"
            },
            {
              "label": "超时",
              "when": {
                "outcome": "timeout"
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "速度判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 尝试≥1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            }
          ],
          "defaultNext": "tactical"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "准时完成",
          "text": "你在时间还很充裕时完成，熔炉的机关稳稳停下。",
          "outcome": "good"
        },
        {
          "id": "late",
          "type": "ending",
          "title": "最后一秒",
          "text": "你在最后几秒才通过，熔炉擦着边缘得救，但留下了裂缝。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你试了太多次，倒计时还是归零。熔炉陷入混乱。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "倒计时归零",
          "text": "时间到，熔炉被黑暗吞没。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "战术撤退",
          "text": "你在尝试过后主动撤退，保住了性命，也记住了失败的路径。",
          "outcome": "neutral"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有运行代码就放弃了。熔炉没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 熔炉的第二核心",
          "text": "你顺刻痕找到第二核心，里面封着一块永不冷却的星铁。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。熔炉的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "wizard-tower",
      "title": "法师塔的自我介绍",
      "subtitle": "让新法师说出名字与法力",
      "difficulty": 3,
      "intro": "法师塔的守门人只放行会自我介绍的法师。你要创建一个 Wizard 类。",
      "color": "#FFD166",
      "companion": "风铃",
      "companion2": "银铃",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "法师塔的自我介绍",
          "text": "法师塔的守门人只放行会自我介绍的法师。你要创建一个 Wizard 类。\n\n登记册要求：法师必须有 name 和 power，并能返回“名字:法力”。\n\n你隐约注意到：登记册最后一页夹着一根黑色的羽毛。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "创建 Wizard 类",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先相信那个陌生人，和他一起进去",
              "next": "code1",
              "setFlag": "trust"
            },
            {
              "text": "冒充别人的名字",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "法师塔的守门人只放行会自我介绍的法师。你要创建一个 Wizard 类。",
              "portrait": "narrator"
            },
            {
              "speaker": "风铃",
              "text": "你听见了吗？法师塔里面有第二种呼吸声，不是你的，也不是我的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我听见了。所以更要进去，趁它还没醒。",
              "portrait": "hero"
            },
            {
              "speaker": "银铃",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "风铃",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "登记册要求：法师必须有 name 和 power，并能返回“名字:法力”。\n\n你隐约注意到：登记册最后一页夹着一根黑色的羽毛。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "Wizard 类",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "创建 Wizard 类，introduce() 返回“name:power”。",
          "time": 210,
          "starter": "public class Main {\n    static String f() {\n        return new Wizard(\"Merlin\", 99).introduce();\n    }\n}\nclass Wizard {\n    // TODO\n}",
          "solution": "public class Main {\n    static String f() {\n        return new Wizard(\"Merlin\", 99).introduce();\n    }\n}\nclass Wizard {\n    String name;\n    int power;\n    Wizard(String name, int power) {\n        this.name = name;\n        this.power = power;\n    }\n    String introduce() {\n        return name + \":\" + power;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "wizard",
              "invoke": "f()",
              "expect": "Merlin:99"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，法师塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，法师塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "风铃",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "银铃",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，法师塔深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "让 Square(4).area() 返回 16。",
          "time": 180,
          "starter": "public class Main {\n    static int f() {\n        return new Square(4).area();\n    }\n}\ninterface Shape {\n    int area();\n}\nclass Square implements Shape {\n    // TODO\n}",
          "solution": "public class Main {\n    static int f() {\n        return new Square(4).area();\n    }\n}\ninterface Shape {\n    int area();\n}\nclass Square implements Shape {\n    int s;\n    Square(int s) { this.s = s; }\n    public int area() { return s * s; }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "shape",
              "invoke": "f()",
              "expect": "16"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "同伴在门口等你。法师塔暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "同伴在门口等你。法师塔暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "风铃",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "银铃",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "相信同伴，把后背交给对方",
              "next": "successCheck",
              "setFlag": "trust"
            },
            {
              "text": "登记册最后一页夹着一根黑色的羽毛",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "信任判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 信任同伴",
              "when": {
                "outcome": "success",
                "flags": [
                  "trust"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有信任",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "betrayal"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "信任判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 信任同伴",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "trust"
                ]
              },
              "next": "rescued"
            },
            {
              "label": "超时 + 没有信任",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "abandoned"
            }
          ],
          "defaultNext": "abandoned"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "信任判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 信任同伴",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "trust"
                ]
              },
              "next": "carried"
            },
            {
              "label": "放弃 + 没有信任",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "alone"
            }
          ],
          "defaultNext": "alone"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "并肩完成",
          "text": "同伴接住了你漏掉的那一步，法师塔在你们的配合下恢复。",
          "outcome": "good"
        },
        {
          "id": "betrayal",
          "type": "ending",
          "title": "背后的刀",
          "text": "你完成了任务，但同伴在你转身时关上了门。你被留在法师塔。",
          "outcome": "bad"
        },
        {
          "id": "rescued",
          "type": "ending",
          "title": "被拉回的一秒",
          "text": "超时前，同伴把你从机关里拽了出来。法师塔没有得救，但你活了下来。",
          "outcome": "neutral"
        },
        {
          "id": "abandoned",
          "type": "ending",
          "title": "无人回应",
          "text": "你超时了，向同伴呼救，但身后没有声音。法师塔把你吞没。",
          "outcome": "bad"
        },
        {
          "id": "carried",
          "type": "ending",
          "title": "被背着离开",
          "text": "你主动放弃，同伴把你背出了法师塔。任务失败，但信任还在。",
          "outcome": "neutral"
        },
        {
          "id": "alone",
          "type": "ending",
          "title": "独自退场",
          "text": "你放弃了，同伴也转身离开。法师塔只剩下你一个人的脚印。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 塔顶的禁忌法师",
          "text": "你顺着羽毛找到塔顶，那里住着一位被登记册抹去的禁忌法师。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。法师塔的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "factorial",
      "title": "递归钟楼",
      "subtitle": "让钟声递归到 5 的阶乘",
      "difficulty": 3,
      "intro": "钟楼的每层都比下一层多敲一次。守钟人要你算出 5 的阶乘，钟才会敲响。",
      "color": "#FFD166",
      "companion": "银线",
      "companion2": "银币",
      "companion3": "铜钉二",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "递归钟楼",
          "text": "钟楼的每层都比下一层多敲一次。守钟人要你算出 5 的阶乘，钟才会敲响。\n\n实现递归 factorial(5)，返回 120。\n\n你隐约注意到：钟楼地下室有一口没有钟摆的钟。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "写递归阶乘",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先检查值钱的东西，能拿的都拿上",
              "next": "code1",
              "setFlag": "greed"
            },
            {
              "text": "一层层手动敲",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "钟楼的每层都比下一层多敲一次。守钟人要你算出 5 的阶乘，钟才会敲响。",
              "portrait": "narrator"
            },
            {
              "speaker": "银线",
              "text": "这次别又把机关弄炸。我只有一只备用的手，炸坏了就真没有了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我不会炸。至少这次不会。",
              "portrait": "hero"
            },
            {
              "speaker": "银币",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜钉二",
              "text": "我只说一次：这次别再相信墙上的字。",
              "portrait": "companion3"
            },
            {
              "speaker": "银线",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "实现递归 factorial(5)，返回 120。\n\n你隐约注意到：钟楼地下室有一口没有钟摆的钟。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "递归钟声",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "实现递归阶乘，让 factorial(5) 返回 120。",
          "time": 210,
          "starter": "public class Main {\n    static int factorial(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int factorial(int n) {\n        return n <= 1 ? 1 : n * factorial(n - 1);\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "fact",
              "invoke": "factorial(5)",
              "expect": "120"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，钟楼暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，钟楼暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "银线",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "银币",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜钉二",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，钟楼深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "让 f() 返回枚举 MONDAY 的名字：MONDAY。",
          "time": 180,
          "starter": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    // TODO\n}",
          "solution": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    MONDAY, TUESDAY, WEDNESDAY\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "enum",
              "invoke": "f()",
              "expect": "MONDAY"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "宝箱还开着。钟楼恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝箱还开着。钟楼恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "银线",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "银币",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜钉二",
              "text": "我在外面等你们。别让我等太久。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "把额外的宝藏也拿走",
              "next": "successCheck",
              "setFlag": "greed"
            },
            {
              "text": "钟楼地下室有一口没有钟摆的钟",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "贪婪判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 没有拿额外宝藏 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "notFlags": [
                  "greed"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 没有拿额外宝藏",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 拿了额外宝藏",
              "when": {
                "outcome": "success",
                "flags": [
                  "greed"
                ]
              },
              "next": "cursed"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "贪婪判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 拿了额外宝藏",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "greed"
                ]
              },
              "next": "lost"
            },
            {
              "label": "超时 + 没有贪心",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "escape"
            }
          ],
          "defaultNext": "escape"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "贪婪判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 拿了额外宝藏",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "greed"
                ]
              },
              "next": "empty"
            },
            {
              "label": "放弃 + 没有贪心",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "wise"
            }
          ],
          "defaultNext": "wise"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "只取所需",
          "text": "你只拿走属于自己的那一份，钟楼的诅咒没有找上你。",
          "outcome": "good"
        },
        {
          "id": "cursed",
          "type": "ending",
          "title": "被诅咒的宝藏",
          "text": "额外的宝藏在你怀里变成黑色，你被永远留在钟楼。",
          "outcome": "bad"
        },
        {
          "id": "lost",
          "type": "ending",
          "title": "被宝藏拖住",
          "text": "你舍不得额外宝藏，超时后被钟楼吞了进去。",
          "outcome": "bad"
        },
        {
          "id": "escape",
          "type": "ending",
          "title": "空手逃生",
          "text": "你没有贪心，超时后及时逃出，钟楼的宝藏留在了原地。",
          "outcome": "neutral"
        },
        {
          "id": "empty",
          "type": "ending",
          "title": "两手空空",
          "text": "你放弃时还抱着宝藏，结果两样都没带走。",
          "outcome": "bad"
        },
        {
          "id": "wise",
          "type": "ending",
          "title": "及时收手",
          "text": "你主动放弃，也放下了不属于自己的东西。钟楼放你离开。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第零声钟",
          "text": "你找到那口无摆钟，敲响它之后，时间倒流了一分钟。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。钟楼的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "account",
      "title": "银行金库",
      "subtitle": "让账户在存取后剩下 80 金币",
      "difficulty": 3,
      "intro": "矮人银行的金库门只认账户余额。你要创建一个 Account，存入 100、取出 20。",
      "color": "#FFD166",
      "companion": "星屑",
      "companion2": "星图",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "银行金库",
          "text": "矮人银行的金库门只认账户余额。你要创建一个 Account，存入 100、取出 20。\n\n金库门要求余额为 80，才会打开。\n\n你隐约注意到：金库墙上有七个大小不一的钥匙孔。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "创建 Account 类",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先观察四周的痕迹，再决定怎么走",
              "next": "code1",
              "setFlag": "clue"
            },
            {
              "text": "从通风口爬进去",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "矮人银行的金库门只认账户余额。你要创建一个 Account，存入 100、取出 20。",
              "portrait": "narrator"
            },
            {
              "speaker": "星屑",
              "text": "我可以替你拖十秒。十秒之后，不管你写没写完，我都会把你拽出来。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "十秒够了。你数到十，我们就走。",
              "portrait": "hero"
            },
            {
              "speaker": "星图",
              "text": "如果出不来，我会把这段故事带出去。",
              "portrait": "companion2"
            },
            {
              "speaker": "星屑",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "金库门要求余额为 80，才会打开。\n\n你隐约注意到：金库墙上有七个大小不一的钥匙孔。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "账户操作",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "创建 Account 类：存入 100、取出 20，余额为 80。",
          "time": 210,
          "starter": "public class Main {\n    static int f() {\n        Account a = new Account();\n        a.deposit(100);\n        a.withdraw(20);\n        return a.amount();\n    }\n}\nclass Account {\n    // TODO\n}",
          "solution": "public class Main {\n    static int f() {\n        Account a = new Account();\n        a.deposit(100);\n        a.withdraw(20);\n        return a.amount();\n    }\n}\nclass Account {\n    int balance = 0;\n    void deposit(int x) { balance += x; }\n    void withdraw(int x) { balance -= x; }\n    int amount() { return balance; }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "account",
              "invoke": "f()",
              "expect": "80"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "线索只拼上了一半。金库暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "线索只拼上了一半。金库暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "星屑",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            },
            {
              "speaker": "星图",
              "text": "这次，让故事有一个不一样的结尾吧。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "再检查一遍线索",
              "next": "successCheck",
              "setFlag": "clue"
            },
            {
              "text": "金库墙上有七个大小不一的钥匙孔",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "线索判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 尝试≤2次 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30,
                "maxAttempts": 2
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 找到线索",
              "when": {
                "outcome": "success",
                "flags": [
                  "clue"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有找到线索",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "blind"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "线索判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 找到线索",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "clue"
                ]
              },
              "next": "deeper"
            },
            {
              "label": "超时 + 没有找到线索",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "wander"
            }
          ],
          "defaultNext": "wander"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "线索判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 找到线索",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "clue"
                ]
              },
              "next": "retreat"
            },
            {
              "label": "放弃 + 没有找到线索",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "nothing"
            }
          ],
          "defaultNext": "nothing"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "看清全貌",
          "text": "你找到了关键线索，金库的机关被真正解开。",
          "outcome": "good"
        },
        {
          "id": "blind",
          "type": "ending",
          "title": "摸黑完成",
          "text": "你完成了任务，却没看懂金库真正的秘密。",
          "outcome": "neutral"
        },
        {
          "id": "deeper",
          "type": "ending",
          "title": "更深的线索",
          "text": "超时后，你顺着线索掉进金库更深的一层。",
          "outcome": "bad"
        },
        {
          "id": "wander",
          "type": "ending",
          "title": "迷失",
          "text": "你没有线索，超时后在金库里彻底迷路。",
          "outcome": "bad"
        },
        {
          "id": "retreat",
          "type": "ending",
          "title": "带着线索撤退",
          "text": "你主动放弃，但把线索带了出来。故事没有结束，只是暂停。",
          "outcome": "neutral"
        },
        {
          "id": "nothing",
          "type": "ending",
          "title": "无功而返",
          "text": "你放弃了，也没有找到任何线索。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第七金库",
          "text": "你按钥匙孔顺序打开暗门，找到只存在于传说中的第七金库。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。金库的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "shape",
      "title": "形状工坊",
      "subtitle": "让正方形工坊算出 16 的面积",
      "difficulty": 3,
      "intro": "形状工坊的机器只会通过 Shape 接口计算面积。今天送来一块边长 4 的正方形。",
      "color": "#FFD166",
      "companion": "回声",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "形状工坊",
          "text": "形状工坊的机器只会通过 Shape 接口计算面积。今天送来一块边长 4 的正方形。\n\n实现 Square 的 area()，让面积等于 16。\n\n你隐约注意到：工坊角落有一块不属于任何形状的废料。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "实现 Shape 接口",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "用尺子手动量",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "形状工坊的机器只会通过 Shape 接口计算面积。今天送来一块边长 4 的正方形。",
              "portrait": "narrator"
            },
            {
              "speaker": "回声",
              "text": "如果门后真有东西，你负责代码，我负责别让它咬到你。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "行。你挡一下，我写完就带你出去。",
              "portrait": "hero"
            },
            {
              "speaker": "回声",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "实现 Square 的 area()，让面积等于 16。\n\n你隐约注意到：工坊角落有一块不属于任何形状的废料。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "面积接口",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让 Square(4).area() 返回 16。",
          "time": 210,
          "starter": "public class Main {\n    static int f() {\n        return new Square(4).area();\n    }\n}\ninterface Shape {\n    int area();\n}\nclass Square implements Shape {\n    // TODO\n}",
          "solution": "public class Main {\n    static int f() {\n        return new Square(4).area();\n    }\n}\ninterface Shape {\n    int area();\n}\nclass Square implements Shape {\n    int s;\n    Square(int s) { this.s = s; }\n    public int area() { return s * s; }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "shape",
              "invoke": "f()",
              "expect": "16"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，工坊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，工坊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "回声",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，工坊深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "创建 Wizard 类，introduce() 返回“name:power”。",
          "time": 180,
          "starter": "public class Main {\n    static String f() {\n        return new Wizard(\"Merlin\", 99).introduce();\n    }\n}\nclass Wizard {\n    // TODO\n}",
          "solution": "public class Main {\n    static String f() {\n        return new Wizard(\"Merlin\", 99).introduce();\n    }\n}\nclass Wizard {\n    String name;\n    int power;\n    Wizard(String name, int power) {\n        this.name = name;\n        this.power = power;\n    }\n    String introduce() {\n        return name + \":\" + power;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "wizard",
              "invoke": "f()",
              "expect": "Merlin:99"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "你的手还在抖。工坊恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "你的手还在抖。工坊恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "回声",
              "text": "我们做到了。工坊安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "工坊角落有一块不属于任何形状的废料",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "坚持判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜一次通过 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45,
                "maxAttempts": 1
              },
              "next": "hidden"
            },
            {
              "label": "一次通过",
              "when": {
                "outcome": "success",
                "maxAttempts": 1
              },
              "next": "firstTry"
            },
            {
              "label": "多次尝试后通过",
              "when": {
                "outcome": "success",
                "minAttempts": 2
              },
              "next": "scarred"
            }
          ],
          "defaultNext": "firstTry"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "坚持判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥3次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 3
              },
              "next": "exhausted"
            },
            {
              "label": "超时 + 尝试<3次",
              "when": {
                "outcome": "timeout",
                "maxAttempts": 2
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "坚持判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            },
            {
              "label": "放弃 + 尝试≥2次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 2
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 只尝试过1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1,
                "maxAttempts": 1
              },
              "next": "almost"
            }
          ],
          "defaultNext": "almost"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "firstTry",
          "type": "ending",
          "title": "一次通过",
          "text": "你第一次运行就通过了，工坊的守卫都愣了一下。",
          "outcome": "good"
        },
        {
          "id": "scarred",
          "type": "ending",
          "title": "带着伤通过",
          "text": "你试了很多次，终于通过，但工坊留下了无法修复的裂痕。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你反复尝试，倒计时归零。工坊在你眼前关闭。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "时间耗尽",
          "text": "你还没来得及找到答案，时间就结束了。",
          "outcome": "bad"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有尝试就放弃了。工坊没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "及时止损",
          "text": "你尝试过，也判断出了自己过不去。你带着经验撤退。",
          "outcome": "neutral"
        },
        {
          "id": "almost",
          "type": "ending",
          "title": "只差一步",
          "text": "你只试了一次就放弃，后来才知道那一步已经接近答案。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第四维形状",
          "text": "废料在月光下展开成一块四维形状，工坊的机器第一次算出了边界之外。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。工坊的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "enum",
      "title": "星期密码",
      "subtitle": "让枚举返回 MONDAY 的名字",
      "difficulty": 3,
      "intro": "时间塔的密码盘只接受星期枚举的名字。今天是星期一，你需要让它返回 MONDAY。",
      "color": "#FFD166",
      "companion": "萤火",
      "companion2": "萤石",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "星期密码",
          "text": "时间塔的密码盘只接受星期枚举的名字。今天是星期一，你需要让它返回 MONDAY。\n\n创建 Day 枚举，让 f() 返回 MONDAY。\n\n你隐约注意到：密码盘背面刻着第八天。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "创建 Day 枚举",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先听对方把话说完，也许它不想伤人",
              "next": "code1",
              "setFlag": "mercy"
            },
            {
              "text": "把密码盘调乱",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "时间塔的密码盘只接受星期枚举的名字。今天是星期一，你需要让它返回 MONDAY。",
              "portrait": "narrator"
            },
            {
              "speaker": "萤火",
              "text": "你走前面，我断后。别回头，回头会浪费时间。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "不回头。你跟上。",
              "portrait": "hero"
            },
            {
              "speaker": "萤石",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "萤火",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "创建 Day 枚举，让 f() 返回 MONDAY。\n\n你隐约注意到：密码盘背面刻着第八天。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "星期枚举",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让 f() 返回枚举 MONDAY 的名字：MONDAY。",
          "time": 210,
          "starter": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    // TODO\n}",
          "solution": "public class Main {\n    static String f() {\n        return Day.MONDAY.name();\n    }\n}\nenum Day {\n    MONDAY, TUESDAY, WEDNESDAY\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "enum",
              "invoke": "f()",
              "expect": "MONDAY"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，时间塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，时间塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "萤火",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "萤石",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，时间塔深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "实现递归阶乘，让 factorial(5) 返回 120。",
          "time": 180,
          "starter": "public class Main {\n    static int factorial(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int factorial(int n) {\n        return n <= 1 ? 1 : n * factorial(n - 1);\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "fact",
              "invoke": "factorial(5)",
              "expect": "120"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "对方没有离开。时间塔暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "对方没有离开。时间塔暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "萤火",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "萤石",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "放过对方，留它一命",
              "next": "successCheck",
              "setFlag": "mercy"
            },
            {
              "text": "密码盘背面刻着第八天",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "慈悲判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 放过对方",
              "when": {
                "outcome": "success",
                "flags": [
                  "mercy"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有放过对方",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "ruthless"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "慈悲判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 放过对方",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "mercy"
                ]
              },
              "next": "forgiven"
            },
            {
              "label": "超时 + 没有放过对方",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "doomed"
            }
          ],
          "defaultNext": "doomed"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "慈悲判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 放过对方",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "mercy"
                ]
              },
              "next": "spared"
            },
            {
              "label": "放弃 + 没有放过对方",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "fled"
            }
          ],
          "defaultNext": "fled"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "留一条生路",
          "text": "你放过了对方，时间塔也在最后一刻放过了你。",
          "outcome": "good"
        },
        {
          "id": "ruthless",
          "type": "ending",
          "title": "赢家",
          "text": "你完成了任务，也清除了所有阻碍，但时间塔变得异常安静。",
          "outcome": "neutral"
        },
        {
          "id": "forgiven",
          "type": "ending",
          "title": "被原谅",
          "text": "你超时了，但对方记得你的仁慈，把你送出了时间塔。",
          "outcome": "neutral"
        },
        {
          "id": "doomed",
          "type": "ending",
          "title": "没有回头路",
          "text": "你超时了，也没有留下任何余地。时间塔关上了所有出口。",
          "outcome": "bad"
        },
        {
          "id": "spared",
          "type": "ending",
          "title": "被放过",
          "text": "你主动放弃，对方也没有追上来。时间塔放你一条生路。",
          "outcome": "neutral"
        },
        {
          "id": "fled",
          "type": "ending",
          "title": "仓皇逃离",
          "text": "你放弃了，对方却没有放过你。你狼狈地逃出时间塔。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第八天",
          "text": "你拨到第八天，时间塔多出了一层原本不存在的楼层。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。时间塔的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "library",
      "title": "集合图书馆",
      "subtitle": "在三本书里找到第二本的编号",
      "difficulty": 4,
      "intro": "图书馆的书架被施了魔法，书会自己移动。馆长要你用集合保存书名和位置。",
      "color": "#80CBC4",
      "companion": "石桥",
      "companion2": "桥影",
      "companion3": "桥灯",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "集合图书馆",
          "text": "图书馆的书架被施了魔法，书会自己移动。馆长要你用集合保存书名和位置。\n\n用 List 保存三本书，用 Map 保存 x 的位置，返回 3:2。\n\n你隐约注意到：最上层书架有一本没有书名的书。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用 List 和 Map 整理",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "把所有书堆在地上",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "图书馆的书架被施了魔法，书会自己移动。馆长要你用集合保存书名和位置。",
              "portrait": "narrator"
            },
            {
              "speaker": "石桥",
              "text": "先别碰机关。图书馆的灰尘刚落下来，说明有人比我们更早到。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "那就得比他们更快。你盯住门口，我来读这段代码。",
              "portrait": "hero"
            },
            {
              "speaker": "桥影",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "桥灯",
              "text": "外面还有我。门关上之前，我会想办法。",
              "portrait": "companion3"
            },
            {
              "speaker": "石桥",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "用 List 保存三本书，用 Map 保存 x 的位置，返回 3:2。\n\n你隐约注意到：最上层书架有一本没有书名的书。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "整理书架",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "用 List 保存三本书，用 Map 保存 x 的位置，返回 3:2。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    static String f() {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    static String f() {\n        List<String> books = new ArrayList<>();\n        books.add(\"Java\"); books.add(\"Data\"); books.add(\"Algo\");\n        Map<String,Integer> pos = new HashMap<>();\n        pos.put(\"x\", 2);\n        return books.size() + \":\" + pos.get(\"x\");\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "library",
              "invoke": "f()",
              "expect": "3:2"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，图书馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，图书馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "石桥",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "桥影",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "桥灯",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，图书馆深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "把 [3, 1, 2] 排序后输出：[1, 2, 3]。",
          "time": 210,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 2));\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 2));\n        Collections.sort(list);\n        System.out.println(list);\n    }\n}",
          "mode": "output",
          "expected": "[1, 2, 3]",
          "stdin": "",
          "calls": [],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，图书馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，图书馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "石桥",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "桥影",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "桥灯",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "按长度统计 {\"java\",\"is\",\"fun\"} 有多少种长度，输出：3。",
          "time": 195,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"java\", \"is\", \"fun\"};\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"java\", \"is\", \"fun\"};\n        Map<Integer,Integer> m = new HashMap<>();\n        for (String w : words) {\n            int k = w.length();\n            m.put(k, m.getOrDefault(k, 0) + 1);\n        }\n        System.out.println(m.size());\n    }\n}",
          "mode": "output",
          "expected": "3",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "秒针还在走。图书馆恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "秒针还在走。图书馆恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "石桥",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "桥影",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            },
            {
              "speaker": "桥灯",
              "text": "我在外面等你们。别让我等太久。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "最上层书架有一本没有书名的书",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "速度判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 60
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "minRemaining": 60
              },
              "next": "good"
            },
            {
              "label": "按时完成，但剩余<60秒",
              "when": {
                "outcome": "success"
              },
              "next": "late"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "速度判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥2次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 2
              },
              "next": "exhausted"
            },
            {
              "label": "超时",
              "when": {
                "outcome": "timeout"
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "速度判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 尝试≥1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            }
          ],
          "defaultNext": "tactical"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "准时完成",
          "text": "你在时间还很充裕时完成，图书馆的机关稳稳停下。",
          "outcome": "good"
        },
        {
          "id": "late",
          "type": "ending",
          "title": "最后一秒",
          "text": "你在最后几秒才通过，图书馆擦着边缘得救，但留下了裂缝。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你试了太多次，倒计时还是归零。图书馆陷入混乱。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "倒计时归零",
          "text": "时间到，图书馆被黑暗吞没。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "战术撤退",
          "text": "你在尝试过后主动撤退，保住了性命，也记住了失败的路径。",
          "outcome": "neutral"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有运行代码就放弃了。图书馆没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 无尽书页",
          "text": "你翻开无字书，书页不断延伸，里面藏着图书馆所有失传的目录。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。图书馆的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "dragon",
      "title": "继承王座",
      "subtitle": "让不同的龙发出自己的吼声",
      "difficulty": 4,
      "intro": "王座厅里坐着不同种类的龙，它们都继承自 Animal，但吼声不同。",
      "color": "#80CBC4",
      "companion": "灰烬",
      "companion2": "余火",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "继承王座",
          "text": "王座厅里坐着不同种类的龙，它们都继承自 Animal，但吼声不同。\n\n老龙王说：不要写一堆 if，让每条龙用自己的 sound() 回答。\n\n你隐约注意到：王座底下有一枚被龙焰烧黑的蛋。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用继承与多态",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先相信那个陌生人，和他一起进去",
              "next": "code1",
              "setFlag": "trust"
            },
            {
              "text": "偷偷溜出王座厅",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "王座厅里坐着不同种类的龙，它们都继承自 Animal，但吼声不同。",
              "portrait": "narrator"
            },
            {
              "speaker": "灰烬",
              "text": "你听见了吗？王座厅里面有第二种呼吸声，不是你的，也不是我的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我听见了。所以更要进去，趁它还没醒。",
              "portrait": "hero"
            },
            {
              "speaker": "余火",
              "text": "如果出不来，我会把这段故事带出去。",
              "portrait": "companion2"
            },
            {
              "speaker": "灰烬",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "老龙王说：不要写一堆 if，让每条龙用自己的 sound() 回答。\n\n你隐约注意到：王座底下有一枚被龙焰烧黑的蛋。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "龙之吼",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "让 Animal a = new Dragon(); a.sound() 输出 DragonRoar。",
          "time": 240,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dragon();\n        // TODO\n    }\n}\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dragon extends Animal {\n    // TODO\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dragon();\n        System.out.println(a.sound());\n    }\n}\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dragon extends Animal {\n    String sound() { return \"DragonRoar\"; }\n}",
          "mode": "output",
          "expected": "DragonRoar",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，王座厅暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，王座厅暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "灰烬",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            },
            {
              "speaker": "余火",
              "text": "我不想记录一个失败结局。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，王座厅深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "保留 [1, 2, 3, 4] 中的偶数，输出：[2, 4]。",
          "time": 210,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3, 4);\n        List<Integer> out = new ArrayList<>();\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3, 4);\n        List<Integer> out = new ArrayList<>();\n        for (int x : src) if (x % 2 == 0) out.add(x);\n        System.out.println(out);\n    }\n}",
          "mode": "output",
          "expected": "[2, 4]",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "同伴在门口等你。王座厅暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "同伴在门口等你。王座厅暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "灰烬",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            },
            {
              "speaker": "余火",
              "text": "这次，让故事有一个不一样的结尾吧。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "相信同伴，把后背交给对方",
              "next": "successCheck",
              "setFlag": "trust"
            },
            {
              "text": "王座底下有一枚被龙焰烧黑的蛋",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "信任判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 信任同伴",
              "when": {
                "outcome": "success",
                "flags": [
                  "trust"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有信任",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "betrayal"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "信任判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 信任同伴",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "trust"
                ]
              },
              "next": "rescued"
            },
            {
              "label": "超时 + 没有信任",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "abandoned"
            }
          ],
          "defaultNext": "abandoned"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "信任判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 信任同伴",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "trust"
                ]
              },
              "next": "carried"
            },
            {
              "label": "放弃 + 没有信任",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "alone"
            }
          ],
          "defaultNext": "alone"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "并肩完成",
          "text": "同伴接住了你漏掉的那一步，王座厅在你们的配合下恢复。",
          "outcome": "good"
        },
        {
          "id": "betrayal",
          "type": "ending",
          "title": "背后的刀",
          "text": "你完成了任务，但同伴在你转身时关上了门。你被留在王座厅。",
          "outcome": "bad"
        },
        {
          "id": "rescued",
          "type": "ending",
          "title": "被拉回的一秒",
          "text": "超时前，同伴把你从机关里拽了出来。王座厅没有得救，但你活了下来。",
          "outcome": "neutral"
        },
        {
          "id": "abandoned",
          "type": "ending",
          "title": "无人回应",
          "text": "你超时了，向同伴呼救，但身后没有声音。王座厅把你吞没。",
          "outcome": "bad"
        },
        {
          "id": "carried",
          "type": "ending",
          "title": "被背着离开",
          "text": "你主动放弃，同伴把你背出了王座厅。任务失败，但信任还在。",
          "outcome": "neutral"
        },
        {
          "id": "alone",
          "type": "ending",
          "title": "独自退场",
          "text": "你放弃了，同伴也转身离开。王座厅只剩下你一个人的脚印。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 影龙之卵",
          "text": "你抱起那枚蛋，它裂开一条缝，里面传来不属于任何已知龙族的吼声。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。王座厅的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "wordcount",
      "title": "词语计数官",
      "subtitle": "数清 a 在三个词里出现了几次",
      "difficulty": 4,
      "intro": "词语海关要求你统计行李里的违禁词。三个词是 a、b、a，违禁词是 a。",
      "color": "#80CBC4",
      "companion": "锚点",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "词语计数官",
          "text": "词语海关要求你统计行李里的违禁词。三个词是 a、b、a，违禁词是 a。\n\n用 Map 统计 a 的出现次数，输出 2。\n\n你隐约注意到：海关印章上有一个反向的字母 a。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用 Map 统计",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先检查值钱的东西，能拿的都拿上",
              "next": "code1",
              "setFlag": "greed"
            },
            {
              "text": "把行李倒进海里",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "词语海关要求你统计行李里的违禁词。三个词是 a、b、a，违禁词是 a。",
              "portrait": "narrator"
            },
            {
              "speaker": "锚点",
              "text": "这次别又把机关弄炸。我只有一只备用的手，炸坏了就真没有了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我不会炸。至少这次不会。",
              "portrait": "hero"
            },
            {
              "speaker": "锚点",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "用 Map 统计 a 的出现次数，输出 2。\n\n你隐约注意到：海关印章上有一个反向的字母 a。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "词语统计",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "统计数组 {\"a\",\"b\",\"a\"} 中 a 出现的次数并输出：2。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        Map<String,Integer> m = new HashMap<>();\n        for (String w : words) m.put(w, m.getOrDefault(w, 0) + 1);\n        System.out.println(m.get(\"a\"));\n    }\n}",
          "mode": "output",
          "expected": "2",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "宝箱还开着。海关恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝箱还开着。海关恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "锚点",
              "text": "我们做到了。海关安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "把额外的宝藏也拿走",
              "next": "successCheck",
              "setFlag": "greed"
            },
            {
              "text": "海关印章上有一个反向的字母 a",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "贪婪判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 没有拿额外宝藏 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "notFlags": [
                  "greed"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 没有拿额外宝藏",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 拿了额外宝藏",
              "when": {
                "outcome": "success",
                "flags": [
                  "greed"
                ]
              },
              "next": "cursed"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "贪婪判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 拿了额外宝藏",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "greed"
                ]
              },
              "next": "lost"
            },
            {
              "label": "超时 + 没有贪心",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "escape"
            }
          ],
          "defaultNext": "escape"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "贪婪判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 拿了额外宝藏",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "greed"
                ]
              },
              "next": "empty"
            },
            {
              "label": "放弃 + 没有贪心",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "wise"
            }
          ],
          "defaultNext": "wise"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "只取所需",
          "text": "你只拿走属于自己的那一份，海关的诅咒没有找上你。",
          "outcome": "good"
        },
        {
          "id": "cursed",
          "type": "ending",
          "title": "被诅咒的宝藏",
          "text": "额外的宝藏在你怀里变成黑色，你被永远留在海关。",
          "outcome": "bad"
        },
        {
          "id": "lost",
          "type": "ending",
          "title": "被宝藏拖住",
          "text": "你舍不得额外宝藏，超时后被海关吞了进去。",
          "outcome": "bad"
        },
        {
          "id": "escape",
          "type": "ending",
          "title": "空手逃生",
          "text": "你没有贪心，超时后及时逃出，海关的宝藏留在了原地。",
          "outcome": "neutral"
        },
        {
          "id": "empty",
          "type": "ending",
          "title": "两手空空",
          "text": "你放弃时还抱着宝藏，结果两样都没带走。",
          "outcome": "bad"
        },
        {
          "id": "wise",
          "type": "ending",
          "title": "及时收手",
          "text": "你主动放弃，也放下了不属于自己的东西。海关放你离开。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 镜像词库",
          "text": "你按印章找到镜像词库，里面所有词都以相反的方向计数。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。海关的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "sort",
      "title": "排序市集",
      "subtitle": "把 3、1、2 排成 1、2、3",
      "difficulty": 4,
      "intro": "市集的摊位按编号排序，但今天的编号是乱的：3、1、2。开市前必须排好。",
      "color": "#80CBC4",
      "companion": "潮声",
      "companion2": "潮汐",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "排序市集",
          "text": "市集的摊位按编号排序，但今天的编号是乱的：3、1、2。开市前必须排好。\n\n用 Collections.sort 排序并输出 [1, 2, 3]。\n\n你隐约注意到：市集尽头有一个没有编号的空摊位。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "排序列表",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先观察四周的痕迹，再决定怎么走",
              "next": "code1",
              "setFlag": "clue"
            },
            {
              "text": "把摊位随便挪一挪",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "市集的摊位按编号排序，但今天的编号是乱的：3、1、2。开市前必须排好。",
              "portrait": "narrator"
            },
            {
              "speaker": "潮声",
              "text": "我可以替你拖十秒。十秒之后，不管你写没写完，我都会把你拽出来。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "十秒够了。你数到十，我们就走。",
              "portrait": "hero"
            },
            {
              "speaker": "潮汐",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "潮声",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "用 Collections.sort 排序并输出 [1, 2, 3]。\n\n你隐约注意到：市集尽头有一个没有编号的空摊位。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "排序摊位",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "把 [3, 1, 2] 排序后输出：[1, 2, 3]。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 2));\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> list = new ArrayList<>(Arrays.asList(3, 1, 2));\n        Collections.sort(list);\n        System.out.println(list);\n    }\n}",
          "mode": "output",
          "expected": "[1, 2, 3]",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，市集暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，市集暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "潮声",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "潮汐",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，市集深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "用 List 保存三本书，用 Map 保存 x 的位置，返回 3:2。",
          "time": 210,
          "starter": "import java.util.*;\npublic class Main {\n    static String f() {\n        // TODO\n        return \"\";\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    static String f() {\n        List<String> books = new ArrayList<>();\n        books.add(\"Java\"); books.add(\"Data\"); books.add(\"Algo\");\n        Map<String,Integer> pos = new HashMap<>();\n        pos.put(\"x\", 2);\n        return books.size() + \":\" + pos.get(\"x\");\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "library",
              "invoke": "f()",
              "expect": "3:2"
            }
          ],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，市集暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，市集暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "潮声",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "潮汐",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "统计数组 {\"a\",\"b\",\"a\"} 中 a 出现的次数并输出：2。",
          "time": 195,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        Map<String,Integer> m = new HashMap<>();\n        for (String w : words) m.put(w, m.getOrDefault(w, 0) + 1);\n        System.out.println(m.get(\"a\"));\n    }\n}",
          "mode": "output",
          "expected": "2",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "线索只拼上了一半。市集暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "线索只拼上了一半。市集暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "潮声",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "潮汐",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "再检查一遍线索",
              "next": "successCheck",
              "setFlag": "clue"
            },
            {
              "text": "市集尽头有一个没有编号的空摊位",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "线索判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 尝试≤2次 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30,
                "maxAttempts": 2
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 找到线索",
              "when": {
                "outcome": "success",
                "flags": [
                  "clue"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有找到线索",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "blind"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "线索判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 找到线索",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "clue"
                ]
              },
              "next": "deeper"
            },
            {
              "label": "超时 + 没有找到线索",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "wander"
            }
          ],
          "defaultNext": "wander"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "线索判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 找到线索",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "clue"
                ]
              },
              "next": "retreat"
            },
            {
              "label": "放弃 + 没有找到线索",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "nothing"
            }
          ],
          "defaultNext": "nothing"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "看清全貌",
          "text": "你找到了关键线索，市集的机关被真正解开。",
          "outcome": "good"
        },
        {
          "id": "blind",
          "type": "ending",
          "title": "摸黑完成",
          "text": "你完成了任务，却没看懂市集真正的秘密。",
          "outcome": "neutral"
        },
        {
          "id": "deeper",
          "type": "ending",
          "title": "更深的线索",
          "text": "超时后，你顺着线索掉进市集更深的一层。",
          "outcome": "bad"
        },
        {
          "id": "wander",
          "type": "ending",
          "title": "迷失",
          "text": "你没有线索，超时后在市集里彻底迷路。",
          "outcome": "bad"
        },
        {
          "id": "retreat",
          "type": "ending",
          "title": "带着线索撤退",
          "text": "你主动放弃，但把线索带了出来。故事没有结束，只是暂停。",
          "outcome": "neutral"
        },
        {
          "id": "nothing",
          "type": "ending",
          "title": "无功而返",
          "text": "你放弃了，也没有找到任何线索。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第零号摊位",
          "text": "你走进空摊位，发现它是所有摊位排序的起点，也是市集传说的源头。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。市集的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "filter",
      "title": "偶数过滤器",
      "subtitle": "只留下 1、2、3、4 里的偶数",
      "difficulty": 4,
      "intro": "水晶筛子只让偶数通过。今天要处理 1、2、3、4，留下 2 和 4。",
      "color": "#80CBC4",
      "companion": "铁皮",
      "companion2": "铁锤",
      "companion3": "铁砧三",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "偶数过滤器",
          "text": "水晶筛子只让偶数通过。今天要处理 1、2、3、4，留下 2 和 4。\n\n遍历列表，保留偶数，输出 [2, 4]。\n\n你隐约注意到：筛子底部卡着一颗既不是奇数也不是偶数的晶体。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "过滤偶数",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "把整袋水晶倒进去",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "水晶筛子只让偶数通过。今天要处理 1、2、3、4，留下 2 和 4。",
              "portrait": "narrator"
            },
            {
              "speaker": "铁皮",
              "text": "如果门后真有东西，你负责代码，我负责别让它咬到你。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "行。你挡一下，我写完就带你出去。",
              "portrait": "hero"
            },
            {
              "speaker": "铁锤",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "铁砧三",
              "text": "别都挤在前面。后面的绳子我拉着。",
              "portrait": "companion3"
            },
            {
              "speaker": "铁皮",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "遍历列表，保留偶数，输出 [2, 4]。\n\n你隐约注意到：筛子底部卡着一颗既不是奇数也不是偶数的晶体。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "偶数筛选",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "保留 [1, 2, 3, 4] 中的偶数，输出：[2, 4]。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3, 4);\n        List<Integer> out = new ArrayList<>();\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<Integer> src = Arrays.asList(1, 2, 3, 4);\n        List<Integer> out = new ArrayList<>();\n        for (int x : src) if (x % 2 == 0) out.add(x);\n        System.out.println(out);\n    }\n}",
          "mode": "output",
          "expected": "[2, 4]",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，水晶谷暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，水晶谷暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铁皮",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "铁锤",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "铁砧三",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，水晶谷深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "让 Animal a = new Dragon(); a.sound() 输出 DragonRoar。",
          "time": 210,
          "starter": "public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dragon();\n        // TODO\n    }\n}\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dragon extends Animal {\n    // TODO\n}",
          "solution": "public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dragon();\n        System.out.println(a.sound());\n    }\n}\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dragon extends Animal {\n    String sound() { return \"DragonRoar\"; }\n}",
          "mode": "output",
          "expected": "DragonRoar",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "你的手还在抖。水晶谷恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "你的手还在抖。水晶谷恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铁皮",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "铁锤",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            },
            {
              "speaker": "铁砧三",
              "text": "我在外面等你们。别让我等太久。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "筛子底部卡着一颗既不是奇数也不是偶数的晶体",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "坚持判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜一次通过 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45,
                "maxAttempts": 1
              },
              "next": "hidden"
            },
            {
              "label": "一次通过",
              "when": {
                "outcome": "success",
                "maxAttempts": 1
              },
              "next": "firstTry"
            },
            {
              "label": "多次尝试后通过",
              "when": {
                "outcome": "success",
                "minAttempts": 2
              },
              "next": "scarred"
            }
          ],
          "defaultNext": "firstTry"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "坚持判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥3次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 3
              },
              "next": "exhausted"
            },
            {
              "label": "超时 + 尝试<3次",
              "when": {
                "outcome": "timeout",
                "maxAttempts": 2
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "坚持判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            },
            {
              "label": "放弃 + 尝试≥2次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 2
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 只尝试过1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1,
                "maxAttempts": 1
              },
              "next": "almost"
            }
          ],
          "defaultNext": "almost"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "firstTry",
          "type": "ending",
          "title": "一次通过",
          "text": "你第一次运行就通过了，水晶谷的守卫都愣了一下。",
          "outcome": "good"
        },
        {
          "id": "scarred",
          "type": "ending",
          "title": "带着伤通过",
          "text": "你试了很多次，终于通过，但水晶谷留下了无法修复的裂痕。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你反复尝试，倒计时归零。水晶谷在你眼前关闭。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "时间耗尽",
          "text": "你还没来得及找到答案，时间就结束了。",
          "outcome": "bad"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有尝试就放弃了。水晶谷没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "及时止损",
          "text": "你尝试过，也判断出了自己过不去。你带着经验撤退。",
          "outcome": "neutral"
        },
        {
          "id": "almost",
          "type": "ending",
          "title": "只差一步",
          "text": "你只试了一次就放弃，后来才知道那一步已经接近答案。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 零号水晶",
          "text": "你取出那颗晶体，它让整个水晶谷的筛子同时停了一秒。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。水晶谷的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "group",
      "title": "分组档案馆",
      "subtitle": "按长度把三个词分成三类",
      "difficulty": 4,
      "intro": "档案馆要求按词长分组。三个词是 java、is、fun，它们恰好有三种长度。",
      "color": "#80CBC4",
      "companion": "月牙",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "分组档案馆",
          "text": "档案馆要求按词长分组。三个词是 java、is、fun，它们恰好有三种长度。\n\n统计有多少种长度，输出 3。\n\n你隐约注意到：档案柜最底层有一个没有标签的抽屉。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用 Map 分组",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先听对方把话说完，也许它不想伤人",
              "next": "code1",
              "setFlag": "mercy"
            },
            {
              "text": "把档案全部烧掉",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "档案馆要求按词长分组。三个词是 java、is、fun，它们恰好有三种长度。",
              "portrait": "narrator"
            },
            {
              "speaker": "月牙",
              "text": "你走前面，我断后。别回头，回头会浪费时间。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "不回头。你跟上。",
              "portrait": "hero"
            },
            {
              "speaker": "月牙",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "统计有多少种长度，输出 3。\n\n你隐约注意到：档案柜最底层有一个没有标签的抽屉。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "长度分组",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "按长度统计 {\"java\",\"is\",\"fun\"} 有多少种长度，输出：3。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"java\", \"is\", \"fun\"};\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"java\", \"is\", \"fun\"};\n        Map<Integer,Integer> m = new HashMap<>();\n        for (String w : words) {\n            int k = w.length();\n            m.put(k, m.getOrDefault(k, 0) + 1);\n        }\n        System.out.println(m.size());\n    }\n}",
          "mode": "output",
          "expected": "3",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，档案馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，档案馆暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "月牙",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，档案馆深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "统计数组 {\"a\",\"b\",\"a\"} 中 a 出现的次数并输出：2。",
          "time": 210,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        String[] words = {\"a\", \"b\", \"a\"};\n        Map<String,Integer> m = new HashMap<>();\n        for (String w : words) m.put(w, m.getOrDefault(w, 0) + 1);\n        System.out.println(m.get(\"a\"));\n    }\n}",
          "mode": "output",
          "expected": "2",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "对方没有离开。档案馆暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "对方没有离开。档案馆暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "月牙",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "放过对方，留它一命",
              "next": "successCheck",
              "setFlag": "mercy"
            },
            {
              "text": "档案柜最底层有一个没有标签的抽屉",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "慈悲判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 放过对方",
              "when": {
                "outcome": "success",
                "flags": [
                  "mercy"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有放过对方",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "ruthless"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "慈悲判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 放过对方",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "mercy"
                ]
              },
              "next": "forgiven"
            },
            {
              "label": "超时 + 没有放过对方",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "doomed"
            }
          ],
          "defaultNext": "doomed"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "慈悲判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 放过对方",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "mercy"
                ]
              },
              "next": "spared"
            },
            {
              "label": "放弃 + 没有放过对方",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "fled"
            }
          ],
          "defaultNext": "fled"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "留一条生路",
          "text": "你放过了对方，档案馆也在最后一刻放过了你。",
          "outcome": "good"
        },
        {
          "id": "ruthless",
          "type": "ending",
          "title": "赢家",
          "text": "你完成了任务，也清除了所有阻碍，但档案馆变得异常安静。",
          "outcome": "neutral"
        },
        {
          "id": "forgiven",
          "type": "ending",
          "title": "被原谅",
          "text": "你超时了，但对方记得你的仁慈，把你送出了档案馆。",
          "outcome": "neutral"
        },
        {
          "id": "doomed",
          "type": "ending",
          "title": "没有回头路",
          "text": "你超时了，也没有留下任何余地。档案馆关上了所有出口。",
          "outcome": "bad"
        },
        {
          "id": "spared",
          "type": "ending",
          "title": "被放过",
          "text": "你主动放弃，对方也没有追上来。档案馆放你一条生路。",
          "outcome": "neutral"
        },
        {
          "id": "fled",
          "type": "ending",
          "title": "仓皇逃离",
          "text": "你放弃了，对方却没有放过你。你狼狈地逃出档案馆。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 无标签档案",
          "text": "你拉开抽屉，里面是一份关于你自己的档案，日期是明天。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。档案馆的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "divide",
      "title": "异常深渊",
      "subtitle": "在除零之前拦住深渊",
      "difficulty": 5,
      "intro": "深渊的桥由除法机关控制。只要除数为 0，桥就会断裂。你要写一个安全除法。",
      "color": "#EF9A9A",
      "companion": "棘刺",
      "companion2": "荆棘",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "异常深渊",
          "text": "深渊的桥由除法机关控制。只要除数为 0，桥就会断裂。你要写一个安全除法。\n\n实现 safeDivide：b 为 0 返回 -1，否则返回 a / b。\n\n你隐约注意到：桥边有一条被锁链拴住的小船。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "写安全除法",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "跳过去赌一把",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "深渊的桥由除法机关控制。只要除数为 0，桥就会断裂。你要写一个安全除法。",
              "portrait": "narrator"
            },
            {
              "speaker": "棘刺",
              "text": "先别碰机关。深渊的灰尘刚落下来，说明有人比我们更早到。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "那就得比他们更快。你盯住门口，我来读这段代码。",
              "portrait": "hero"
            },
            {
              "speaker": "荆棘",
              "text": "我也在。别把我当成背景。",
              "portrait": "companion2"
            },
            {
              "speaker": "棘刺",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "实现 safeDivide：b 为 0 返回 -1，否则返回 a / b。\n\n你隐约注意到：桥边有一条被锁链拴住的小船。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "safeDivide",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "实现 safeDivide：b 为 0 返回 -1，否则返回 a / b。",
          "time": 270,
          "starter": "public class Main {\n    static int safeDivide(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int safeDivide(int a, int b) {\n        if (b == 0) return -1;\n        return a / b;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "zero",
              "invoke": "safeDivide(10,0)",
              "expect": "-1"
            },
            {
              "name": "ok",
              "invoke": "safeDivide(10,2)",
              "expect": "5"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，深渊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，深渊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "棘刺",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            },
            {
              "speaker": "荆棘",
              "text": "我在后面。你们决定，我执行。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，深渊深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "实现递归斐波那契，让 fib(8) 返回 21。",
          "time": 240,
          "starter": "public class Main {\n    static int fib(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int fib(int n) {\n        return n < 2 ? n : fib(n - 1) + fib(n - 2);\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "fib",
              "invoke": "fib(8)",
              "expect": "21"
            }
          ],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，深渊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，深渊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "棘刺",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            },
            {
              "speaker": "荆棘",
              "text": "我在后面。你们决定，我执行。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "把 [\"bb\", \"a\"] 排序后输出：[a, bb]。",
          "time": 225,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        Collections.sort(list);\n        System.out.println(list);\n    }\n}",
          "mode": "output",
          "expected": "[a, bb]",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "秒针还在走。深渊恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "秒针还在走。深渊恢复了平静，但你知道自己刚才离失败只差几秒。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "棘刺",
              "text": "我们做到了。深渊安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            },
            {
              "speaker": "荆棘",
              "text": "不管你选什么，我都会把这段写进记录。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "桥边有一条被锁链拴住的小船",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "速度判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 60
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 剩余≥60秒",
              "when": {
                "outcome": "success",
                "minRemaining": 60
              },
              "next": "good"
            },
            {
              "label": "按时完成，但剩余<60秒",
              "when": {
                "outcome": "success"
              },
              "next": "late"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "速度判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥2次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 2
              },
              "next": "exhausted"
            },
            {
              "label": "超时",
              "when": {
                "outcome": "timeout"
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "速度判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 尝试≥1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            }
          ],
          "defaultNext": "tactical"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "准时完成",
          "text": "你在时间还很充裕时完成，深渊的机关稳稳停下。",
          "outcome": "good"
        },
        {
          "id": "late",
          "type": "ending",
          "title": "最后一秒",
          "text": "你在最后几秒才通过，深渊擦着边缘得救，但留下了裂缝。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你试了太多次，倒计时还是归零。深渊陷入混乱。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "倒计时归零",
          "text": "时间到，深渊被黑暗吞没。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "战术撤退",
          "text": "你在尝试过后主动撤退，保住了性命，也记住了失败的路径。",
          "outcome": "neutral"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有运行代码就放弃了。深渊没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 深渊渡船",
          "text": "你解开锁链，小船带你绕过桥，驶向深渊底部那座倒悬的城。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。深渊的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "stream",
      "title": "Stream 星门",
      "subtitle": "过滤星光，再变成双倍亮度",
      "difficulty": 5,
      "intro": "星门只接受偶数星光，并要求把每束光放大两倍。你有一组数字：1、2、3、4。",
      "color": "#EF9A9A",
      "companion": "铜镜",
      "companion2": "铜盘",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "Stream 星门",
          "text": "星门只接受偶数星光，并要求把每束光放大两倍。你有一组数字：1、2、3、4。\n\n用 Stream 过滤偶数、乘以 2、收集为 List，返回 [4, 8]。\n\n你隐约注意到：星门背面刻着一条没有终点的管道。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "用 Stream 流水线",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先相信那个陌生人，和他一起进去",
              "next": "code1",
              "setFlag": "trust"
            },
            {
              "text": "手动逐个调整星门",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "星门只接受偶数星光，并要求把每束光放大两倍。你有一组数字：1、2、3、4。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜镜",
              "text": "你听见了吗？星门里面有第二种呼吸声，不是你的，也不是我的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我听见了。所以更要进去，趁它还没醒。",
              "portrait": "hero"
            },
            {
              "speaker": "铜盘",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "铜镜",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "用 Stream 过滤偶数、乘以 2、收集为 List，返回 [4, 8]。\n\n你隐约注意到：星门背面刻着一条没有终点的管道。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "星光流水线",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "用 Stream 过滤偶数、乘以 2、收集为 List，让 f() 返回 [4, 8]。",
          "time": 270,
          "starter": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static List<Integer> f() {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static List<Integer> f() {\n        return Stream.of(1, 2, 3, 4)\n                .filter(n -> n % 2 == 0)\n                .map(n -> n * 2)\n                .collect(Collectors.toList());\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "stream",
              "invoke": "f()",
              "expect": "[4, 8]"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "同伴在门口等你。星门暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "同伴在门口等你。星门暂时安全，但你还没想好要不要把后背交出去。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "铜镜",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "铜盘",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "相信同伴，把后背交给对方",
              "next": "successCheck",
              "setFlag": "trust"
            },
            {
              "text": "星门背面刻着一条没有终点的管道",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "信任判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 信任同伴",
              "when": {
                "outcome": "success",
                "flags": [
                  "trust"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有信任",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "betrayal"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "信任判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 信任同伴",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "trust"
                ]
              },
              "next": "rescued"
            },
            {
              "label": "超时 + 没有信任",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "abandoned"
            }
          ],
          "defaultNext": "abandoned"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "信任判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 信任同伴",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "trust"
                ]
              },
              "next": "carried"
            },
            {
              "label": "放弃 + 没有信任",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "trust"
                ]
              },
              "next": "alone"
            }
          ],
          "defaultNext": "alone"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "并肩完成",
          "text": "同伴接住了你漏掉的那一步，星门在你们的配合下恢复。",
          "outcome": "good"
        },
        {
          "id": "betrayal",
          "type": "ending",
          "title": "背后的刀",
          "text": "你完成了任务，但同伴在你转身时关上了门。你被留在星门。",
          "outcome": "bad"
        },
        {
          "id": "rescued",
          "type": "ending",
          "title": "被拉回的一秒",
          "text": "超时前，同伴把你从机关里拽了出来。星门没有得救，但你活了下来。",
          "outcome": "neutral"
        },
        {
          "id": "abandoned",
          "type": "ending",
          "title": "无人回应",
          "text": "你超时了，向同伴呼救，但身后没有声音。星门把你吞没。",
          "outcome": "bad"
        },
        {
          "id": "carried",
          "type": "ending",
          "title": "被背着离开",
          "text": "你主动放弃，同伴把你背出了星门。任务失败，但信任还在。",
          "outcome": "neutral"
        },
        {
          "id": "alone",
          "type": "ending",
          "title": "独自退场",
          "text": "你放弃了，同伴也转身离开。星门只剩下你一个人的脚印。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 无限星流",
          "text": "你顺着管道走进去，看到所有星系的星光都汇向同一个源头。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。星门的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "max",
      "title": "泛型极限",
      "subtitle": "让 max(3, 7) 返回 7",
      "difficulty": 5,
      "intro": "极限竞技场只承认更大的那个数。今天上场的是 3 和 7。",
      "color": "#EF9A9A",
      "companion": "线团",
      "companion2": "线轴",
      "companion3": "线结",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "泛型极限",
          "text": "极限竞技场只承认更大的那个数。今天上场的是 3 和 7。\n\n实现 max(int a, int b)，让 max(3, 7) 返回 7。\n\n你隐约注意到：竞技场地面下埋着一块刻着负数的石板。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "写 max 方法",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先检查值钱的东西，能拿的都拿上",
              "next": "code1",
              "setFlag": "greed"
            },
            {
              "text": "宣布平局",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "极限竞技场只承认更大的那个数。今天上场的是 3 和 7。",
              "portrait": "narrator"
            },
            {
              "speaker": "线团",
              "text": "这次别又把机关弄炸。我只有一只备用的手，炸坏了就真没有了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我不会炸。至少这次不会。",
              "portrait": "hero"
            },
            {
              "speaker": "线轴",
              "text": "我负责记录，你们负责别死。",
              "portrait": "companion2"
            },
            {
              "speaker": "线结",
              "text": "我只说一次：这次别再相信墙上的字。",
              "portrait": "companion3"
            },
            {
              "speaker": "线团",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "实现 max(int a, int b)，让 max(3, 7) 返回 7。\n\n你隐约注意到：竞技场地面下埋着一块刻着负数的石板。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "max 方法",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "实现 max(int a, int b)，让 max(3, 7) 返回 7。",
          "time": 270,
          "starter": "public class Main {\n    static int max(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int max(int a, int b) {\n        return a > b ? a : b;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "max",
              "invoke": "max(3,7)",
              "expect": "7"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，竞技场暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，竞技场暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "线团",
              "text": "你的手在抖。要不要现在回头？",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "再给我一次机会。这次我会写对。",
              "portrait": "hero"
            },
            {
              "speaker": "线轴",
              "text": "这次我站你这边。",
              "portrait": "companion2"
            },
            {
              "speaker": "线结",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，竞技场深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "把 [\"bb\", \"a\"] 排序后输出：[a, bb]。",
          "time": 240,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        Collections.sort(list);\n        System.out.println(list);\n    }\n}",
          "mode": "output",
          "expected": "[a, bb]",
          "stdin": "",
          "calls": [],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "宝箱还开着。竞技场恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "宝箱还开着。竞技场恢复了平静，可你听见箱底传来第二种声音。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "线团",
              "text": "你听见那点微光了吗？它一直在叫你的名字。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "我想看看那点微光是什么。",
              "portrait": "hero"
            },
            {
              "speaker": "线轴",
              "text": "我们还有时间。但不多。",
              "portrait": "companion2"
            },
            {
              "speaker": "线结",
              "text": "我在外面等你们。别让我等太久。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "把额外的宝藏也拿走",
              "next": "successCheck",
              "setFlag": "greed"
            },
            {
              "text": "竞技场地面下埋着一块刻着负数的石板",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "贪婪判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 没有拿额外宝藏 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "notFlags": [
                  "greed"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 没有拿额外宝藏",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 拿了额外宝藏",
              "when": {
                "outcome": "success",
                "flags": [
                  "greed"
                ]
              },
              "next": "cursed"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "贪婪判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 拿了额外宝藏",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "greed"
                ]
              },
              "next": "lost"
            },
            {
              "label": "超时 + 没有贪心",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "escape"
            }
          ],
          "defaultNext": "escape"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "贪婪判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 拿了额外宝藏",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "greed"
                ]
              },
              "next": "empty"
            },
            {
              "label": "放弃 + 没有贪心",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "greed"
                ]
              },
              "next": "wise"
            }
          ],
          "defaultNext": "wise"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "只取所需",
          "text": "你只拿走属于自己的那一份，竞技场的诅咒没有找上你。",
          "outcome": "good"
        },
        {
          "id": "cursed",
          "type": "ending",
          "title": "被诅咒的宝藏",
          "text": "额外的宝藏在你怀里变成黑色，你被永远留在竞技场。",
          "outcome": "bad"
        },
        {
          "id": "lost",
          "type": "ending",
          "title": "被宝藏拖住",
          "text": "你舍不得额外宝藏，超时后被竞技场吞了进去。",
          "outcome": "bad"
        },
        {
          "id": "escape",
          "type": "ending",
          "title": "空手逃生",
          "text": "你没有贪心，超时后及时逃出，竞技场的宝藏留在了原地。",
          "outcome": "neutral"
        },
        {
          "id": "empty",
          "type": "ending",
          "title": "两手空空",
          "text": "你放弃时还抱着宝藏，结果两样都没带走。",
          "outcome": "bad"
        },
        {
          "id": "wise",
          "type": "ending",
          "title": "及时收手",
          "text": "你主动放弃，也放下了不属于自己的东西。竞技场放你离开。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 负数冠军",
          "text": "你挖出石板，发现负数也有自己的冠军，它一直在地下等待上场。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。竞技场的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "fib",
      "title": "斐波那契回廊",
      "subtitle": "让第 8 级台阶通向 21",
      "difficulty": 5,
      "intro": "回廊的每级台阶都是前两级之和。守门人要你走到第 8 级，得到 21。",
      "color": "#EF9A9A",
      "companion": "夜航",
      "companion2": "",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "斐波那契回廊",
          "text": "回廊的每级台阶都是前两级之和。守门人要你走到第 8 级，得到 21。\n\n实现递归 fib(8)，返回 21。\n\n你隐约注意到：回廊尽头有一扇标着 0 的门。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "写递归斐波那契",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先观察四周的痕迹，再决定怎么走",
              "next": "code1",
              "setFlag": "clue"
            },
            {
              "text": "一级一级跳上去",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "回廊的每级台阶都是前两级之和。守门人要你走到第 8 级，得到 21。",
              "portrait": "narrator"
            },
            {
              "speaker": "夜航",
              "text": "我可以替你拖十秒。十秒之后，不管你写没写完，我都会把你拽出来。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "十秒够了。你数到十，我们就走。",
              "portrait": "hero"
            },
            {
              "speaker": "夜航",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "实现递归 fib(8)，返回 21。\n\n你隐约注意到：回廊尽头有一扇标着 0 的门。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "斐波那契台阶",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "实现递归斐波那契，让 fib(8) 返回 21。",
          "time": 270,
          "starter": "public class Main {\n    static int fib(int n) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int fib(int n) {\n        return n < 2 ? n : fib(n - 1) + fib(n - 2);\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "fib",
              "invoke": "fib(8)",
              "expect": "21"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，回廊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，回廊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "夜航",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，回廊深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "实现 safeDivide：b 为 0 返回 -1，否则返回 a / b。",
          "time": 240,
          "starter": "public class Main {\n    static int safeDivide(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int safeDivide(int a, int b) {\n        if (b == 0) return -1;\n        return a / b;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "zero",
              "invoke": "safeDivide(10,0)",
              "expect": "-1"
            },
            {
              "name": "ok",
              "invoke": "safeDivide(10,2)",
              "expect": "5"
            }
          ],
          "success": "after2",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after2",
          "type": "text",
          "title": "第 2 道门之后",
          "text": "第一段路已经通了，回廊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，回廊暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "夜航",
              "text": "再往里，就没有退路了。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "退路是给还没看见答案的人准备的。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code3"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code3",
          "type": "code",
          "title": "最终机关",
          "text": "最后一道门就在眼前。这里的机关由另一套规则驱动，不再给你试错的机会，时间也更紧。",
          "prompt": "实现 max(int a, int b)，让 max(3, 7) 返回 7。",
          "time": 225,
          "starter": "public class Main {\n    static int max(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int max(int a, int b) {\n        return a > b ? a : b;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "max",
              "invoke": "max(3,7)",
              "expect": "7"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "线索只拼上了一半。回廊暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "线索只拼上了一半。回廊暂时安全，但你知道真正的答案还在更深处。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "夜航",
              "text": "现在走还来得及。真的。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "你怕的话，就站在我身后。",
              "portrait": "hero"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "再检查一遍线索",
              "next": "successCheck",
              "setFlag": "clue"
            },
            {
              "text": "回廊尽头有一扇标着 0 的门",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "线索判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 尝试≤2次 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30,
                "maxAttempts": 2
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 找到线索",
              "when": {
                "outcome": "success",
                "flags": [
                  "clue"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有找到线索",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "blind"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "线索判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 找到线索",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "clue"
                ]
              },
              "next": "deeper"
            },
            {
              "label": "超时 + 没有找到线索",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "wander"
            }
          ],
          "defaultNext": "wander"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "线索判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 找到线索",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "clue"
                ]
              },
              "next": "retreat"
            },
            {
              "label": "放弃 + 没有找到线索",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "clue"
                ]
              },
              "next": "nothing"
            }
          ],
          "defaultNext": "nothing"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "看清全貌",
          "text": "你找到了关键线索，回廊的机关被真正解开。",
          "outcome": "good"
        },
        {
          "id": "blind",
          "type": "ending",
          "title": "摸黑完成",
          "text": "你完成了任务，却没看懂回廊真正的秘密。",
          "outcome": "neutral"
        },
        {
          "id": "deeper",
          "type": "ending",
          "title": "更深的线索",
          "text": "超时后，你顺着线索掉进回廊更深的一层。",
          "outcome": "bad"
        },
        {
          "id": "wander",
          "type": "ending",
          "title": "迷失",
          "text": "你没有线索，超时后在回廊里彻底迷路。",
          "outcome": "bad"
        },
        {
          "id": "retreat",
          "type": "ending",
          "title": "带着线索撤退",
          "text": "你主动放弃，但把线索带了出来。故事没有结束，只是暂停。",
          "outcome": "neutral"
        },
        {
          "id": "nothing",
          "type": "ending",
          "title": "无功而返",
          "text": "你放弃了，也没有找到任何线索。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 第零级台阶",
          "text": "你推开 0 号门，回廊开始向下延伸，通往斐波那契数列的起点。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。回廊的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "caught",
      "title": "异常捕获者",
      "subtitle": "在除零时抓住 caught",
      "difficulty": 5,
      "intro": "异常沼泽会把没有捕获的异常变成怪物。你要在除零时抓住它，返回 caught。",
      "color": "#EF9A9A",
      "companion": "白噪",
      "companion2": "白羽",
      "companion3": "",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "异常捕获者",
          "text": "异常沼泽会把没有捕获的异常变成怪物。你要在除零时抓住它，返回 caught。\n\n用 try/catch 捕获 ArithmeticException，让 f() 返回 caught。\n\n你隐约注意到：沼泽中心有一口不断冒泡的井。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "捕获除零异常",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "让异常自己消失",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "异常沼泽会把没有捕获的异常变成怪物。你要在除零时抓住它，返回 caught。",
              "portrait": "narrator"
            },
            {
              "speaker": "白噪",
              "text": "如果门后真有东西，你负责代码，我负责别让它咬到你。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "行。你挡一下，我写完就带你出去。",
              "portrait": "hero"
            },
            {
              "speaker": "白羽",
              "text": "我也在。别把我当成背景。",
              "portrait": "companion2"
            },
            {
              "speaker": "白噪",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "用 try/catch 捕获 ArithmeticException，让 f() 返回 caught。\n\n你隐约注意到：沼泽中心有一口不断冒泡的井。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "捕获异常",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "捕获除零异常，让 f() 返回 caught。",
          "time": 270,
          "starter": "public class Main {\n    static String f() {\n        try {\n            int x = 1 / 0;\n            return \"no\";\n        } catch (ArithmeticException e) {\n            // TODO\n            return \"\";\n        }\n    }\n}",
          "solution": "public class Main {\n    static String f() {\n        try {\n            int x = 1 / 0;\n            return \"no\";\n        } catch (ArithmeticException e) {\n            return \"caught\";\n        }\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "exception",
              "invoke": "f()",
              "expect": "caught"
            }
          ],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，沼泽暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，沼泽暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "白噪",
              "text": "门后有风。不是出口，是更深的机关。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "要么现在走，要么把最后一层也拆开。",
              "portrait": "hero"
            },
            {
              "speaker": "白羽",
              "text": "我在后面。你们决定，我执行。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，沼泽深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "用 Stream 过滤偶数、乘以 2、收集为 List，让 f() 返回 [4, 8]。",
          "time": 240,
          "starter": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static List<Integer> f() {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
          "solution": "import java.util.*;\nimport java.util.stream.*;\npublic class Main {\n    static List<Integer> f() {\n        return Stream.of(1, 2, 3, 4)\n                .filter(n -> n % 2 == 0)\n                .map(n -> n * 2)\n                .collect(Collectors.toList());\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "stream",
              "invoke": "f()",
              "expect": "[4, 8]"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "你的手还在抖。沼泽恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "你的手还在抖。沼泽恢复了平静，失败过的痕迹却留在了代码里。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "白噪",
              "text": "我们做到了。沼泽安静得不正常。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "还有一个选择没做完。",
              "portrait": "hero"
            },
            {
              "speaker": "白羽",
              "text": "不管你选什么，我都会把这段写进记录。",
              "portrait": "companion2"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "沼泽中心有一口不断冒泡的井",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "坚持判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜一次通过 + 发现隐藏线索 + 剩余≥45秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 45,
                "maxAttempts": 1
              },
              "next": "hidden"
            },
            {
              "label": "一次通过",
              "when": {
                "outcome": "success",
                "maxAttempts": 1
              },
              "next": "firstTry"
            },
            {
              "label": "多次尝试后通过",
              "when": {
                "outcome": "success",
                "minAttempts": 2
              },
              "next": "scarred"
            }
          ],
          "defaultNext": "firstTry"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "坚持判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 尝试≥3次",
              "when": {
                "outcome": "timeout",
                "minAttempts": 3
              },
              "next": "exhausted"
            },
            {
              "label": "超时 + 尝试<3次",
              "when": {
                "outcome": "timeout",
                "maxAttempts": 2
              },
              "next": "timeout"
            }
          ],
          "defaultNext": "timeout"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "坚持判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 一次都没运行",
              "when": {
                "outcome": "giveup",
                "maxAttempts": 0
              },
              "next": "coward"
            },
            {
              "label": "放弃 + 尝试≥2次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 2
              },
              "next": "tactical"
            },
            {
              "label": "放弃 + 只尝试过1次",
              "when": {
                "outcome": "giveup",
                "minAttempts": 1,
                "maxAttempts": 1
              },
              "next": "almost"
            }
          ],
          "defaultNext": "almost"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "firstTry",
          "type": "ending",
          "title": "一次通过",
          "text": "你第一次运行就通过了，沼泽的守卫都愣了一下。",
          "outcome": "good"
        },
        {
          "id": "scarred",
          "type": "ending",
          "title": "带着伤通过",
          "text": "你试了很多次，终于通过，但沼泽留下了无法修复的裂痕。",
          "outcome": "neutral"
        },
        {
          "id": "exhausted",
          "type": "ending",
          "title": "力竭",
          "text": "你反复尝试，倒计时归零。沼泽在你眼前关闭。",
          "outcome": "bad"
        },
        {
          "id": "timeout",
          "type": "ending",
          "title": "时间耗尽",
          "text": "你还没来得及找到答案，时间就结束了。",
          "outcome": "bad"
        },
        {
          "id": "coward",
          "type": "ending",
          "title": "未战先退",
          "text": "你一次都没有尝试就放弃了。沼泽没有等到你。",
          "outcome": "bad"
        },
        {
          "id": "tactical",
          "type": "ending",
          "title": "及时止损",
          "text": "你尝试过，也判断出了自己过不去。你带着经验撤退。",
          "outcome": "neutral"
        },
        {
          "id": "almost",
          "type": "ending",
          "title": "只差一步",
          "text": "你只试了一次就放弃，后来才知道那一步已经接近答案。",
          "outcome": "neutral"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 异常之井",
          "text": "你向井里投入一个未捕获的异常，井水退去，露出井底沉睡的原始异常。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。沼泽的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    },
    {
      "id": "strings",
      "title": "比较者之塔",
      "subtitle": "把 bb 和 a 按字典序排好",
      "difficulty": 5,
      "intro": "比较者之塔的电梯只按字典序运行。今天要排序的是 bb 和 a。",
      "color": "#EF9A9A",
      "companion": "空弦",
      "companion2": "空罐",
      "companion3": "空盒",
      "start": "start",
      "nodes": [
        {
          "id": "start",
          "type": "text",
          "title": "比较者之塔",
          "text": "比较者之塔的电梯只按字典序运行。今天要排序的是 bb 和 a。\n\n把 [\"bb\", \"a\"] 排序，输出 [a, bb]。\n\n你隐约注意到：塔顶有一扇写着空字符串的门。那东西不太对劲，但此刻没有时间细看。",
          "choices": [
            {
              "text": "排序字符串列表",
              "next": "code1",
              "setFlag": "help"
            },
            {
              "text": "先听对方把话说完，也许它不想伤人",
              "next": "code1",
              "setFlag": "mercy"
            },
            {
              "text": "把电梯按钮全按一遍",
              "next": "leaveCheck",
              "setFlag": "left"
            }
          ],
          "lines": [
            {
              "speaker": "旁白",
              "text": "比较者之塔的电梯只按字典序运行。今天要排序的是 bb 和 a。",
              "portrait": "narrator"
            },
            {
              "speaker": "空弦",
              "text": "你走前面，我断后。别回头，回头会浪费时间。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "不回头。你跟上。",
              "portrait": "hero"
            },
            {
              "speaker": "空罐",
              "text": "你们两个说完没有？机关可不会等我们。",
              "portrait": "companion2"
            },
            {
              "speaker": "空盒",
              "text": "我只说一次：这次别再相信墙上的字。",
              "portrait": "companion3"
            },
            {
              "speaker": "空弦",
              "text": "你每次都这么说。",
              "portrait": "companion"
            },
            {
              "speaker": "旁白",
              "text": "把 [\"bb\", \"a\"] 排序，输出 [a, bb]。\n\n你隐约注意到：塔顶有一扇写着空字符串的门。那东西不太对劲，但此刻没有时间细看。",
              "portrait": "narrator"
            }
          ]
        },
        {
          "id": "code1",
          "type": "code",
          "title": "字符串排序",
          "text": "时间开始流动。你必须在倒计时结束前完成这段程序。",
          "prompt": "把 [\"bb\", \"a\"] 排序后输出：[a, bb]。",
          "time": 270,
          "starter": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        // TODO\n    }\n}",
          "solution": "import java.util.*;\npublic class Main {\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>(Arrays.asList(\"bb\", \"a\"));\n        Collections.sort(list);\n        System.out.println(list);\n    }\n}",
          "mode": "output",
          "expected": "[a, bb]",
          "stdin": "",
          "calls": [],
          "success": "after1",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "after1",
          "type": "text",
          "title": "第 1 道门之后",
          "text": "第一段路已经通了，高塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "第一段路已经通了，高塔暂时安静下来。但你听见更深处还有声音。继续深入会面对第二道机关，也可能拿到更多；现在回头则能保住已经得到的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "空弦",
              "text": "我听见齿轮又转了一格。它还没打算放我们走。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "都走到这里了，没有空手回去的道理。",
              "portrait": "hero"
            },
            {
              "speaker": "空罐",
              "text": "别争了。再拖下去，门会自己关上。",
              "portrait": "companion2"
            },
            {
              "speaker": "空盒",
              "text": "我把后面的门卡住了。你们有十分钟。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "继续深入",
              "next": "code2"
            },
            {
              "text": "见好就收，带着当前成果离开",
              "next": "successCheck"
            }
          ]
        },
        {
          "id": "code2",
          "type": "code",
          "title": "第二道机关",
          "text": "第一道门刚刚打开，高塔深处又传来齿轮转动的声音。第二道机关启动了：它和之前那套逻辑不同，是一段独立的古老程序。",
          "prompt": "实现 max(int a, int b)，让 max(3, 7) 返回 7。",
          "time": 240,
          "starter": "public class Main {\n    static int max(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
          "solution": "public class Main {\n    static int max(int a, int b) {\n        return a > b ? a : b;\n    }\n}",
          "mode": "calls",
          "expected": "",
          "stdin": "",
          "calls": [
            {
              "name": "max",
              "invoke": "max(3,7)",
              "expect": "7"
            }
          ],
          "success": "final",
          "timeout": "timeoutCheck",
          "giveUp": "giveUpCheck"
        },
        {
          "id": "final",
          "type": "text",
          "title": "任务完成后的寂静",
          "text": "对方没有离开。高塔暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
          "lines": [
            {
              "speaker": "旁白",
              "text": "对方没有离开。高塔暂时安全，它在暗处看着你，等你做最后一个决定。远处还有一点微光，似乎在提醒你：这里还有别的东西。",
              "portrait": "narrator"
            },
            {
              "speaker": "空弦",
              "text": "机关停了。可它停得太干脆，像在等我们放松。",
              "portrait": "companion"
            },
            {
              "speaker": "你",
              "text": "先别庆祝。它把最后一道门留给我们，不会没有原因。",
              "portrait": "hero"
            },
            {
              "speaker": "空罐",
              "text": "别只看奖励。看看那点光背后是什么。",
              "portrait": "companion2"
            },
            {
              "speaker": "空盒",
              "text": "如果那点光是真的，就带它出来。",
              "portrait": "companion3"
            }
          ],
          "choices": [
            {
              "text": "收下奖励，离开",
              "next": "successCheck"
            },
            {
              "text": "放过对方，留它一命",
              "next": "successCheck",
              "setFlag": "mercy"
            },
            {
              "text": "塔顶有一扇写着空字符串的门",
              "next": "successCheck",
              "hidden": true,
              "setFlag": "secret"
            }
          ]
        },
        {
          "id": "successCheck",
          "type": "check",
          "title": "慈悲判定：完成之后",
          "text": "",
          "branches": [
            {
              "label": "隐藏｜按时完成 + 发现隐藏线索 + 剩余≥30秒",
              "when": {
                "outcome": "success",
                "flags": [
                  "secret"
                ],
                "minRemaining": 30
              },
              "next": "hidden"
            },
            {
              "label": "按时完成 + 放过对方",
              "when": {
                "outcome": "success",
                "flags": [
                  "mercy"
                ]
              },
              "next": "good"
            },
            {
              "label": "按时完成 + 没有放过对方",
              "when": {
                "outcome": "success",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "ruthless"
            }
          ],
          "defaultNext": "good"
        },
        {
          "id": "timeoutCheck",
          "type": "check",
          "title": "慈悲判定：超时之后",
          "text": "",
          "branches": [
            {
              "label": "超时 + 放过对方",
              "when": {
                "outcome": "timeout",
                "flags": [
                  "mercy"
                ]
              },
              "next": "forgiven"
            },
            {
              "label": "超时 + 没有放过对方",
              "when": {
                "outcome": "timeout",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "doomed"
            }
          ],
          "defaultNext": "doomed"
        },
        {
          "id": "giveUpCheck",
          "type": "check",
          "title": "慈悲判定：放弃之后",
          "text": "",
          "branches": [
            {
              "label": "放弃 + 放过对方",
              "when": {
                "outcome": "giveup",
                "flags": [
                  "mercy"
                ]
              },
              "next": "spared"
            },
            {
              "label": "放弃 + 没有放过对方",
              "when": {
                "outcome": "giveup",
                "notFlags": [
                  "mercy"
                ]
              },
              "next": "fled"
            }
          ],
          "defaultNext": "fled"
        },
        {
          "id": "leaveCheck",
          "type": "check",
          "title": "离开之后",
          "text": "",
          "branches": [
            {
              "label": "选择离开",
              "when": {
                "flags": [
                  "left"
                ]
              },
              "next": "neutral"
            }
          ],
          "defaultNext": "neutral"
        },
        {
          "id": "good",
          "type": "ending",
          "title": "留一条生路",
          "text": "你放过了对方，高塔也在最后一刻放过了你。",
          "outcome": "good"
        },
        {
          "id": "ruthless",
          "type": "ending",
          "title": "赢家",
          "text": "你完成了任务，也清除了所有阻碍，但高塔变得异常安静。",
          "outcome": "neutral"
        },
        {
          "id": "forgiven",
          "type": "ending",
          "title": "被原谅",
          "text": "你超时了，但对方记得你的仁慈，把你送出了高塔。",
          "outcome": "neutral"
        },
        {
          "id": "doomed",
          "type": "ending",
          "title": "没有回头路",
          "text": "你超时了，也没有留下任何余地。高塔关上了所有出口。",
          "outcome": "bad"
        },
        {
          "id": "spared",
          "type": "ending",
          "title": "被放过",
          "text": "你主动放弃，对方也没有追上来。高塔放你一条生路。",
          "outcome": "neutral"
        },
        {
          "id": "fled",
          "type": "ending",
          "title": "仓皇逃离",
          "text": "你放弃了，对方却没有放过你。你狼狈地逃出高塔。",
          "outcome": "bad"
        },
        {
          "id": "hidden",
          "type": "ending",
          "title": "隐藏结局 · 空字符串之门",
          "text": "你推开那扇门，门后是所有字符串在诞生之前的寂静。\n\n（隐藏结局已解锁）",
          "outcome": "hidden",
          "hidden": true
        },
        {
          "id": "neutral",
          "type": "ending",
          "title": "转身离开",
          "text": "你选择离开。高塔的故事没有因为你改变，只有风记得你来过。",
          "outcome": "neutral"
        }
      ]
    }
  ]
}
,"java8":{
  "id": "java8-main",
  "title": "Java 8 主线 · 星火协议",
  "subtitle": "八十四枚记忆碎片，一条故事线，一个好结局",
  "prologue": [
    {
      "speaker": "旁白",
      "text": "JVM 星核碎裂的那天，所有 Java 8 程序同时停在了第一行。十三座知识塔熄灭了十二座，最后一座只剩一行 Hello, World!。",
      "portrait": "narrator"
    },
    {
      "speaker": "阿灯",
      "text": "我是阿灯，星核的导航员。这位是铁砧，负责把碎掉的程序重新焊起来。",
      "portrait": "companion"
    },
    {
      "speaker": "铁砧",
      "text": "别把我写得那么粗鲁。我只是不喜欢半途而废的代码。",
      "portrait": "companion2"
    },
    {
      "speaker": "你",
      "text": "我是谁？",
      "portrait": "hero"
    },
    {
      "speaker": "阿灯",
      "text": "你是最后一个还记得 Hello, World! 的人。走吧，从第一枚碎片开始。",
      "portrait": "companion"
    }
  ],
  "ending": {
    "title": "星核重启",
    "outcome": "good",
    "text": "最后一枚碎片归位。JVM 星核重新亮起，十三座知识塔同时发出低鸣。空指针风暴散去，Java 8 的主线世界恢复了运行。",
    "lines": [
      {
        "speaker": "旁白",
        "text": "八十四枚记忆碎片全部归位。星核的第一次心跳，从 Hello, World! 开始。",
        "portrait": "narrator"
      },
      {
        "speaker": "阿灯",
        "text": "我们做到了。不是靠奇迹，是靠一行一行代码。",
        "portrait": "companion"
      },
      {
        "speaker": "铁砧",
        "text": "塔都亮了。连数据库区的地图也接回了主网。",
        "portrait": "companion2"
      },
      {
        "speaker": "你",
        "text": "Java 8 的主线，从现在开始继续运行。",
        "portrait": "hero"
      },
      {
        "speaker": "旁白",
        "text": "星核重启成功。这是一个好结局，也是唯一的结局。",
        "portrait": "narrator"
      }
    ]
  },
  "stages": [
    {
      "id": "hello",
      "lesson": "hello",
      "number": 1,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "Hello, World!",
      "reading": false,
      "task": "让程序在控制台输出一行：Hello, World!（注意大小写、逗号和感叹号；逗号后的空格不影响判定）。",
      "prompt": "修复「Hello, World!」这枚记忆碎片：让程序在控制台输出一行：Hello, World!（注意大小写、逗号和感叹号；逗号后的空格不影响判定）。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 System.out.println 输出 Hello, World!\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n",
      "mode": "output",
      "expected": "Hello, World!",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第1章 · Java 初体验。从第一行输出开始，建立写程序的手感",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「Java 初体验」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Hello, World!」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "print",
      "lesson": "print",
      "number": 2,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "print 与 println",
      "reading": false,
      "task": "用一条 print 和一条 println，让控制台先输出 Java，再在下一行输出 Quest。",
      "prompt": "修复「print 与 println」这枚记忆碎片：用一条 print 和一条 println，让控制台先输出 Java，再在下一行输出 Quest。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 第一行输出 Java，第二行输出 Quest\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Java\");\n        System.out.println();\n        System.out.println(\"Quest\");\n    }\n}\n",
      "mode": "output",
      "expected": "Java\nQuest",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「print 与 println」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "comments",
      "lesson": "comments",
      "number": 3,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "注释：写给人类看的说明",
      "reading": false,
      "task": "保留代码中的注释，让程序只输出一行：注释不会运行。",
      "prompt": "修复「注释：写给人类看的说明」这枚记忆碎片：保留代码中的注释，让程序只输出一行：注释不会运行。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // 这是一条单行注释\n        /* 这是一段\n           多行注释 */\n        // TODO: 输出 注释不会运行\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        // 这是一条单行注释\n        /* 这是一段\n           多行注释 */\n        System.out.println(\"注释不会运行\");\n    }\n}\n",
      "mode": "output",
      "expected": "注释不会运行",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「注释：写给人类看的说明」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "variables",
      "lesson": "variables",
      "number": 4,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "变量：给数据起名字",
      "reading": false,
      "task": "声明名字和年龄两个变量，把年龄加 1，然后输出：小明 19。",
      "prompt": "修复「变量：给数据起名字」这枚记忆碎片：声明名字和年龄两个变量，把年龄加 1，然后输出：小明 19。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        String name = \"小明\";\n        int age = 18;\n        // TODO: 让 age 变成 19，然后输出 name + 空格 + age\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        String name = \"小明\";\n        int age = 18;\n        age = age + 1;\n        System.out.println(name + \" \" + age);\n    }\n}\n",
      "mode": "output",
      "expected": "小明 19",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「变量：给数据起名字」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "types",
      "lesson": "types",
      "number": 5,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "八种基本数据类型",
      "reading": false,
      "task": "分别声明 byte、short、int、long、float、double、char、boolean 各一个变量，按示例格式输出。",
      "prompt": "修复「八种基本数据类型」这枚记忆碎片：分别声明 byte、short、int、long、float、double、char、boolean 各一个变量，按示例格式输出。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 声明 8 种基本类型并输出\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        byte b = 1;\n        short s = 2;\n        int i = 3;\n        long l = 4L;\n        float f = 1.5f;\n        double d = 2.5;\n        char c = 'A';\n        boolean ok = true;\n        System.out.println(b + \" \" + s + \" \" + i + \" \" + l);\n        System.out.println(f + \" \" + d + \" \" + c + \" \" + ok);\n    }\n}\n",
      "mode": "output",
      "expected": "1 2 3 4\n1.5 2.5 A true",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「八种基本数据类型」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "casting",
      "lesson": "casting",
      "number": 6,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "类型转换",
      "reading": false,
      "task": "把 int 转成 double，把 3.9 强转成 int，把字符 'A' 转成整数编码，输出：7.0 3 65。",
      "prompt": "修复「类型转换」这枚记忆碎片：把 int 转成 double，把 3.9 强转成 int，把字符 'A' 转成整数编码，输出：7.0 3 65。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 7;\n        // TODO: 转成 double；把 3.9 强转成 int；把 'A' 转成 int\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 7;\n        double d = a;\n        int b = (int) 3.9;\n        char c = 'A';\n        int code = c;\n        System.out.println(d + \" \" + b + \" \" + code);\n    }\n}\n",
      "mode": "output",
      "expected": "7.0 3 65",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「类型转换」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "constants",
      "lesson": "constants",
      "number": 7,
      "chapterNo": 1,
      "chapter": "Java 初体验",
      "title": "常量与命名规范",
      "reading": false,
      "task": "声明常量 PI = 3.14 和 MAX_SCORE = 100，输出：3.14 100。",
      "prompt": "修复「常量与命名规范」这枚记忆碎片：声明常量 PI = 3.14 和 MAX_SCORE = 100，输出：3.14 100。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 声明两个 final 常量并输出\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        final double PI = 3.14;\n        final int MAX_SCORE = 100;\n        System.out.println(PI + \" \" + MAX_SCORE);\n    }\n}\n",
      "mode": "output",
      "expected": "3.14 100",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「常量与命名规范」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "arithmetic",
      "lesson": "arithmetic",
      "number": 8,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "算术运算符",
      "reading": false,
      "task": "已知 a = 10、b = 3，依次输出它们的和、差、积、商、余数，用空格分隔。",
      "prompt": "修复「算术运算符」这枚记忆碎片：已知 a = 10、b = 3，依次输出它们的和、差、积、商、余数，用空格分隔。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        // TODO: 输出 和 差 积 商 余数\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        System.out.println((a + b) + \" \" + (a - b) + \" \" + (a * b) + \" \" + (a / b) + \" \" + (a % b));\n    }\n}\n",
      "mode": "output",
      "expected": "13 7 30 3 1",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第2章 · 运算符与输入。让程序会算、会比、会听你说话",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「运算符与输入」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「算术运算符」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "increment",
      "lesson": "increment",
      "number": 9,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "自增与自减",
      "reading": false,
      "task": "阅读并补全程序，输出 a、b、i 的值：5 7 7。",
      "prompt": "修复「自增与自减」这枚记忆碎片：阅读并补全程序，输出 a、b、i 的值：5 7 7。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        int a = i++;   // 先赋值再自增\n        int b = ++i;   // 先自增再赋值\n        // TODO: 输出 a、b、i\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int i = 5;\n        int a = i++;\n        int b = ++i;\n        System.out.println(a + \" \" + b + \" \" + i);\n    }\n}\n",
      "mode": "output",
      "expected": "5 7 7",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「自增与自减」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "assignment",
      "lesson": "assignment",
      "number": 10,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "赋值与复合赋值",
      "reading": false,
      "task": "从 x = 10 开始，依次执行 +=5、*=2、-=3、/=2，输出最终的 x。",
      "prompt": "修复「赋值与复合赋值」这枚记忆碎片：从 x = 10 开始，依次执行 +=5、*=2、-=3、/=2，输出最终的 x。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        // TODO: 依次 +=5、*=2、-=3、/=2\n\n        System.out.println(x);\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        x += 5;\n        x *= 2;\n        x -= 3;\n        x /= 2;\n        System.out.println(x);\n    }\n}\n",
      "mode": "output",
      "expected": "13",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「赋值与复合赋值」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "logic",
      "lesson": "logic",
      "number": 11,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "比较与逻辑运算",
      "reading": false,
      "task": "age = 20、hasTicket = true。输出三个结果：能进场（age>=18 且 hasTicket）、有优惠（age<18 或 hasTicket）、没票（!hasTicket）。",
      "prompt": "修复「比较与逻辑运算」这枚记忆碎片：age = 20、hasTicket = true。输出三个结果：能进场（age>=18 且 hasTicket）、有优惠（age<18 或 hasTicket）、没票（!hasTicket）。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasTicket = true;\n        // TODO: 输出三个布尔结果\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int age = 20;\n        boolean hasTicket = true;\n        System.out.println(age >= 18 && hasTicket);\n        System.out.println(age < 18 || hasTicket);\n        System.out.println(!hasTicket);\n    }\n}\n",
      "mode": "output",
      "expected": "true\ntrue\nfalse",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「比较与逻辑运算」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "bitwise",
      "lesson": "bitwise",
      "number": 12,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "位运算",
      "reading": false,
      "task": "计算 5 & 3、5 | 3、5 ^ 3、~5、5 << 1、5 >> 1，用空格输出。",
      "prompt": "修复「位运算」这枚记忆碎片：计算 5 & 3、5 | 3、5 ^ 3、~5、5 << 1、5 >> 1，用空格输出。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        // TODO: 输出 6 个位运算结果\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println((a & 3) + \" \" + (a | 3) + \" \" + (a ^ 3) + \" \" + (~a) + \" \" + (a << 1) + \" \" + (a >> 1));\n    }\n}\n",
      "mode": "output",
      "expected": "1 7 6 -6 10 2",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「位运算」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "ternary",
      "lesson": "ternary",
      "number": 13,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "三元运算符",
      "reading": false,
      "task": "实现 check(int n)：偶数返回“偶数”，奇数返回“奇数”。测试会调用 check(4) 和 check(7)。",
      "prompt": "修复「三元运算符」这枚记忆碎片：实现 check(int n)：偶数返回“偶数”，奇数返回“奇数”。测试会调用 check(4) 和 check(7)。",
      "starter": "public class Main {\n    static String check(int n) {\n        // TODO: 用三元运算符返回 偶数 或 奇数\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    static String check(int n) {\n        return n % 2 == 0 ? \"偶数\" : \"奇数\";\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "check",
          "invoke": "check(4)",
          "expect": "偶数"
        },
        {
          "name": "check",
          "invoke": "check(7)",
          "expect": "奇数"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「三元运算符」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "scanner",
      "lesson": "scanner",
      "number": 14,
      "chapterNo": 2,
      "chapter": "运算符与输入",
      "title": "控制台输入 Scanner",
      "reading": false,
      "task": "读取一行中的姓名和年龄（用空格分隔），输出：你好, 小明! 明年你 19 岁。",
      "prompt": "修复「控制台输入 Scanner」这枚记忆碎片：读取一行中的姓名和年龄（用空格分隔），输出：你好, 小明! 明年你 19 岁。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // TODO: 读取姓名和年龄，按格式输出\n\n        sc.close();\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String name = sc.next();\n        int age = sc.nextInt();\n        System.out.println(\"你好, \" + name + \"! 明年你 \" + (age + 1) + \" 岁。\");\n        sc.close();\n    }\n}",
      "mode": "output",
      "expected": "你好, 小明! 明年你 19 岁。",
      "stdin": "小明 18",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「控制台输入 Scanner」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "if",
      "lesson": "if",
      "number": 15,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "if 与 else",
      "reading": false,
      "task": "实现 max(int a, int b)，返回较大的那个数。测试会调用 max(3,7) 和 max(9,2)。",
      "prompt": "修复「if 与 else」这枚记忆碎片：实现 max(int a, int b)，返回较大的那个数。测试会调用 max(3,7) 和 max(9,2)。",
      "starter": "public class Main {\n    static int max(int a, int b) {\n        // TODO: 返回较大的数\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int max(int a, int b) {\n        if (a > b) {\n            return a;\n        } else {\n            return b;\n        }\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "max",
          "invoke": "max(3,7)",
          "expect": "7"
        },
        {
          "name": "max",
          "invoke": "max(9,2)",
          "expect": "9"
        },
        {
          "name": "max",
          "invoke": "max(5,5)",
          "expect": "5"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第3章 · 流程控制。让程序学会选择、重复和跳出",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「流程控制」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「if 与 else」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "else-if",
      "lesson": "else-if",
      "number": 16,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "else if 多分支",
      "reading": false,
      "task": "实现 grade(int score)：90 分及以上返回 A，80 分及以上返回 B，60 分及以上返回 C，其余返回 D。",
      "prompt": "修复「else if 多分支」这枚记忆碎片：实现 grade(int score)：90 分及以上返回 A，80 分及以上返回 B，60 分及以上返回 C，其余返回 D。",
      "starter": "public class Main {\n    static String grade(int score) {\n        // TODO: 按分数返回 A/B/C/D\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    static String grade(int score) {\n        if (score >= 90) return \"A\";\n        else if (score >= 80) return \"B\";\n        else if (score >= 60) return \"C\";\n        else return \"D\";\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "grade",
          "invoke": "grade(95)",
          "expect": "A"
        },
        {
          "name": "grade",
          "invoke": "grade(90)",
          "expect": "A"
        },
        {
          "name": "grade",
          "invoke": "grade(85)",
          "expect": "B"
        },
        {
          "name": "grade",
          "invoke": "grade(60)",
          "expect": "C"
        },
        {
          "name": "grade",
          "invoke": "grade(59)",
          "expect": "D"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「else if 多分支」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "switch",
      "lesson": "switch",
      "number": 17,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "switch 多路分支",
      "reading": false,
      "task": "实现 dayName(int day)：1 返回“周一”，2 返回“周二”，3 返回“周三”，其他返回“未知”。",
      "prompt": "修复「switch 多路分支」这枚记忆碎片：实现 dayName(int day)：1 返回“周一”，2 返回“周二”，3 返回“周三”，其他返回“未知”。",
      "starter": "public class Main {\n    static String dayName(int day) {\n        // TODO: 用 switch 返回对应星期\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    static String dayName(int day) {\n        switch (day) {\n            case 1: return \"周一\";\n            case 2: return \"周二\";\n            case 3: return \"周三\";\n            default: return \"未知\";\n        }\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "dayName",
          "invoke": "dayName(1)",
          "expect": "周一"
        },
        {
          "name": "dayName",
          "invoke": "dayName(3)",
          "expect": "周三"
        },
        {
          "name": "dayName",
          "invoke": "dayName(9)",
          "expect": "未知"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「switch 多路分支」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "for",
      "lesson": "for",
      "number": 18,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "for 循环",
      "reading": false,
      "task": "用 for 循环计算 1 到 100 的和，并输出结果。",
      "prompt": "修复「for 循环」这枚记忆碎片：用 for 循环计算 1 到 100 的和，并输出结果。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO: 用 for 累加 1 到 100\n\n        System.out.println(sum);\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n",
      "mode": "output",
      "expected": "5050",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「for 循环」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "while",
      "lesson": "while",
      "number": 19,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "while 循环",
      "reading": false,
      "task": "用 while 统计整数 12345 有多少位，输出 5。",
      "prompt": "修复「while 循环」这枚记忆碎片：用 while 统计整数 12345 有多少位，输出 5。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        // TODO: 用 while 数位数\n\n        System.out.println(count);\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int n = 12345;\n        int count = 0;\n        while (n > 0) {\n            count++;\n            n /= 10;\n        }\n        System.out.println(count);\n    }\n}\n",
      "mode": "output",
      "expected": "5",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「while 循环」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "do-while",
      "lesson": "do-while",
      "number": 20,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "do-while 循环",
      "reading": false,
      "task": "n 从 0 开始，用 do-while 让 n 至少加 1 次；即使条件是 n < 0，最后输出 1。",
      "prompt": "修复「do-while 循环」这枚记忆碎片：n 从 0 开始，用 do-while 让 n 至少加 1 次；即使条件是 n < 0，最后输出 1。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        // TODO: 用 do-while 让 n 至少加一次\n\n        System.out.println(n);\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int n = 0;\n        do {\n            n++;\n        } while (n < 0);\n        System.out.println(n);\n    }\n}\n",
      "mode": "output",
      "expected": "1",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「do-while 循环」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "break-continue",
      "lesson": "break-continue",
      "number": 21,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "break 与 continue",
      "reading": false,
      "task": "累加 1 到 10 中的偶数，但遇到 8 就停止。输出结果 20（2+4+6+8）。",
      "prompt": "修复「break 与 continue」这枚记忆碎片：累加 1 到 10 中的偶数，但遇到 8 就停止。输出结果 20（2+4+6+8）。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        // TODO: 跳过奇数，超过 8 就 break\n\n        System.out.println(sum);\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 != 0) continue;\n            if (i > 8) break;\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n",
      "mode": "output",
      "expected": "20",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「break 与 continue」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "nested-loops",
      "lesson": "nested-loops",
      "number": 22,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "嵌套循环",
      "reading": false,
      "task": "用嵌套循环输出三行星星：第一行 1 个 *，第二行 2 个，第三行 3 个。",
      "prompt": "修复「嵌套循环」这枚记忆碎片：用嵌套循环输出三行星星：第一行 1 个 *，第二行 2 个，第三行 3 个。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用嵌套循环打印三行星星\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(\"*\");\n            }\n            System.out.println();\n        }\n    }\n}\n",
      "mode": "output",
      "expected": "*\n**\n***",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「嵌套循环」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "multiplication-table",
      "lesson": "multiplication-table",
      "number": 23,
      "chapterNo": 3,
      "chapter": "流程控制",
      "title": "综合：九九乘法表",
      "reading": false,
      "task": "输出 1 到 5 的乘法表，每行一个换行，算式之间用一个空格分隔。",
      "prompt": "修复「综合：九九乘法表」这枚记忆碎片：输出 1 到 5 的乘法表，每行一个换行，算式之间用一个空格分隔。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 输出 1~5 的乘法表\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \"*\" + i + \"=\" + (i * j) + \" \");\n            }\n            System.out.println();\n        }\n    }\n}\n",
      "mode": "output",
      "expected": "1*1=1\n1*2=2 2*2=4\n1*3=3 2*3=6 3*3=9\n1*4=4 2*4=8 3*4=12 4*4=16\n1*5=5 2*5=10 3*5=15 4*5=20 5*5=25",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：九九乘法表」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "arrays",
      "lesson": "arrays",
      "number": 24,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "一维数组",
      "reading": false,
      "task": "创建数组 {5, 2, 9}，输出长度 3、第一个元素 5、最后一个元素 9。",
      "prompt": "修复「一维数组」这枚记忆碎片：创建数组 {5, 2, 9}，输出长度 3、第一个元素 5、最后一个元素 9。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 9};\n        // TODO: 输出 长度 第一个 最后一个\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int[] a = {5, 2, 9};\n        System.out.println(a.length + \" \" + a[0] + \" \" + a[a.length - 1]);\n    }\n}\n",
      "mode": "output",
      "expected": "3 5 9",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第4章 · 数组。把一串同类型数据排排坐",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「数组」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「一维数组」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "array-loop",
      "lesson": "array-loop",
      "number": 25,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "遍历数组与求最值",
      "reading": false,
      "task": "实现 sum(int[] arr) 和 max(int[] arr)，分别返回数组元素之和与最大值。",
      "prompt": "修复「遍历数组与求最值」这枚记忆碎片：实现 sum(int[] arr) 和 max(int[] arr)，分别返回数组元素之和与最大值。",
      "starter": "public class Main {\n    static int sum(int[] arr) {\n        // TODO\n        return 0;\n    }\n    static int max(int[] arr) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int sum(int[] arr) {\n        int s = 0;\n        for (int x : arr) s += x;\n        return s;\n    }\n    static int max(int[] arr) {\n        int m = arr[0];\n        for (int x : arr) if (x > m) m = x;\n        return m;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "sum",
          "invoke": "sum(new int[]{1,2,3})",
          "expect": "6"
        },
        {
          "name": "sum",
          "invoke": "sum(new int[]{10,-2,5})",
          "expect": "13"
        },
        {
          "name": "max",
          "invoke": "max(new int[]{3,9,2})",
          "expect": "9"
        },
        {
          "name": "max",
          "invoke": "max(new int[]{-5,-1,-9})",
          "expect": "-1"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「遍历数组与求最值」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "array-2d",
      "lesson": "array-2d",
      "number": 26,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "二维数组",
      "reading": false,
      "task": "已知 scores = {{90,85},{88,92}}，输出所有元素之和 355，以及 scores[1][0] 的值 88。",
      "prompt": "修复「二维数组」这枚记忆碎片：已知 scores = {{90,85},{88,92}}，输出所有元素之和 355，以及 scores[1][0] 的值 88。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        int[][] scores = {{90, 85}, {88, 92}};\n        // TODO: 求和并输出\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        int[][] scores = {{90, 85}, {88, 92}};\n        int sum = 0;\n        for (int[] row : scores) {\n            for (int x : row) sum += x;\n        }\n        System.out.println(sum + \" \" + scores[1][0]);\n    }\n}\n",
      "mode": "output",
      "expected": "355 88",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「二维数组」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "arrays-tools",
      "lesson": "arrays-tools",
      "number": 27,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "Arrays 工具类",
      "reading": false,
      "task": "对 {3,1,2} 排序，输出排序后的内容和 2 的下标（1）。",
      "prompt": "修复「Arrays 工具类」这枚记忆碎片：对 {3,1,2} 排序，输出排序后的内容和 2 的下标（1）。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 2};\n        // TODO: 排序并输出\n\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 2};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a) + \" \" + Arrays.binarySearch(a, 2));\n    }\n}",
      "mode": "output",
      "expected": "[1, 2, 3] 1",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Arrays 工具类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "varargs",
      "lesson": "varargs",
      "number": 28,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "可变参数",
      "reading": false,
      "task": "实现 sum(int... nums)，返回所有参数的和。测试会调用 sum(1,2,3,4) 和 sum()。",
      "prompt": "修复「可变参数」这枚记忆碎片：实现 sum(int... nums)，返回所有参数的和。测试会调用 sum(1,2,3,4) 和 sum()。",
      "starter": "public class Main {\n    static int sum(int... nums) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int sum(int... nums) {\n        int s = 0;\n        for (int n : nums) s += n;\n        return s;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "sum",
          "invoke": "sum(1,2,3,4)",
          "expect": "10"
        },
        {
          "name": "sum",
          "invoke": "sum()",
          "expect": "0"
        },
        {
          "name": "sum",
          "invoke": "sum(7)",
          "expect": "7"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「可变参数」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "score-stats",
      "lesson": "score-stats",
      "number": 29,
      "chapterNo": 4,
      "chapter": "数组",
      "title": "综合：成绩统计",
      "reading": false,
      "task": "实现 stats(int[] scores)，返回格式：最高:90 最低:60 平均:75.0。测试数组为 {60,80,90,70}。",
      "prompt": "修复「综合：成绩统计」这枚记忆碎片：实现 stats(int[] scores)，返回格式：最高:90 最低:60 平均:75.0。测试数组为 {60,80,90,70}。",
      "starter": "public class Main {\n    static String stats(int[] scores) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    static String stats(int[] scores) {\n        int sum = 0, max = scores[0], min = scores[0];\n        for (int x : scores) {\n            sum += x;\n            if (x > max) max = x;\n            if (x < min) min = x;\n        }\n        double avg = (double) sum / scores.length;\n        return \"最高:\" + max + \" 最低:\" + min + \" 平均:\" + avg;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "stats",
          "invoke": "stats(new int[]{60,80,90,70})",
          "expect": "最高:90 最低:60 平均:75.0"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：成绩统计」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "methods",
      "lesson": "methods",
      "number": 30,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "方法定义与调用",
      "reading": false,
      "task": "实现 square(int n)，返回 n 的平方。测试会调用 square(5) 和 square(-3)。",
      "prompt": "修复「方法定义与调用」这枚记忆碎片：实现 square(int n)，返回 n 的平方。测试会调用 square(5) 和 square(-3)。",
      "starter": "public class Main {\n    static int square(int n) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int square(int n) {\n        return n * n;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "square",
          "invoke": "square(5)",
          "expect": "25"
        },
        {
          "name": "square",
          "invoke": "square(-3)",
          "expect": "9"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第5章 · 方法。把代码拆成可复用的小积木",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「方法」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「方法定义与调用」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "params-return",
      "lesson": "params-return",
      "number": 31,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "参数与返回值",
      "reading": false,
      "task": "实现 area(double r)，用 3.14 作为圆周率，返回圆面积。测试 r=2 时返回 12.56。",
      "prompt": "修复「参数与返回值」这枚记忆碎片：实现 area(double r)，用 3.14 作为圆周率，返回圆面积。测试 r=2 时返回 12.56。",
      "starter": "public class Main {\n    static double area(double r) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static double area(double r) {\n        return 3.14 * r * r;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "area",
          "invoke": "area(2)",
          "expect": "12.56"
        },
        {
          "name": "area",
          "invoke": "area(1)",
          "expect": "3.14"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「参数与返回值」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "overload",
      "lesson": "overload",
      "number": 32,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "方法重载",
      "reading": false,
      "task": "实现三个 add 重载：两个 int、三个 int、两个 double。测试会分别调用。",
      "prompt": "修复「方法重载」这枚记忆碎片：实现三个 add 重载：两个 int、三个 int、两个 double。测试会分别调用。",
      "starter": "public class Main {\n    static int add(int a, int b) {\n        return 0;\n    }\n    static int add(int a, int b, int c) {\n        return 0;\n    }\n    static double add(double a, double b) {\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int add(int a, int b) {\n        return a + b;\n    }\n    static int add(int a, int b, int c) {\n        return a + b + c;\n    }\n    static double add(double a, double b) {\n        return a + b;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "add2",
          "invoke": "add(2,3)",
          "expect": "5"
        },
        {
          "name": "add3",
          "invoke": "add(1,2,3)",
          "expect": "6"
        },
        {
          "name": "addd",
          "invoke": "add(1.5,2.5)",
          "expect": "4.0"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「方法重载」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "recursion",
      "lesson": "recursion",
      "number": 33,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "递归",
      "reading": false,
      "task": "实现 factorial(int n) 和 fib(int n)，分别返回阶乘和斐波那契数列第 n 项。",
      "prompt": "修复「递归」这枚记忆碎片：实现 factorial(int n) 和 fib(int n)，分别返回阶乘和斐波那契数列第 n 项。",
      "starter": "public class Main {\n    static int factorial(int n) {\n        // TODO\n        return 0;\n    }\n    static int fib(int n) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    static int fib(int n) {\n        if (n <= 1) return n;\n        return fib(n - 1) + fib(n - 2);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "factorial",
          "invoke": "factorial(5)",
          "expect": "120"
        },
        {
          "name": "factorial",
          "invoke": "factorial(0)",
          "expect": "1"
        },
        {
          "name": "fib",
          "invoke": "fib(6)",
          "expect": "8"
        },
        {
          "name": "fib",
          "invoke": "fib(10)",
          "expect": "55"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「递归」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "prime",
      "lesson": "prime",
      "number": 34,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "方法练习：素数判断",
      "reading": false,
      "task": "实现 isPrime(int n)。测试会检查 2、9、13、1。",
      "prompt": "修复「方法练习：素数判断」这枚记忆碎片：实现 isPrime(int n)。测试会检查 2、9、13、1。",
      "starter": "public class Main {\n    static boolean isPrime(int n) {\n        // TODO\n        return false;\n    }\n}",
      "solution": "public class Main {\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        for (int i = 2; i * i <= n; i++) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "prime2",
          "invoke": "isPrime(2)",
          "expect": "true"
        },
        {
          "name": "prime9",
          "invoke": "isPrime(9)",
          "expect": "false"
        },
        {
          "name": "prime13",
          "invoke": "isPrime(13)",
          "expect": "true"
        },
        {
          "name": "prime1",
          "invoke": "isPrime(1)",
          "expect": "false"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「方法练习：素数判断」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "calculator",
      "lesson": "calculator",
      "number": 35,
      "chapterNo": 5,
      "chapter": "方法",
      "title": "综合：简易计算器",
      "reading": false,
      "task": "实现 calc(int a, String op, int b)：支持 +、-、*、/；除数为 0 返回 0；未知运算符返回 -1。",
      "prompt": "修复「综合：简易计算器」这枚记忆碎片：实现 calc(int a, String op, int b)：支持 +、-、*、/；除数为 0 返回 0；未知运算符返回 -1。",
      "starter": "public class Main {\n    static int calc(int a, String op, int b) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int calc(int a, String op, int b) {\n        if (op.equals(\"+\")) return a + b;\n        if (op.equals(\"-\")) return a - b;\n        if (op.equals(\"*\")) return a * b;\n        if (op.equals(\"/\")) return b == 0 ? 0 : a / b;\n        return -1;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "calc+",
          "invoke": "calc(6,\"+\",3)",
          "expect": "9"
        },
        {
          "name": "calc-",
          "invoke": "calc(6,\"-\",3)",
          "expect": "3"
        },
        {
          "name": "calc*",
          "invoke": "calc(6,\"*\",3)",
          "expect": "18"
        },
        {
          "name": "calc/",
          "invoke": "calc(6,\"/\",3)",
          "expect": "2"
        },
        {
          "name": "calc0",
          "invoke": "calc(6,\"/\",0)",
          "expect": "0"
        },
        {
          "name": "calc?",
          "invoke": "calc(6,\"?\",3)",
          "expect": "-1"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：简易计算器」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "class-object",
      "lesson": "class-object",
      "number": 36,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "类与对象",
      "reading": false,
      "task": "定义 Person 类：字段 name、age，构造方法给它们赋值，introduce() 返回“小明 18”。测试会用 new Person(\"小明\",18)。",
      "prompt": "修复「类与对象」这枚记忆碎片：定义 Person 类：字段 name、age，构造方法给它们赋值，introduce() 返回“小明 18”。测试会用 new Person(\"小明\",18)。",
      "starter": "public class Main {\n}\n\nclass Person {\n    // TODO: 字段、构造方法、introduce()\n}",
      "solution": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    String introduce() {\n        return name + \" \" + age;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "introduce",
          "invoke": "new Person(\"小明\",18).introduce()",
          "expect": "小明 18"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第6章 · 面向对象基础。用类和对象描述真实世界",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「面向对象基础」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「类与对象」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "encapsulation",
      "lesson": "encapsulation",
      "number": 37,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "封装与 private",
      "reading": false,
      "task": "实现 Account：private balance；deposit(int) 只接受正数并返回余额；withdraw(int) 余额不足时返回当前余额；getBalance()。",
      "prompt": "修复「封装与 private」这枚记忆碎片：实现 Account：private balance；deposit(int) 只接受正数并返回余额；withdraw(int) 余额不足时返回当前余额；getBalance()。",
      "starter": "public class Main {\n}\n\nclass Account {\n    private int balance;\n    int deposit(int n) {\n        // TODO\n        return balance;\n    }\n    int withdraw(int n) {\n        // TODO\n        return balance;\n    }\n    int getBalance() {\n        return balance;\n    }\n}",
      "solution": "public class Main {\n}\n\nclass Account {\n    private int balance;\n    int deposit(int n) {\n        if (n > 0) balance += n;\n        return balance;\n    }\n    int withdraw(int n) {\n        if (n > 0 && n <= balance) balance -= n;\n        return balance;\n    }\n    int getBalance() {\n        return balance;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "deposit",
          "invoke": "new Account().deposit(100)",
          "expect": "100"
        },
        {
          "name": "deposit-neg",
          "invoke": "new Account().deposit(-5)",
          "expect": "0"
        },
        {
          "name": "withdraw",
          "invoke": "new Account().withdraw(50)",
          "expect": "0"
        },
        {
          "name": "balance",
          "invoke": "new Account().getBalance()",
          "expect": "0"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「封装与 private」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "constructor",
      "lesson": "constructor",
      "number": 38,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "构造方法",
      "reading": false,
      "task": "实现 Point：无参构造调用 this(0,0)，有参构造保存 x、y，show() 返回“x,y”。",
      "prompt": "修复「构造方法」这枚记忆碎片：实现 Point：无参构造调用 this(0,0)，有参构造保存 x、y，show() 返回“x,y”。",
      "starter": "public class Main {\n}\n\nclass Point {\n    int x, y;\n    Point() {\n        // TODO: this(0,0)\n    }\n    Point(int x, int y) {\n        // TODO\n    }\n    String show() {\n        return x + \",\" + y;\n    }\n}",
      "solution": "public class Main {\n}\n\nclass Point {\n    int x, y;\n    Point() {\n        this(0, 0);\n    }\n    Point(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n    String show() {\n        return x + \",\" + y;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "default",
          "invoke": "new Point().show()",
          "expect": "0,0"
        },
        {
          "name": "args",
          "invoke": "new Point(2,3).show()",
          "expect": "2,3"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「构造方法」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "this",
      "lesson": "this",
      "number": 39,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "this 关键字",
      "reading": false,
      "task": "实现 Student：字段 name、score；betterThan(Student other) 用 this.score 和 other.score 比较。",
      "prompt": "修复「this 关键字」这枚记忆碎片：实现 Student：字段 name、score；betterThan(Student other) 用 this.score 和 other.score 比较。",
      "starter": "public class Main {\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        // TODO: 用 this 赋值\n    }\n    boolean betterThan(Student other) {\n        // TODO\n        return false;\n    }\n}",
      "solution": "public class Main {\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n    boolean betterThan(Student other) {\n        return this.score > other.score;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "better",
          "invoke": "new Student(\"a\",90).betterThan(new Student(\"b\",80))",
          "expect": "true"
        },
        {
          "name": "worse",
          "invoke": "new Student(\"a\",70).betterThan(new Student(\"b\",80))",
          "expect": "false"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「this 关键字」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "static",
      "lesson": "static",
      "number": 40,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "static 静态成员",
      "reading": false,
      "task": "实现 Counter：static count；每 new 一个对象 count 加 1；static getCount() 返回总数。main 里创建两个对象后输出 2。",
      "prompt": "修复「static 静态成员」这枚记忆碎片：实现 Counter：static count；每 new 一个对象 count 加 1；static getCount() 返回总数。main 里创建两个对象后输出 2。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        // TODO: 输出 Counter.getCount()\n\n    }\n}\n\nclass Counter {\n    static int count;\n    Counter() {\n        // TODO: count++\n    }\n    static int getCount() {\n        return count;\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        new Counter();\n        new Counter();\n        System.out.println(Counter.getCount());\n    }\n}\n\nclass Counter {\n    static int count;\n    Counter() {\n        count++;\n    }\n    static int getCount() {\n        return count;\n    }\n}",
      "mode": "output",
      "expected": "2",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「static 静态成员」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "inheritance",
      "lesson": "inheritance",
      "number": 41,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "继承",
      "reading": false,
      "task": "定义 Animal(name, sound()) 和 Dog extends Animal，Dog 构造时用 super(name)，sound() 返回“Woof”。",
      "prompt": "修复「继承」这枚记忆碎片：定义 Animal(name, sound()) 和 Dog extends Animal，Dog 构造时用 super(name)，sound() 返回“Woof”。",
      "starter": "public class Main {\n}\n\nclass Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n    }\n    String sound() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        // TODO: super(name)\n    }\n    String sound() {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n}\n\nclass Animal {\n    String name;\n    Animal(String name) {\n        this.name = name;\n    }\n    String sound() {\n        return \"...\";\n    }\n}\n\nclass Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n    String sound() {\n        return \"Woof\";\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "sound",
          "invoke": "new Dog(\"d\").sound()",
          "expect": "Woof"
        },
        {
          "name": "name",
          "invoke": "new Dog(\"d\").name",
          "expect": "d"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「继承」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "override",
      "lesson": "override",
      "number": 42,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "方法重写",
      "reading": false,
      "task": "Shape.area() 返回 0，describe() 返回“Shape ”+area()；Circle 重写 area() 返回 3.14*r*r。测试 Circle(2).describe()。",
      "prompt": "修复「方法重写」这枚记忆碎片：Shape.area() 返回 0，describe() 返回“Shape ”+area()；Circle 重写 area() 返回 3.14*r*r。测试 Circle(2).describe()。",
      "starter": "public class Main {\n}\n\nclass Shape {\n    double area() {\n        return 0;\n    }\n    String describe() {\n        return \"Shape \" + area();\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n    Circle(double r) {\n        this.r = r;\n    }\n    // TODO: 重写 area()\n}",
      "solution": "public class Main {\n}\n\nclass Shape {\n    double area() {\n        return 0;\n    }\n    String describe() {\n        return \"Shape \" + area();\n    }\n}\n\nclass Circle extends Shape {\n    double r;\n    Circle(double r) {\n        this.r = r;\n    }\n    @Override\n    double area() {\n        return 3.14 * r * r;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "describe",
          "invoke": "new Circle(2).describe()",
          "expect": "Shape 12.56"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「方法重写」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "polymorphism",
      "lesson": "polymorphism",
      "number": 43,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "多态",
      "reading": false,
      "task": "定义 Animal、Dog、Cat；用 Animal[] 存放一只狗和一只猫，循环输出它们的 sound()。",
      "prompt": "修复「多态」这枚记忆碎片：定义 Animal、Dog、Cat；用 Animal[] 存放一只狗和一只猫，循环输出它们的 sound()。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        Animal[] zoo = { new Dog(), new Cat() };\n        // TODO: 循环输出 sound()\n\n    }\n}\n\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n    String sound() { return \"Woof\"; }\n}\nclass Cat extends Animal {\n    String sound() { return \"Meow\"; }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        Animal[] zoo = { new Dog(), new Cat() };\n        for (Animal a : zoo) {\n            System.out.print(a.sound());\n        }\n    }\n}\n\nclass Animal {\n    String sound() { return \"...\"; }\n}\nclass Dog extends Animal {\n    String sound() { return \"Woof\"; }\n}\nclass Cat extends Animal {\n    String sound() { return \"Meow\"; }\n}",
      "mode": "output",
      "expected": "WoofMeow",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「多态」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "library",
      "lesson": "library",
      "number": 44,
      "chapterNo": 6,
      "chapter": "面向对象基础",
      "title": "综合：迷你图书管理",
      "reading": false,
      "task": "实现 Book(title, price)、Library.add(Book)、Library.find(String)、Library.count()；main 添加两本书并输出数量与 Java 书价格。",
      "prompt": "修复「综合：迷你图书管理」这枚记忆碎片：实现 Book(title, price)、Library.add(Book)、Library.find(String)、Library.count()；main 添加两本书并输出数量与 Java 书价格。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", 59));\n        lib.add(new Book(\"Python\", 49));\n        // TODO: 输出 2 59\n\n    }\n}\n\nclass Book {\n    String title;\n    int price;\n    Book(String title, int price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Library {\n    Book[] books = new Book[10];\n    int count;\n    void add(Book b) {\n        // TODO\n    }\n    Book find(String title) {\n        // TODO\n        return null;\n    }\n    int count() {\n        return count;\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", 59));\n        lib.add(new Book(\"Python\", 49));\n        System.out.println(lib.count() + \" \" + lib.find(\"Java\").price);\n    }\n}\n\nclass Book {\n    String title;\n    int price;\n    Book(String title, int price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Library {\n    Book[] books = new Book[10];\n    int count;\n    void add(Book b) {\n        books[count] = b;\n        count++;\n    }\n    Book find(String title) {\n        for (int i = 0; i < count; i++) {\n            if (books[i].title.equals(title)) return books[i];\n        }\n        return null;\n    }\n    int count() {\n        return count;\n    }\n}",
      "mode": "output",
      "expected": "2 59",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：迷你图书管理」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "abstract",
      "lesson": "abstract",
      "number": 45,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "抽象类",
      "reading": false,
      "task": "抽象类 Shape 有抽象方法 area() 和普通方法 describe()；Square 继承并实现 area()。测试 Square(2).describe() 返回“面积:4.0”。",
      "prompt": "修复「抽象类」这枚记忆碎片：抽象类 Shape 有抽象方法 area() 和普通方法 describe()；Square 继承并实现 area()。测试 Square(2).describe() 返回“面积:4.0”。",
      "starter": "public class Main {\n}\n\nabstract class Shape {\n    abstract double area();\n    String describe() {\n        return \"面积:\" + area();\n    }\n}\n\nclass Square extends Shape {\n    double side;\n    Square(double side) {\n        this.side = side;\n    }\n    // TODO: 实现 area()\n}",
      "solution": "public class Main {\n}\n\nabstract class Shape {\n    abstract double area();\n    String describe() {\n        return \"面积:\" + area();\n    }\n}\n\nclass Square extends Shape {\n    double side;\n    Square(double side) {\n        this.side = side;\n    }\n    double area() {\n        return side * side;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "describe",
          "invoke": "new Square(2).describe()",
          "expect": "面积:4.0"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第7章 · 面向对象进阶。抽象、接口、枚举与记录类",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「面向对象进阶」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「抽象类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "interface",
      "lesson": "interface",
      "number": 46,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "接口",
      "reading": false,
      "task": "定义 Greeter 接口和 ChineseGreeter 实现类，greet(name) 返回“你好, name”。测试 greet(\"Java\")。",
      "prompt": "修复「接口」这枚记忆碎片：定义 Greeter 接口和 ChineseGreeter 实现类，greet(name) 返回“你好, name”。测试 greet(\"Java\")。",
      "starter": "public class Main {\n}\n\ninterface Greeter {\n    String greet(String name);\n}\n\nclass ChineseGreeter implements Greeter {\n    // TODO: 实现 greet\n}",
      "solution": "public class Main {\n}\n\ninterface Greeter {\n    String greet(String name);\n}\n\nclass ChineseGreeter implements Greeter {\n    public String greet(String name) {\n        return \"你好, \" + name;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "greet",
          "invoke": "new ChineseGreeter().greet(\"Java\")",
          "expect": "你好, Java"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「接口」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "default-method",
      "lesson": "default-method",
      "number": 47,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "接口默认方法",
      "reading": false,
      "task": "接口 Animal 有 name() 和 default hello()；Cat 实现 name() 返回“Cat”。测试 new Cat().hello() 返回“I am Cat”。",
      "prompt": "修复「接口默认方法」这枚记忆碎片：接口 Animal 有 name() 和 default hello()；Cat 实现 name() 返回“Cat”。测试 new Cat().hello() 返回“I am Cat”。",
      "starter": "public class Main {\n}\n\ninterface Animal {\n    String name();\n    default String hello() {\n        // TODO: 返回 I am + name()\n        return \"\";\n    }\n}\n\nclass Cat implements Animal {\n    public String name() {\n        return \"Cat\";\n    }\n}",
      "solution": "public class Main {\n}\n\ninterface Animal {\n    String name();\n    default String hello() {\n        return \"I am \" + name();\n    }\n}\n\nclass Cat implements Animal {\n    public String name() {\n        return \"Cat\";\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "hello",
          "invoke": "new Cat().hello()",
          "expect": "I am Cat"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「接口默认方法」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "anonymous",
      "lesson": "anonymous",
      "number": 48,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "匿名内部类",
      "reading": false,
      "task": "用匿名内部类实现 Greeter，让 greet(\"Java\") 返回“Hi Java”，并输出它。",
      "prompt": "修复「匿名内部类」这枚记忆碎片：用匿名内部类实现 Greeter，让 greet(\"Java\") 返回“Hi Java”，并输出它。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            // TODO: 实现 greet\n        };\n        System.out.println(g.greet(\"Java\"));\n    }\n}\n\ninterface Greeter {\n    String greet(String name);\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        Greeter g = new Greeter() {\n            public String greet(String name) {\n                return \"Hi \" + name;\n            }\n        };\n        System.out.println(g.greet(\"Java\"));\n    }\n}\n\ninterface Greeter {\n    String greet(String name);\n}",
      "mode": "output",
      "expected": "Hi Java",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「匿名内部类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "enum",
      "lesson": "enum",
      "number": 49,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "枚举",
      "reading": false,
      "task": "定义 Color { RED, GREEN, BLUE }，测试 name()、ordinal() 和 values().length。",
      "prompt": "修复「枚举」这枚记忆碎片：定义 Color { RED, GREEN, BLUE }，测试 name()、ordinal() 和 values().length。",
      "starter": "public class Main {\n}\n\nenum Color {\n    RED\n    // TODO: 再补上 GREEN 和 BLUE，注意逗号\n}",
      "solution": "public class Main {\n}\n\nenum Color {\n    RED, GREEN, BLUE\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "name",
          "invoke": "Color.RED.name()",
          "expect": "RED"
        },
        {
          "name": "ordinal",
          "invoke": "Color.GREEN.ordinal()",
          "expect": "1"
        },
        {
          "name": "values",
          "invoke": "Color.values().length",
          "expect": "3"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「枚举」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "payment",
      "lesson": "payment",
      "number": 50,
      "chapterNo": 7,
      "chapter": "面向对象进阶",
      "title": "综合：支付系统",
      "reading": false,
      "task": "定义 PayMethod 接口、Alipay 和 WeChat 实现；main 中用接口数组依次输出“支付宝:100”和“微信:100”。",
      "prompt": "修复「综合：支付系统」这枚记忆碎片：定义 PayMethod 接口、Alipay 和 WeChat 实现；main 中用接口数组依次输出“支付宝:100”和“微信:100”。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        PayMethod[] methods = { new Alipay(), new WeChat() };\n        // TODO: 循环输出 pay(100)\n\n    }\n}\n\ninterface PayMethod {\n    String pay(int amount);\n}\n\nclass Alipay implements PayMethod {\n    public String pay(int amount) {\n        // TODO\n        return \"\";\n    }\n}\n\nclass WeChat implements PayMethod {\n    public String pay(int amount) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        PayMethod[] methods = { new Alipay(), new WeChat() };\n        for (PayMethod m : methods) {\n            System.out.print(m.pay(100) + \" \");\n        }\n    }\n}\n\ninterface PayMethod {\n    String pay(int amount);\n}\n\nclass Alipay implements PayMethod {\n    public String pay(int amount) {\n        return \"支付宝:\" + amount;\n    }\n}\n\nclass WeChat implements PayMethod {\n    public String pay(int amount) {\n        return \"微信:\" + amount;\n    }\n}",
      "mode": "output",
      "expected": "支付宝:100 微信:100 ",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：支付系统」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "string",
      "lesson": "string",
      "number": 51,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "String 常用方法",
      "reading": false,
      "task": "实现 shout(String s)：去掉首尾空格、转大写，并在末尾加感叹号。测试 shout(\"  hello  \")。",
      "prompt": "修复「String 常用方法」这枚记忆碎片：实现 shout(String s)：去掉首尾空格、转大写，并在末尾加感叹号。测试 shout(\"  hello  \")。",
      "starter": "public class Main {\n    static String shout(String s) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "public class Main {\n    static String shout(String s) {\n        return s.trim().toUpperCase() + \"!\";\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "shout",
          "invoke": "shout(\"  hello  \")",
          "expect": "HELLO!"
        },
        {
          "name": "shout2",
          "invoke": "shout(\"Java\")",
          "expect": "JAVA!"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第8章 · 核心类库。String、集合、工具类，日常开发的主力",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「核心类库」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「String 常用方法」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "stringbuilder",
      "lesson": "stringbuilder",
      "number": 52,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "StringBuilder",
      "reading": false,
      "task": "实现 join(String[] words)：用 StringBuilder 把单词用“-”连接起来。测试 {\"a\",\"b\",\"c\"}。",
      "prompt": "修复「StringBuilder」这枚记忆碎片：实现 join(String[] words)：用 StringBuilder 把单词用“-”连接起来。测试 {\"a\",\"b\",\"c\"}。",
      "starter": "public class Main {\n    static String join(String[] words) {\n        StringBuilder sb = new StringBuilder();\n        // TODO\n        return sb.toString();\n    }\n}",
      "solution": "public class Main {\n    static String join(String[] words) {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < words.length; i++) {\n            if (i > 0) sb.append(\"-\");\n            sb.append(words[i]);\n        }\n        return sb.toString();\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "join",
          "invoke": "join(new String[]{\"a\",\"b\",\"c\"})",
          "expect": "a-b-c"
        },
        {
          "name": "one",
          "invoke": "join(new String[]{\"x\"})",
          "expect": "x"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「StringBuilder」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "math",
      "lesson": "math",
      "number": 53,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "Math 工具类",
      "reading": false,
      "task": "实现 hypotenuse(double a, double b)，返回直角三角形斜边，使用 Math.sqrt。测试 3、4 返回 5.0。",
      "prompt": "修复「Math 工具类」这枚记忆碎片：实现 hypotenuse(double a, double b)，返回直角三角形斜边，使用 Math.sqrt。测试 3、4 返回 5.0。",
      "starter": "public class Main {\n    static double hypotenuse(double a, double b) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static double hypotenuse(double a, double b) {\n        return Math.sqrt(a * a + b * b);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "3-4",
          "invoke": "hypotenuse(3,4)",
          "expect": "5.0"
        },
        {
          "name": "6-8",
          "invoke": "hypotenuse(6,8)",
          "expect": "10.0"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Math 工具类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "wrapper",
      "lesson": "wrapper",
      "number": 54,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "包装类与自动装箱",
      "reading": false,
      "task": "实现 parseAdd(String a, String b)，把两个字符串转成 int 后相加。测试 \"12\" 和 \"30\"。",
      "prompt": "修复「包装类与自动装箱」这枚记忆碎片：实现 parseAdd(String a, String b)，把两个字符串转成 int 后相加。测试 \"12\" 和 \"30\"。",
      "starter": "public class Main {\n    static int parseAdd(String a, String b) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int parseAdd(String a, String b) {\n        return Integer.parseInt(a) + Integer.parseInt(b);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "12+30",
          "invoke": "parseAdd(\"12\",\"30\")",
          "expect": "42"
        },
        {
          "name": "1+2",
          "invoke": "parseAdd(\"1\",\"2\")",
          "expect": "3"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「包装类与自动装箱」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "object-equals",
      "lesson": "object-equals",
      "number": 55,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "Object 与 equals/hashCode",
      "reading": false,
      "task": "实现 Person.equals：姓名和年龄都相同返回 true；并重写 hashCode、toString。测试两个内容相同的 Person。",
      "prompt": "修复「Object 与 equals/hashCode」这枚记忆碎片：实现 Person.equals：姓名和年龄都相同返回 true；并重写 hashCode、toString。测试两个内容相同的 Person。",
      "starter": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    // TODO: equals、hashCode、toString\n}",
      "solution": "public class Main {\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public boolean equals(Object o) {\n        if (!(o instanceof Person)) return false;\n        Person p = (Person) o;\n        return name.equals(p.name) && age == p.age;\n    }\n    public int hashCode() {\n        return name.hashCode() * 31 + age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "equals",
          "invoke": "new Person(\"a\",18).equals(new Person(\"a\",18))",
          "expect": "true"
        },
        {
          "name": "not-equals",
          "invoke": "new Person(\"a\",18).equals(new Person(\"a\",19))",
          "expect": "false"
        },
        {
          "name": "toString",
          "invoke": "new Person(\"a\",18).toString()",
          "expect": "a:18"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Object 与 equals/hashCode」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "arraylist",
      "lesson": "arraylist",
      "number": 56,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "ArrayList 动态数组",
      "reading": false,
      "task": "实现 evens(List<Integer> nums)，返回其中所有偶数组成的新 List。测试 [1,2,3,4]。",
      "prompt": "修复「ArrayList 动态数组」这枚记忆碎片：实现 evens(List<Integer> nums)，返回其中所有偶数组成的新 List。测试 [1,2,3,4]。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static List<Integer> evens(List<Integer> nums) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static List<Integer> evens(List<Integer> nums) {\n        List<Integer> out = new ArrayList<>();\n        for (int n : nums) {\n            if (n % 2 == 0) out.add(n);\n        }\n        return out;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "evens",
          "invoke": "evens(Arrays.asList(1,2,3,4))",
          "expect": "[2, 4]"
        },
        {
          "name": "none",
          "invoke": "evens(Arrays.asList(1,3))",
          "expect": "[]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「ArrayList 动态数组」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "hashmap",
      "lesson": "hashmap",
      "number": 57,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "HashMap 键值对",
      "reading": false,
      "task": "实现 count(String[] words)，统计每个单词出现次数并返回 Map。测试 {\"a\",\"b\",\"a\"}。",
      "prompt": "修复「HashMap 键值对」这枚记忆碎片：实现 count(String[] words)，统计每个单词出现次数并返回 Map。测试 {\"a\",\"b\",\"a\"}。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static Map<String,Integer> count(String[] words) {\n        // TODO\n        return new HashMap<>();\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static Map<String,Integer> count(String[] words) {\n        Map<String,Integer> map = new HashMap<>();\n        for (String w : words) {\n            map.put(w, map.getOrDefault(w, 0) + 1);\n        }\n        return map;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "count",
          "invoke": "count(new String[]{\"a\",\"b\",\"a\"})",
          "expect": "{a=2, b=1}"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「HashMap 键值对」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "hashset",
      "lesson": "hashset",
      "number": 58,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "HashSet 去重集合",
      "reading": false,
      "task": "实现 unique(String[] words)，返回去重后的 Set。测试 {\"a\",\"b\",\"a\"}。",
      "prompt": "修复「HashSet 去重集合」这枚记忆碎片：实现 unique(String[] words)，返回去重后的 Set。测试 {\"a\",\"b\",\"a\"}。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static Set<String> unique(String[] words) {\n        // TODO\n        return new HashSet<>();\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static Set<String> unique(String[] words) {\n        Set<String> set = new HashSet<>();\n        for (String w : words) set.add(w);\n        return set;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "unique",
          "invoke": "unique(new String[]{\"a\",\"b\",\"a\"})",
          "expect": "[a, b]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「HashSet 去重集合」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "collections",
      "lesson": "collections",
      "number": 59,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "Collections 工具类",
      "reading": false,
      "task": "实现 desc(List<Integer> nums)：先升序排序，再反转，返回降序列表。测试 [3,9,2]。",
      "prompt": "修复「Collections 工具类」这枚记忆碎片：实现 desc(List<Integer> nums)：先升序排序，再反转，返回降序列表。测试 [3,9,2]。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static List<Integer> desc(List<Integer> nums) {\n        // TODO\n        return nums;\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static List<Integer> desc(List<Integer> nums) {\n        Collections.sort(nums);\n        Collections.reverse(nums);\n        return nums;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "desc",
          "invoke": "desc(new ArrayList<>(Arrays.asList(3,9,2)))",
          "expect": "[9, 3, 2]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Collections 工具类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "comparator",
      "lesson": "comparator",
      "number": 60,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "Comparator 自定义排序",
      "reading": false,
      "task": "实现 byAge(List<Person> ps)，按年龄升序排序并返回。Person 的 toString 返回“name:age”。",
      "prompt": "修复「Comparator 自定义排序」这枚记忆碎片：实现 byAge(List<Person> ps)，按年龄升序排序并返回。Person 的 toString 返回“name:age”。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static List<Person> byAge(List<Person> ps) {\n        // TODO\n        return ps;\n    }\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static List<Person> byAge(List<Person> ps) {\n        ps.sort(Comparator.comparingInt(p -> p.age));\n        return ps;\n    }\n}\n\nclass Person {\n    String name;\n    int age;\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    public String toString() {\n        return name + \":\" + age;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "byAge",
          "invoke": "byAge(new ArrayList<>(Arrays.asList(new Person(\"a\",30), new Person(\"b\",20))))",
          "expect": "[b:20, a:30]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Comparator 自定义排序」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "datetime",
      "lesson": "datetime",
      "number": 61,
      "chapterNo": 8,
      "chapter": "核心类库",
      "title": "日期时间 API",
      "reading": false,
      "task": "实现 addDays(String date, int n)：解析 yyyy-MM-dd，加 n 天，返回 yyyy-MM-dd 字符串。测试 2024-02-28 加 2 天。",
      "prompt": "修复「日期时间 API」这枚记忆碎片：实现 addDays(String date, int n)：解析 yyyy-MM-dd，加 n 天，返回 yyyy-MM-dd 字符串。测试 2024-02-28 加 2 天。",
      "starter": "import java.time.*;\n\npublic class Main {\n    static String addDays(String date, int n) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "import java.time.*;\n\npublic class Main {\n    static String addDays(String date, int n) {\n        LocalDate d = LocalDate.parse(date);\n        return d.plusDays(n).toString();\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "leap",
          "invoke": "addDays(\"2024-02-28\",2)",
          "expect": "2024-03-01"
        },
        {
          "name": "month",
          "invoke": "addDays(\"2024-01-31\",1)",
          "expect": "2024-02-01"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「日期时间 API」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "generics-class",
      "lesson": "generics-class",
      "number": 62,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "泛型类",
      "reading": false,
      "task": "实现泛型类 Box<T>：字段 value，set(T) 保存，get() 返回。测试 Box<String>。",
      "prompt": "修复「泛型类」这枚记忆碎片：实现泛型类 Box<T>：字段 value，set(T) 保存，get() 返回。测试 Box<String>。",
      "starter": "public class Main {\n    static String boxed() {\n        Box<String> b = new Box<String>();\n        b.set(\"x\");\n        return b.get();\n    }\n    static int boxedInt() {\n        Box<Integer> b = new Box<Integer>();\n        b.set(7);\n        return b.get();\n    }\n}\n\nclass Box<T> {\n    T value;\n    void set(T v) {\n        // TODO\n    }\n    T get() {\n        // TODO\n        return null;\n    }\n}",
      "solution": "public class Main {\n    static String boxed() {\n        Box<String> b = new Box<String>();\n        b.set(\"x\");\n        return b.get();\n    }\n    static int boxedInt() {\n        Box<Integer> b = new Box<Integer>();\n        b.set(7);\n        return b.get();\n    }\n}\n\nclass Box<T> {\n    T value;\n    void set(T v) {\n        value = v;\n    }\n    T get() {\n        return value;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "box",
          "invoke": "boxed()",
          "expect": "x"
        },
        {
          "name": "boxInt",
          "invoke": "boxedInt()",
          "expect": "7"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第9章 · 泛型与函数式。写出更通用、更简洁的 Java",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「泛型与函数式」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「泛型类」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "generics-method",
      "lesson": "generics-method",
      "number": 63,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "泛型方法",
      "reading": false,
      "task": "实现 static <T> T first(List<T> list)，返回第一个元素。测试 List<String> 和 List<Integer>。",
      "prompt": "修复「泛型方法」这枚记忆碎片：实现 static <T> T first(List<T> list)，返回第一个元素。测试 List<String> 和 List<Integer>。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static <T> T first(List<T> list) {\n        // TODO\n        return null;\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static <T> T first(List<T> list) {\n        return list.get(0);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "str",
          "invoke": "first(Arrays.asList(\"a\",\"b\"))",
          "expect": "a"
        },
        {
          "name": "int",
          "invoke": "first(Arrays.asList(7,8))",
          "expect": "7"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「泛型方法」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "lambda",
      "lesson": "lambda",
      "number": 64,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "Lambda 表达式",
      "reading": false,
      "task": "实现 applyOp(Operation op, int a, int b)，调用 op.apply(a,b)。测试传入 (a,b)->a+b 和 (a,b)->a*b。",
      "prompt": "修复「Lambda 表达式」这枚记忆碎片：实现 applyOp(Operation op, int a, int b)，调用 op.apply(a,b)。测试传入 (a,b)->a+b 和 (a,b)->a*b。",
      "starter": "public class Main {\n    interface Operation {\n        int apply(int a, int b);\n    }\n    static int applyOp(Operation op, int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    interface Operation {\n        int apply(int a, int b);\n    }\n    static int applyOp(Operation op, int a, int b) {\n        return op.apply(a, b);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "add",
          "invoke": "applyOp((a,b)->a+b, 2, 3)",
          "expect": "5"
        },
        {
          "name": "mul",
          "invoke": "applyOp((a,b)->a*b, 2, 3)",
          "expect": "6"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Lambda 表达式」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "functional",
      "lesson": "functional",
      "number": 65,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "函数式接口",
      "reading": false,
      "task": "实现 filter(List<Integer> nums, Predicate<Integer> p)，返回满足条件的元素。测试保留偶数。",
      "prompt": "修复「函数式接口」这枚记忆碎片：实现 filter(List<Integer> nums, Predicate<Integer> p)，返回满足条件的元素。测试保留偶数。",
      "starter": "import java.util.*;\nimport java.util.function.*;\n\npublic class Main {\n    static List<Integer> filter(List<Integer> nums, Predicate<Integer> p) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
      "solution": "import java.util.*;\nimport java.util.function.*;\n\npublic class Main {\n    static List<Integer> filter(List<Integer> nums, Predicate<Integer> p) {\n        List<Integer> out = new ArrayList<>();\n        for (int n : nums) {\n            if (p.test(n)) out.add(n);\n        }\n        return out;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "even",
          "invoke": "filter(Arrays.asList(1,2,3,4), n -> n % 2 == 0)",
          "expect": "[2, 4]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「函数式接口」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "method-ref",
      "lesson": "method-ref",
      "number": 66,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "方法引用",
      "reading": false,
      "task": "实现 transform(String s, Function<String,Integer> f)，返回 f.apply(s)。测试传入 String::length。",
      "prompt": "修复「方法引用」这枚记忆碎片：实现 transform(String s, Function<String,Integer> f)，返回 f.apply(s)。测试传入 String::length。",
      "starter": "import java.util.function.*;\n\npublic class Main {\n    static int transform(String s, Function<String,Integer> f) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "import java.util.function.*;\n\npublic class Main {\n    static int transform(String s, Function<String,Integer> f) {\n        return f.apply(s);\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "length",
          "invoke": "transform(\"java\", String::length)",
          "expect": "4"
        },
        {
          "name": "parse",
          "invoke": "transform(\"42\", Integer::parseInt)",
          "expect": "42"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「方法引用」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "stream",
      "lesson": "stream",
      "number": 67,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "Stream 入门",
      "reading": false,
      "task": "实现 squares(List<Integer> nums)：保留偶数，平方，收集成 List。测试 [1,2,3,4] 返回 [4, 16]。",
      "prompt": "修复「Stream 入门」这枚记忆碎片：实现 squares(List<Integer> nums)：保留偶数，平方，收集成 List。测试 [1,2,3,4] 返回 [4, 16]。",
      "starter": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<Integer> squares(List<Integer> nums) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
      "solution": "import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    static List<Integer> squares(List<Integer> nums) {\n        return nums.stream()\n                .filter(n -> n % 2 == 0)\n                .map(n -> n * n)\n                .collect(Collectors.toList());\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "squares",
          "invoke": "squares(Arrays.asList(1,2,3,4))",
          "expect": "[4, 16]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Stream 入门」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "optional",
      "lesson": "optional",
      "number": 68,
      "chapterNo": 9,
      "chapter": "泛型与函数式",
      "title": "Optional 空值容器",
      "reading": false,
      "task": "实现 nameOrUnknown(Optional<String> o)：有值返回该值，否则返回“未知”。测试 of(\"Java\") 和 empty()。",
      "prompt": "修复「Optional 空值容器」这枚记忆碎片：实现 nameOrUnknown(Optional<String> o)：有值返回该值，否则返回“未知”。测试 of(\"Java\") 和 empty()。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static String nameOrUnknown(Optional<String> o) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static String nameOrUnknown(Optional<String> o) {\n        return o.orElse(\"未知\");\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "present",
          "invoke": "nameOrUnknown(Optional.of(\"Java\"))",
          "expect": "Java"
        },
        {
          "name": "empty",
          "invoke": "nameOrUnknown(Optional.empty())",
          "expect": "未知"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「Optional 空值容器」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "try-catch",
      "lesson": "try-catch",
      "number": 69,
      "chapterNo": 10,
      "chapter": "异常处理",
      "title": "try-catch",
      "reading": false,
      "task": "用 try-catch 捕获整数除零异常，输出“不能除以0”，程序不要崩溃。",
      "prompt": "修复「try-catch」这枚记忆碎片：用 try-catch 捕获整数除零异常，输出“不能除以0”，程序不要崩溃。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 try-catch 捕获 10 / 0\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 10 / 0;\n            System.out.println(x);\n        } catch (ArithmeticException e) {\n            System.out.println(\"不能除以0\");\n        }\n    }\n}\n",
      "mode": "output",
      "expected": "不能除以0",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第10章 · 异常处理。程序出错时，别让整个应用崩掉",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「异常处理」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「try-catch」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "finally",
      "lesson": "finally",
      "number": 70,
      "chapterNo": 10,
      "chapter": "异常处理",
      "title": "finally",
      "reading": false,
      "task": "在 try 中输出“try”，在 finally 中输出“finally”，观察执行顺序。",
      "prompt": "修复「finally」这枚记忆碎片：在 try 中输出“try”，在 finally 中输出“finally”，观察执行顺序。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: try 输出 try，finally 输出 finally\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"try\");\n        } finally {\n            System.out.println(\"finally\");\n        }\n    }\n}\n",
      "mode": "output",
      "expected": "try\nfinally",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「finally」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "throw-custom",
      "lesson": "throw-custom",
      "number": 71,
      "chapterNo": 10,
      "chapter": "异常处理",
      "title": "throw 与自定义异常",
      "reading": false,
      "task": "实现 safeDivide(int a,int b)：b 为 0 时返回 -1，否则返回 a/b；可自行用异常实现。",
      "prompt": "修复「throw 与自定义异常」这枚记忆碎片：实现 safeDivide(int a,int b)：b 为 0 时返回 -1，否则返回 a/b；可自行用异常实现。",
      "starter": "public class Main {\n    static int safeDivide(int a, int b) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "public class Main {\n    static int safeDivide(int a, int b) {\n        if (b == 0) return -1;\n        return a / b;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "ok",
          "invoke": "safeDivide(6,3)",
          "expect": "2"
        },
        {
          "name": "zero",
          "invoke": "safeDivide(6,0)",
          "expect": "-1"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「throw 与自定义异常」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "try-resources",
      "lesson": "try-resources",
      "number": 72,
      "chapterNo": 10,
      "chapter": "异常处理",
      "title": "try-with-resources",
      "reading": false,
      "task": "用 try-with-resources 创建 Scanner 读取 42 并输出，让 Scanner 自动关闭。",
      "prompt": "修复「try-with-resources」这枚记忆碎片：用 try-with-resources 创建 Scanner 读取 42 并输出，让 Scanner 自动关闭。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        // TODO: try-with-resources 读取 42\n\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        try (Scanner sc = new Scanner(\"42\")) {\n            System.out.println(sc.nextInt());\n        }\n    }\n}",
      "mode": "output",
      "expected": "42",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「try-with-resources」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "exception-practice",
      "lesson": "exception-practice",
      "number": 73,
      "chapterNo": 10,
      "chapter": "异常处理",
      "title": "综合：异常处理实战",
      "reading": false,
      "task": "分别捕获 ArrayIndexOutOfBoundsException 和 NumberFormatException，输出对应的提示。",
      "prompt": "修复「综合：异常处理实战」这枚记忆碎片：分别捕获 ArrayIndexOutOfBoundsException 和 NumberFormatException，输出对应的提示。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 捕获数组越界，输出 数组越界\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int[] a = new int[2];\n            a[3] = 1;\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"数组越界\");\n        }\n    }\n}\n",
      "mode": "output",
      "expected": "数组越界",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「综合：异常处理实战」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "thread",
      "lesson": "thread",
      "number": 74,
      "chapterNo": 11,
      "chapter": "并发、IO 与拓展",
      "title": "线程基础",
      "reading": false,
      "task": "创建线程输出 child，主线程 join 后输出 main。",
      "prompt": "修复「线程基础」这枚记忆碎片：创建线程输出 child，主线程 join 后输出 main。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 创建线程输出 child，join 后输出 main\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        Thread t = new Thread(() -> System.out.println(\"child\"));\n        t.start();\n        t.join();\n        System.out.println(\"main\");\n    }\n}\n",
      "mode": "output",
      "expected": "child\nmain",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第11章 · 并发、IO 与拓展。让程序同时做事、读写文件、连接世界",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「并发、IO 与拓展」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「线程基础」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "sync",
      "lesson": "sync",
      "number": 75,
      "chapterNo": 11,
      "chapter": "并发、IO 与拓展",
      "title": "线程同步",
      "reading": false,
      "task": "用 synchronized 方法让两个线程各加 1000 次，输出 count=2000。",
      "prompt": "修复「线程同步」这枚记忆碎片：用 synchronized 方法让两个线程各加 1000 次，输出 count=2000。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        Counter c = new Counter();\n        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        // TODO: start、join，然后输出 count\n\n    }\n}\n\nclass Counter {\n    int count;\n    // TODO: 给 inc 加 synchronized\n    void inc() {\n        count++;\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        Counter c = new Counter();\n        Thread t1 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        Thread t2 = new Thread(() -> { for (int i = 0; i < 1000; i++) c.inc(); });\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n        System.out.println(\"count=\" + c.count);\n    }\n}\n\nclass Counter {\n    int count;\n    synchronized void inc() {\n        count++;\n    }\n}",
      "mode": "output",
      "expected": "count=2000",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「线程同步」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "regex",
      "lesson": "regex",
      "number": 76,
      "chapterNo": 11,
      "chapter": "并发、IO 与拓展",
      "title": "正则表达式",
      "reading": false,
      "task": "实现 findAll(String text, String regex)，返回所有匹配到的子串 List。测试 a12b345 和 \\\\d+ 返回 [12, 345]。",
      "prompt": "修复「正则表达式」这枚记忆碎片：实现 findAll(String text, String regex)，返回所有匹配到的子串 List。测试 a12b345 和 \\\\d+ 返回 [12, 345]。",
      "starter": "import java.util.*;\nimport java.util.regex.*;\n\npublic class Main {\n    static List<String> findAll(String text, String regex) {\n        // TODO\n        return new ArrayList<>();\n    }\n}",
      "solution": "import java.util.*;\nimport java.util.regex.*;\n\npublic class Main {\n    static List<String> findAll(String text, String regex) {\n        List<String> out = new ArrayList<>();\n        Matcher m = Pattern.compile(regex).matcher(text);\n        while (m.find()) out.add(m.group());\n        return out;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "nums",
          "invoke": "findAll(\"a12b345\", \"\\\\d+\")",
          "expect": "[12, 345]"
        },
        {
          "name": "words",
          "invoke": "findAll(\"a1b2\", \"[a-z]\")",
          "expect": "[a, b]"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「正则表达式」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "jdbc-reading",
      "lesson": "jdbc-reading",
      "number": 77,
      "chapterNo": 11,
      "chapter": "并发、IO 与拓展",
      "title": "拓展阅读：JDBC 数据库地图",
      "reading": true,
      "task": "阅读本关，理解 Connection、PreparedStatement、ResultSet 和 SQL 注入防护。完成后点击“我读完了”。",
      "prompt": "修复「拓展阅读：JDBC 数据库地图」这枚记忆碎片：阅读本关，理解 Connection、PreparedStatement、ResultSet 和 SQL 注入防护。完成后点击“我读完了”。",
      "starter": "",
      "solution": "",
      "mode": "output",
      "expected": "",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「拓展阅读：JDBC 数据库地图」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "阿灯",
          "text": "这一枚不是代码碎片，是一张地图。读完它，我们才能穿过数据库区。",
          "portrait": "companion"
        }
      ]
    },
    {
      "id": "student-manager",
      "lesson": "student-manager",
      "number": 78,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：学生成绩管理",
      "reading": false,
      "task": "实现 report(Student[] ss)：返回“平均:80.0 最高:小明”。测试学生：小明90、小红80、小刚70。",
      "prompt": "修复「项目：学生成绩管理」这枚记忆碎片：实现 report(Student[] ss)：返回“平均:80.0 最高:小明”。测试学生：小明90、小红80、小刚70。",
      "starter": "public class Main {\n    static String report(Student[] ss) {\n        // TODO\n        return \"\";\n    }\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}",
      "solution": "public class Main {\n    static String report(Student[] ss) {\n        int sum = 0;\n        Student top = ss[0];\n        for (Student s : ss) {\n            sum += s.score;\n            if (s.score > top.score) top = s;\n        }\n        double avg = (double) sum / ss.length;\n        return \"平均:\" + avg + \" 最高:\" + top.name;\n    }\n}\n\nclass Student {\n    String name;\n    int score;\n    Student(String name, int score) {\n        this.name = name;\n        this.score = score;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "report",
          "invoke": "report(new Student[]{new Student(\"小明\",90),new Student(\"小红\",80),new Student(\"小刚\",70)})",
          "expect": "平均:80.0 最高:小明"
        }
      ],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第12章 · 综合项目。把学过的知识组装成真正能用的小程序",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「综合项目」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：学生成绩管理」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "guess-number",
      "lesson": "guess-number",
      "number": 79,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：猜数字游戏",
      "reading": false,
      "task": "目标数固定为 42，读取输入直到猜中；大于 42 输出“大了”，小于输出“小了”，等于输出“猜对了”。测试输入 50 30 42。",
      "prompt": "修复「项目：猜数字游戏」这枚记忆碎片：目标数固定为 42，读取输入直到猜中；大于 42 输出“大了”，小于输出“小了”，等于输出“猜对了”。测试输入 50 30 42。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // TODO: 猜 42\n\n        sc.close();\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        while (true) {\n            int g = sc.nextInt();\n            if (g > 42) {\n                System.out.println(\"大了\");\n            } else if (g < 42) {\n                System.out.println(\"小了\");\n            } else {\n                System.out.println(\"猜对了\");\n                break;\n            }\n        }\n        sc.close();\n    }\n}",
      "mode": "output",
      "expected": "大了\n小了\n猜对了",
      "stdin": "50 30 42",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：猜数字游戏」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "word-frequency",
      "lesson": "word-frequency",
      "number": 80,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：词频统计",
      "reading": false,
      "task": "实现 topWord(String[] words)，返回出现次数最多的词，格式“词:次数”。测试 {\"a\",\"b\",\"a\"}。",
      "prompt": "修复「项目：词频统计」这枚记忆碎片：实现 topWord(String[] words)，返回出现次数最多的词，格式“词:次数”。测试 {\"a\",\"b\",\"a\"}。",
      "starter": "import java.util.*;\n\npublic class Main {\n    static String topWord(String[] words) {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    static String topWord(String[] words) {\n        Map<String,Integer> map = new HashMap<>();\n        for (String w : words) {\n            map.put(w, map.getOrDefault(w, 0) + 1);\n        }\n        String best = \"\";\n        int max = 0;\n        for (Map.Entry<String,Integer> e : map.entrySet()) {\n            if (e.getValue() > max) {\n                max = e.getValue();\n                best = e.getKey();\n            }\n        }\n        return best + \":\" + max;\n    }\n}",
      "mode": "calls",
      "expected": "",
      "stdin": "",
      "calls": [
        {
          "name": "top",
          "invoke": "topWord(new String[]{\"a\",\"b\",\"a\"})",
          "expect": "a:2"
        }
      ],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：词频统计」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    },
    {
      "id": "bank-system",
      "lesson": "bank-system",
      "number": 81,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：银行账户系统",
      "reading": false,
      "task": "实现 Bank：open、deposit、transfer、balance。main 中 A 存 100、B 存 50、A 转 30 给 B，输出“70 80”。",
      "prompt": "修复「项目：银行账户系统」这枚记忆碎片：实现 Bank：open、deposit、transfer、balance。main 中 A 存 100、B 存 50、A 转 30 给 B，输出“70 80”。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b = new Bank();\n        b.open(\"A\", 100);\n        b.open(\"B\", 50);\n        b.transfer(\"A\", \"B\", 30);\n        // TODO: 输出 A、B 余额\n\n    }\n}\n\nclass Account {\n    String name;\n    int balance;\n    Account(String name, int balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n}\n\nclass Bank {\n    List<Account> accounts = new ArrayList<>();\n    void open(String name, int money) {\n        // TODO\n    }\n    Account find(String name) {\n        // TODO\n        return null;\n    }\n    void deposit(String name, int money) {\n        // TODO\n    }\n    void transfer(String from, String to, int money) {\n        // TODO\n    }\n    int balance(String name) {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Bank b = new Bank();\n        b.open(\"A\", 100);\n        b.open(\"B\", 50);\n        b.transfer(\"A\", \"B\", 30);\n        System.out.println(b.balance(\"A\") + \" \" + b.balance(\"B\"));\n    }\n}\n\nclass Account {\n    String name;\n    int balance;\n    Account(String name, int balance) {\n        this.name = name;\n        this.balance = balance;\n    }\n}\n\nclass Bank {\n    List<Account> accounts = new ArrayList<>();\n    void open(String name, int money) {\n        accounts.add(new Account(name, money));\n    }\n    Account find(String name) {\n        for (Account a : accounts) {\n            if (a.name.equals(name)) return a;\n        }\n        return null;\n    }\n    void deposit(String name, int money) {\n        Account a = find(name);\n        if (a != null && money > 0) a.balance += money;\n    }\n    void transfer(String from, String to, int money) {\n        Account a = find(from);\n        Account b = find(to);\n        if (a == null || b == null || money <= 0 || a.balance < money) return;\n        a.balance -= money;\n        b.balance += money;\n    }\n    int balance(String name) {\n        Account a = find(name);\n        return a == null ? 0 : a.balance;\n    }\n}",
      "mode": "output",
      "expected": "70 80",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：银行账户系统」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "todo-list",
      "lesson": "todo-list",
      "number": 82,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：待办清单",
      "reading": false,
      "task": "实现 TodoList：add、done、render；main 添加“学习Java”“写项目”，完成第一条，输出两行带 [x]/[ ] 的清单。",
      "prompt": "修复「项目：待办清单」这枚记忆碎片：实现 TodoList：add、done、render；main 添加“学习Java”“写项目”，完成第一条，输出两行带 [x]/[ ] 的清单。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        TodoList t = new TodoList();\n        t.add(\"学习Java\");\n        t.add(\"写项目\");\n        t.done(0);\n        // TODO: 输出 t.render()\n\n    }\n}\n\nclass Task {\n    String title;\n    boolean done;\n    Task(String title) {\n        this.title = title;\n    }\n}\n\nclass TodoList {\n    List<Task> tasks = new ArrayList<>();\n    void add(String title) {\n        // TODO\n    }\n    void done(int index) {\n        // TODO\n    }\n    String render() {\n        // TODO\n        return \"\";\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        TodoList t = new TodoList();\n        t.add(\"学习Java\");\n        t.add(\"写项目\");\n        t.done(0);\n        System.out.println(t.render());\n    }\n}\n\nclass Task {\n    String title;\n    boolean done;\n    Task(String title) {\n        this.title = title;\n    }\n}\n\nclass TodoList {\n    List<Task> tasks = new ArrayList<>();\n    void add(String title) {\n        tasks.add(new Task(title));\n    }\n    void done(int index) {\n        tasks.get(index).done = true;\n    }\n    String render() {\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < tasks.size(); i++) {\n            if (i > 0) sb.append(\"\\n\");\n            Task t = tasks.get(i);\n            sb.append(t.done ? \"[x] \" : \"[ ] \").append(t.title);\n        }\n        return sb.toString();\n    }\n}",
      "mode": "output",
      "expected": "[x] 学习Java\n[ ] 写项目",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：待办清单」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "mini-library",
      "lesson": "mini-library",
      "number": 83,
      "chapterNo": 12,
      "chapter": "综合项目",
      "title": "项目：迷你图书管理系统",
      "reading": false,
      "task": "实现 Library 的 add、borrow、giveBack、availableCount；main 输出借书结果和可借数量。",
      "prompt": "修复「项目：迷你图书管理系统」这枚记忆碎片：实现 Library 的 add、borrow、giveBack、availableCount；main 输出借书结果和可借数量。",
      "starter": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", \"A\"));\n        lib.add(new Book(\"Python\", \"B\"));\n        // TODO: 借 Java，输出结果和可借数量\n\n    }\n}\n\nclass Book {\n    String title;\n    String author;\n    boolean borrowed;\n    Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n}\n\nclass Library {\n    List<Book> books = new ArrayList<>();\n    void add(Book b) {\n        // TODO\n    }\n    Book find(String title) {\n        // TODO\n        return null;\n    }\n    String borrow(String title) {\n        // TODO\n        return \"\";\n    }\n    void giveBack(String title) {\n        // TODO\n    }\n    int availableCount() {\n        // TODO\n        return 0;\n    }\n}",
      "solution": "import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Library lib = new Library();\n        lib.add(new Book(\"Java\", \"A\"));\n        lib.add(new Book(\"Python\", \"B\"));\n        System.out.println(lib.borrow(\"Java\"));\n        System.out.println(lib.availableCount());\n    }\n}\n\nclass Book {\n    String title;\n    String author;\n    boolean borrowed;\n    Book(String title, String author) {\n        this.title = title;\n        this.author = author;\n    }\n}\n\nclass Library {\n    List<Book> books = new ArrayList<>();\n    void add(Book b) {\n        books.add(b);\n    }\n    Book find(String title) {\n        for (Book b : books) {\n            if (b.title.equals(title)) return b;\n        }\n        return null;\n    }\n    String borrow(String title) {\n        Book b = find(title);\n        if (b == null) return \"没有:\" + title;\n        if (b.borrowed) return \"已借出:\" + title;\n        b.borrowed = true;\n        return \"借出:\" + title;\n    }\n    void giveBack(String title) {\n        Book b = find(title);\n        if (b != null) b.borrowed = false;\n    }\n    int availableCount() {\n        int n = 0;\n        for (Book b : books) if (!b.borrowed) n++;\n        return n;\n    }\n}",
      "mode": "output",
      "expected": "借出:Java\n1",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「项目：迷你图书管理系统」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        }
      ]
    },
    {
      "id": "multi-catch",
      "lesson": "multi-catch",
      "number": 84,
      "chapterNo": 13,
      "chapter": "现代 Java 语法",
      "title": "multi-catch 多异常捕获",
      "reading": false,
      "task": "用 multi-catch 同时捕获 ArithmeticException 和 ArrayIndexOutOfBoundsException，触发除零并输出“算错了”。",
      "prompt": "修复「multi-catch 多异常捕获」这枚记忆碎片：用 multi-catch 同时捕获 ArithmeticException 和 ArrayIndexOutOfBoundsException，触发除零并输出“算错了”。",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // TODO: 用 multi-catch 捕获两种异常\n\n    }\n}",
      "solution": "public class Main {\n    public static void main(String[] args) {\n        try {\n            int x = 10 / 0;\n        } catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {\n            System.out.print(\"算错了\");\n        }\n    }\n}",
      "mode": "output",
      "expected": "算错了",
      "stdin": "",
      "calls": [],
      "lines": [
        {
          "speaker": "旁白",
          "text": "第13章 · 现代 Java 语法。文本块、switch 表达式、multi-catch、sealed 与模式匹配",
          "portrait": "narrator"
        },
        {
          "speaker": "阿灯",
          "text": "记忆塔的这一层是「现代 Java 语法」。把里面的程序接上，塔就会亮一层。",
          "portrait": "companion"
        },
        {
          "speaker": "阿灯",
          "text": "下一枚碎片是「multi-catch 多异常捕获」。你写，我盯住崩溃的边界。",
          "portrait": "companion"
        },
        {
          "speaker": "你",
          "text": "把题目给我。",
          "portrait": "hero"
        },
        {
          "speaker": "铁砧",
          "text": "别只顾着跑通。问问自己：这段代码为什么这样写？",
          "portrait": "companion2"
        }
      ]
    }
  ]
}};
