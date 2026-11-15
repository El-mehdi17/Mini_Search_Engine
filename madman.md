🔥 **تحدي Node.js: اصنع محرك بحث بسيط (Mini Search Engine)**

سنبدأ بمشروع صغير يجعلك تفهم كيف تعمل المحركات من الداخل، وتتعلم التعامل مع الملفات والخوارزميات وNode.js Core.

**CHALLENGE 01**

Beginner

# **Mini Search Engine**

[Daniel Westphal](https://images.openai.com/static-rsc-4/uD-cUbnX-tj3yzeCk8KuMteZz5XbFSC8ZFEOXYWGeAPklOrOkhZElmT-Of5OJGNZOexMBEmTgSEFJxMCYSxvwJ-nPFC30euxOE5mzbIET50n7soK_ug2Ws-Mu1JTO1DD2sYJe3Sy_0_PJDDEExuCchulK4qWcUP-txFq9PjulRw?purpose=inline)

[danielwestphal.com](https://www.danielwestphal.com/portfolio/tse?utm_source=chatgpt.com)

**الهدف:** بناء محرك يبحث داخل مجموعة ملفات نصية ويعرض النتائج حسب مدى تطابقها مع كلمة البحث.

Node.js

File System

Algorithms

## **1. متطلبات المشروع**

أنشئ مجلداً بهذا الشكل:

```
mini-engine/
│
├── engine.js
├── index.js
└── data/
    ├── nodejs.txt
    ├── javascript.txt
    └── python.txt
```

## **2. المهام المطلوبة**

| المهمة | الوصف                                  |
| ------ | -------------------------------------- |
| 01     | قراءة جميع ملفات TXT                   |
| 02     | استخراج الكلمات من الملفات             |
| 03     | تخزين الكلمات في Index                 |
| 04     | استقبال كلمة البحث                     |
| 05     | البحث عن الكلمة داخل Index             |
| 06     | ترتيب النتائج حسب عدد مرات ظهور الكلمة |

## **3. مثال على النتيجة**

عندما يبحث المستخدم عن:

```
javascript
```

يُظهر المحرك مثلاً:

```
=========================
      MINI ENGINE
=========================

Search: javascript

Results:

1. javascript.txt
   Matches: 8

2. nodejs.txt
   Matches: 4

3. python.txt
   Matches: 0

3 files indexed.
Search completed!
```

*هذه نتيجة توضيحية وليست نتيجة فعلية.*

## **4. الأدوات المسموح بها**

استخدم:

- `fs` لقراءة الملفات.
- `path` للتعامل مع المسارات.
- `readline` لاستقبال مدخلات المستخدم.
- `Map` لتخزين الكلمات والنتائج.
- `process` للتعامل مع البرنامج.

**ممنوع استخدام:**

- Express
- مكتبات البحث الجاهزة.
- قواعد البيانات.

## **5. مراحل التحدي**

1. **STEP 01 — File Reader**

   اقرأ جميع ملفات TXT باستخدام Node.js.
2. **STEP 02 — Indexing Engine**

   أنشئ نظاماً يخزن الكلمات وعدد مرات ظهورها.
3. **STEP 03 — Search Algorithm**

   أنشئ خوارزمية البحث.
4. **STEP 04 — Ranking System**

   رتّب النتائج من الأكثر تطابقاً إلى الأقل.
5. **STEP 05 — CLI Interface**

   أنشئ واجهة Terminal تتيح البحث المتكرر.

## **6. أول اختبار لك**

قبل كتابة المحرك كاملاً، ابدأ بهذا السؤال:

**كيف ستقرأ جميع ملفات&#x20;**`.txt`**&#x20;الموجودة داخل مجلد&#x20;**`data`**&#x20;دون معرفة أسمائها مسبقاً؟**

حاول كتابة `engine.js` بنفسك.



الهدف النهائي

&#x20;أن تمتلك محرك بحث صغيراً مبنياً من الصفر باستخدام Node.js Core فقط.



عندما تنتهي من STEP 01، أرسل لي الكود وسأراجعه معك مثل Code Review حقيقي.