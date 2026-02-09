// ============================================
// EXAM TECHNIQUE APP - CONTENT DATA
// ============================================
// 
// This file contains all the content for your app.
// Edit this file to update content - NO need to touch index.html!
//
// How to use:
// 1. Edit the content below
// 2. Save the file
// 3. Commit and push to GitHub
// 4. Your app updates automatically!
//
// ============================================

const appContent = {
    
    // ============================================
    // LEARN SKILLS SECTION
    // ============================================
    
    learnSkills: [
        {
            level: "beginner",
            title: "Understanding Command Words",
            description: "Command words tell you how to answer the question. Each requires a different approach:",
            points: [
                "<strong>Define:</strong> Give a precise meaning (1-2 marks)",
                "<strong>Explain:</strong> Show cause and effect with reasoning (4-6 marks)",
                "<strong>Analyse:</strong> Break down and examine in detail, showing links (8-10 marks)",
                "<strong>Evaluate:</strong> Weigh up strengths and weaknesses, make a judgment (12-25 marks)"
            ]
        },
        {
            level: "intermediate",
            title: "Using Economic Diagrams",
            description: "Diagrams are essential for higher marks in Economics:",
            points: [
                "Always label axes clearly (Price, Quantity)",
                "Label curves (S for supply, D for demand, etc.)",
                "Show shifts with arrows and explain the direction",
                "Mark equilibrium points clearly (E1, E2)",
                "Reference your diagram in your written answer"
            ]
        },
        {
            level: "intermediate",
            title: "Chain of Reasoning",
            description: "Build arguments step by step:",
            points: [
                "Start with the economic concept or theory",
                "Explain the mechanism (how it works)",
                "Show the impact on different stakeholders",
                "Consider short-term vs long-term effects",
                "Link back to the question context"
            ]
        },
        {
            level: "advanced",
            title: "Evaluation Techniques",
            description: "For high-level evaluation questions (20-25 marks):",
            points: [
                "Use \"however\" to present counter-arguments",
                "Consider time periods (short-run vs long-run)",
                "Discuss assumptions and their validity",
                "Evaluate using different economic perspectives",
                "Consider context: developed vs developing economies",
                "Reach a supported judgment in your conclusion"
            ]
        },
        {
            level: "advanced",
            title: "Using Real-World Examples",
            description: "Examples strengthen your answers significantly:",
            points: [
                "Current events (last 2-3 years are best)",
                "Specific countries or companies",
                "Statistical evidence (with approximate figures)",
                "Historical comparisons where relevant",
                "Always link examples back to theory"
            ]
        }
    ],
    
    // ============================================
    // PRACTICE QUESTIONS SECTION
    // ============================================
    
    practiceQuestions: [
        {
            id: 1,
            topic: "Microeconomics",
            marks: 10,
            question: "Analyse the effects of introducing a minimum wage above the equilibrium wage in a competitive labour market.",
            tip: "Include a diagram and consider both demand and supply-side effects"
        },
        {
            id: 2,
            topic: "Macroeconomics",
            marks: 15,
            question: "Evaluate the effectiveness of fiscal policy in reducing unemployment during a recession.",
            tip: "Consider both expansionary measures and their limitations"
        }
    ],
    
    // Quick quiz questions
    quizQuestions: [
        {
            id: 1,
            question: "Which command word requires you to make a judgment?",
            options: [
                "Define",
                "Explain",
                "Analyse",
                "Evaluate"
            ],
            correctAnswer: 3, // Index of correct answer (0-based, so 3 = "Evaluate")
            explanation: "\"Evaluate\" requires you to weigh up different points and make a judgment."
        }
    ],
    
    // ============================================
    // PROGRESS TRACKER SECTION
    // ============================================
    
    progressStats: {
        overall: 67,
        questionsCompleted: 24,
        skillsMastered: 18,
        practiceTests: 5
    },
    
    topicProgress: [
        {
            topic: "Microeconomics",
            percentage: 75
        },
        {
            topic: "Macroeconomics",
            percentage: 60
        },
        {
            topic: "Evaluation Skills",
            percentage: 45
        }
    ],
    
    recentActivity: [
        "Completed \"Market Failure\" practice set - 8/10 marks ✅",
        "Mastered skill: \"Using Economic Diagrams\" 🎯",
        "Participated in marking exercise - 85% accuracy 📊",
        "Uploaded essay on \"Monetary Policy\" - Awaiting feedback ⏳"
    ],
    
    recommendations: [
        "Practice more evaluation questions to improve from 45% to 60%",
        "Review chain of reasoning for macroeconomic topics",
        "Complete marking exercise on \"Fiscal Policy\""
    ],
    
    // ============================================
    // MARKING PRACTICE SECTION
    // ============================================
    
    markingExercises: [
        {
            id: 1,
            question: "Explain two reasons why firms may experience economies of scale. (6 marks)",
            studentAnswer: `Firms experience economies of scale because they can buy in bulk. When they produce more, they can negotiate better prices with suppliers, which reduces their average costs.

Another reason is specialization. Larger firms can have workers focus on specific tasks, making them more efficient and productive.`,
            markScheme: {
                marksPerReason: 3,
                criteria: [
                    "1 mark: Identification of the economy of scale",
                    "1 mark: Explanation of how it works",
                    "1 mark: Link to reducing average costs"
                ],
                possibleReasons: [
                    "Purchasing economies (bulk buying)",
                    "Technical economies (efficient machinery)",
                    "Managerial economies (specialist managers)",
                    "Financial economies (better loan rates)",
                    "Marketing economies (spread ad costs)"
                ]
            },
            examinerFeedback: {
                totalMarks: 6,
                awarded: 5,
                breakdown: [
                    {
                        reason: "Purchasing",
                        marks: 3,
                        comment: "Clear identification, good explanation, and link to average costs."
                    },
                    {
                        reason: "Specialisation",
                        marks: 2,
                        comment: "Identified and explained well, but didn't explicitly link to \"reducing average costs\" or \"improving productivity\" sufficiently."
                    }
                ],
                tip: "Always ensure each point explicitly connects back to the question's requirement (in this case, how it leads to economies of scale/lower average costs)."
            }
        }
    ],
    
    // ============================================
    // DISCUSSION TOPICS SECTION
    // ============================================
    
    discussionTopics: [
        {
            id: 1,
            title: "Marking Practice - Economies of Scale Question",
            students: 12,
            comments: 8,
            lastActivity: "2 hours ago"
        },
        {
            id: 2,
            title: "Tips for 25-mark evaluation questions",
            students: 18,
            comments: 15,
            lastActivity: "5 hours ago"
        },
        {
            id: 3,
            title: "Understanding AD-AS Diagrams",
            students: 9,
            comments: 6,
            lastActivity: "1 day ago"
        }
    ],
    
    // Sample chat messages
    chatMessages: [
        {
            sender: "Teacher - Ms. Johnson",
            message: "Remember to always link your economies of scale back to \"reducing average costs\" explicitly!",
            isUser: false
        },
        {
            sender: "You",
            message: "Thanks! I see now why my second point only got 2/3 marks.",
            isUser: true
        },
        {
            sender: "Student - Alex",
            message: "I marked it as 4/6. I thought specialisation needed more detail about division of labour.",
            isUser: false
        },
        {
            sender: "Teacher - Ms. Johnson",
            message: "That's a good observation Alex! The key is that the student DID explain specialisation well, but didn't explicitly connect it to lower costs.",
            isUser: false
        }
    ],
    
    // ============================================
    // AI ASSESSMENT SECTION
    // ============================================
    
    assessmentInfo: [
        "<strong>Mark Allocation:</strong> AI identifies which mark scheme points you've covered",
        "<strong>Structure Analysis:</strong> Checks if you've used paragraphs, diagrams, and conclusions effectively",
        "<strong>Content Depth:</strong> Evaluates the quality of your explanations and chain of reasoning",
        "<strong>Economic Language:</strong> Assesses use of terminology and concepts",
        "<strong>Feedback:</strong> Provides specific suggestions for improvement"
    ],
    
    sampleFeedback: {
        mark: "17/20",
        strengths: [
            "Clear use of supply and demand diagrams with proper labels",
            "Good chain of reasoning linking minimum wage to unemployment",
            "Evaluated short-term vs long-term effects"
        ],
        improvements: [
            "Could strengthen evaluation with real-world examples (e.g., UK minimum wage impact)",
            "Consider discussing monopsony labour markets as a counter-argument",
            "Conclusion could be more decisive with a clear judgment"
        ]
    }
};

// Export for use in index.html
if (typeof module !== 'undefined' && module.exports) {
    module.exports = appContent;
}
