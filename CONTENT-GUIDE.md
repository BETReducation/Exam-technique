# 📝 Content Management Guide

## 🎯 Overview

All your app's content is now in **ONE easy-to-edit file**: `content.js`

**Benefits:**
- ✅ Edit content WITHOUT touching HTML/CSS
- ✅ All content in one place
- ✅ Easy to find and update
- ✅ No risk of breaking the app's design
- ✅ Add/remove content items easily

---

## 📂 File Structure

```
Exam-technique/
├── index.html          (DON'T EDIT - this is the app structure)
├── content.js          (EDIT THIS - all your content!)
├── img/
│   └── TEE_background_header.jpg
└── CONTENT-GUIDE.md    (This file - your reference)
```

---

## ✏️ How to Edit Content

### **Step 1: Open content.js**

**In VS Code:**
1. Open your Exam-technique folder
2. Click on `content.js`
3. You'll see organized sections for each part of your app

**Or use any text editor:**
- TextEdit (Mac)
- Notepad (Windows)
- VS Code (Recommended)

---

### **Step 2: Find What You Want to Edit**

The file is organized into clear sections:

```javascript
const appContent = {
    learnSkills: [...],          // Learn Skills section
    practiceQuestions: [...],     // Practice questions
    quizQuestions: [...],         // Quick quizzes
    progressStats: {...},         // Progress numbers
    topicProgress: [...],         // Topic progress bars
    recentActivity: [...],        // Activity feed
    recommendations: [...],       // Recommendations
    markingExercises: [...],      // Marking practice
    discussionTopics: [...],      // Discussion forum
    chatMessages: [...],          // Chat messages
    assessmentInfo: [...],        // AI assessment info
    sampleFeedback: {...}         // Sample feedback
};
```

---

### **Step 3: Make Your Changes**

**Example 1: Add a New Skill**

Find the `learnSkills` section and add:

```javascript
learnSkills: [
    // Existing skills...
    {
        level: "intermediate",
        title: "Your New Skill Title",
        description: "Brief description of the skill",
        points: [
            "First key point",
            "Second key point",
            "Third key point"
        ]
    }
]
```

**Example 2: Update Progress Stats**

```javascript
progressStats: {
    overall: 75,              // Change from 67 to 75
    questionsCompleted: 30,   // Change from 24 to 30
    skillsMastered: 20,       // etc.
    practiceTests: 7
}
```

**Example 3: Add a Practice Question**

```javascript
practiceQuestions: [
    // Existing questions...
    {
        id: 3,                          // Give it a unique ID
        topic: "Market Structures",     // Topic name
        marks: 12,                      // Total marks
        question: "Your question text here...",
        tip: "Helpful tip for students"
    }
]
```

---

### **Step 4: Save and Deploy**

1. **Save the file** (Cmd+S or Ctrl+S)
2. **Open GitHub Desktop**
3. **Commit:** "Updated learn skills content"
4. **Push to GitHub**
5. **Wait 2-3 minutes**
6. **Check your live site!**

---

## 📋 Common Editing Tasks

### **Add a New Skill Card**

```javascript
{
    level: "beginner",        // Options: "beginner", "intermediate", "advanced"
    title: "Skill Title",
    description: "What this skill is about",
    points: [
        "Point 1",
        "Point 2",
        "Point 3"
    ]
}
```

### **Add a Quiz Question**

```javascript
{
    id: 2,                    // Increment from last ID
    question: "Your question?",
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 2,         // Index: 0=A, 1=B, 2=C, 3=D
    explanation: "Why this is correct"
}
```

### **Update Topic Progress**

```javascript
topicProgress: [
    {
        topic: "Microeconomics",
        percentage: 85        // Change the number
    }
]
```

### **Add Recent Activity**

```javascript
recentActivity: [
    "New activity item ✅",
    "Another activity 🎯",
    // Keep adding at the top (newest first)
]
```

### **Add Discussion Topic**

```javascript
discussionTopics: [
    {
        id: 4,                              // Unique ID
        title: "New Discussion Topic",
        students: 5,                        // Number of students
        comments: 3,                        // Number of comments
        lastActivity: "30 minutes ago"
    }
]
```

---

## ⚠️ Important Rules

### **DO:**
- ✅ Keep the structure the same
- ✅ Use quotes for text: `"like this"`
- ✅ End items with commas: `"text",`
- ✅ Keep matching brackets: `{ }` and `[ ]`
- ✅ Test locally before pushing

### **DON'T:**
- ❌ Delete the `const appContent = {` line
- ❌ Delete the closing `};` at the end
- ❌ Forget commas between items
- ❌ Mix up `{ }` (objects) and `[ ]` (arrays)

---

## 🔍 Quick Reference

### **Object vs Array**

**Object** (uses `{ }`) - Single item with properties:
```javascript
{
    name: "value",
    age: 25
}
```

**Array** (uses `[ ]`) - List of items:
```javascript
[
    "item 1",
    "item 2",
    "item 3"
]
```

### **Text Formatting**

**Bold text:**
```javascript
"<strong>This is bold</strong>"
```

**Italic text:**
```javascript
"<em>This is italic</em>"
```

**Line break:**
```javascript
"Line 1<br>Line 2"
```

**Emoji:**
```javascript
"Great work ✅"
"Target 🎯"
"Chart 📊"
```

---

## 🎓 Example: Adding a Complete New Skill

Let's say you want to add "Understanding Market Structures":

1. **Open content.js**

2. **Find the `learnSkills` section**

3. **Add this at the end (before the closing `]`):**

```javascript
        ,  // Don't forget the comma from the previous item!
        {
            level: "intermediate",
            title: "Understanding Market Structures",
            description: "Different market structures affect firm behavior and pricing:",
            points: [
                "<strong>Perfect Competition:</strong> Many firms, identical products, price takers",
                "<strong>Monopoly:</strong> Single firm, unique product, price maker",
                "<strong>Oligopoly:</strong> Few large firms, interdependent decision-making",
                "<strong>Monopolistic Competition:</strong> Many firms, differentiated products",
                "Always identify market structure before analyzing firm behavior"
            ]
        }
```

4. **Save, commit, push!**

---

## 🆘 Troubleshooting

### **Problem: Site shows errors after update**

**Cause:** Syntax error in content.js

**Solution:**
1. Check for missing commas
2. Check matching brackets: `{ }` and `[ ]`
3. Check quotes are closed: `"text"`
4. Use a JSON validator: https://jsonlint.com/

### **Problem: Content doesn't appear**

**Cause:** HTML not yet updated to use content.js

**Solution:**
- I'll update the HTML in the next step to pull from content.js

### **Problem: Can't find what to edit**

**Cause:** Not sure which section

**Solution:**
- Search for text that's currently on the site (Cmd+F / Ctrl+F)
- Check the section comments: `// LEARN SKILLS SECTION`

---

## 📊 Content Organization

```
content.js
│
├── Learn Skills (5 skill cards currently)
│   ├── Beginner skills
│   ├── Intermediate skills
│   └── Advanced skills
│
├── Practice Questions (2 questions currently)
│   ├── Long-form questions
│   └── Quick quizzes
│
├── Progress Tracking
│   ├── Overall stats
│   ├── Topic progress
│   ├── Recent activity
│   └── Recommendations
│
├── Marking Practice (1 exercise currently)
│   ├── Questions
│   ├── Student answers
│   ├── Mark schemes
│   └── Feedback
│
├── Discussion Forum
│   ├── Topics
│   └── Messages
│
└── AI Assessment
    ├── Info points
    └── Sample feedback
```

---

## 🚀 Next Steps

**Now:** The content.js file is created with your current content

**Next:** I'll update index.html to automatically load from content.js

**Result:** You can edit content.js and it automatically updates the site!

---

## 💡 Pro Tips

1. **Make small changes first** - Test with one item before bulk updates
2. **Keep backups** - GitHub keeps version history automatically
3. **Use comments** - Add `// Notes to self` in the file
4. **Format nicely** - Use indentation to keep it readable
5. **Test locally** - Open index.html in browser before pushing

---

## 📞 Need Help?

Common questions:

**Q: How many items can I add?**
A: As many as you want! No limits.

**Q: Can I delete items?**
A: Yes! Just remove the entire `{ }` block and its comma.

**Q: Can I reorder items?**
A: Yes! Cut and paste within the same section.

**Q: What if I break something?**
A: GitHub Desktop lets you revert changes easily!

---

Ready to edit your content? Open `content.js` and start customizing! 🎨
