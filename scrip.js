let users = JSON.parse(localStorage.getItem('users')) || [];
        let registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
        let language = 'en';
        let currentUser = null;

        function setLanguage() {
            language = document.querySelector('input[name="language"]:checked').value;
            document.getElementById('languageContainer').classList.add('hidden');
            document.getElementById('accountChoiceContainer').classList.remove('hidden');
            updateLanguage();
        }

        function updateLanguage() {
            const translations = {
                en: {
                    accountChoiceTitle: "Account Options",
                    accountQuestion: "Do you have an account with us?",
                    loginTitle: "Login",
                    loginEmailLabel: "Email",
                    loginPasswordLabel: "Password",
                    regTitle: "Register",
                    emailLabel: "Email",
                    passwordLabel: "Password",
                    infoTitle: "Basic Information",
                    nameLabel: "Your Name:",
                    genderLabel: "Gender:",
                    weightLabel: "Weight (kg):",
                    heightLabel: "Height (cm):",
                    ageLabel: "Age:",
                    activityLabel: "Activity Level:",
                    goalLabel: "Goal:",
                    fatLabel: "Body Fat Percentage (%):",
                    waterLabel: "Body Water Percentage (%):",
                    planLabel: "Choose Your Plan:",
                    supplementsLabel: "Do You Want Supplements?",
                    resultsTitle: "Results",
                    needsTitle: "Your Daily Needs:",
                    mealTitle: "Meal Plan",
                    breakfastLabel: "Breakfast",
                    lunchLabel: "Lunch",
                    dinnerLabel: "Dinner",
                    snacksLabel: "Snacks",
                    totalLabel: "Total Consumed",
                    vitaminsTitle: "Your Vitamin and Mineral Needs",
                    fitnessTitle: "Workout Plan",
                    gymDaysLabel: "How many days per week will you go to the gym?",
                    systemLabel: "Your Training System:",
                    suppLabel: "Suggested Sports Supplements:",
                    muscleLabel: "What will you train today?"
                },
                ar: {
                    accountChoiceTitle: "خيارات الحساب",
                    accountQuestion: "هل لديك حساب لدينا؟",
                    loginTitle: "تسجيل الدخول",
                    loginEmailLabel: "البريد الإلكتروني",
                    loginPasswordLabel: "كلمة المرور",
                    regTitle: "تسجيل",
                    emailLabel: "البريد الإلكتروني",
                    passwordLabel: "كلمة المرور",
                    infoTitle: "المعلومات الأساسية",
                    nameLabel: "اسمك:",
                    genderLabel: "الجنس:",
                    weightLabel: "الوزن (كجم):",
                    heightLabel: "الطول (سم):",
                    ageLabel: "العمر:",
                    activityLabel: "مستوى النشاط:",
                    goalLabel: "الهدف:",
                    fatLabel: "نسبة الدهون في الجسم (%):",
                    waterLabel: "نسبة الماء في الجسم (%):",
                    planLabel: "اختر خطتك:",
                    supplementsLabel: "هل تريد مكملات؟",
                    resultsTitle: "النتائج",
                    needsTitle: "احتياجاتك اليومية:",
                    mealTitle: "خطة الوجبات",
                    breakfastLabel: "الفطور",
                    lunchLabel: "الغداء",
                    dinnerLabel: "العشاء",
                    snacksLabel: "الوجبات الخفيفة",
                    totalLabel: "الإجمالي المستهلك",
                    vitaminsTitle: "احتياجاتك من الفيتامينات والمعادن",
                    fitnessTitle: "خطة التمارين",
                    gymDaysLabel: "كم عدد الأيام في الأسبوع التي ستذهب إلى الجيم؟",
                    systemLabel: "نظام تدريبك:",
                    suppLabel: "مكملات رياضية مقترحة:",
                    muscleLabel: "ماذا ستدرب اليوم؟"
                }
            };

            const langData = translations[language];
            document.getElementById('accountChoiceTitle').textContent = langData.accountChoiceTitle;
            document.getElementById('accountQuestion').textContent = langData.accountQuestion;
            document.getElementById('hasAccountBtn').textContent = langData.hasAccountBtn || "Yes, I have an account / نعم، لدي حساب";
            document.getElementById('noAccountBtn').textContent = langData.noAccountBtn || "No, I don’t have an account / لا، ليس لدي حساب";
            document.getElementById('loginTitle').textContent = langData.loginTitle;
            document.getElementById('loginEmailLabel').textContent = langData.loginEmailLabel;
            document.getElementById('loginPasswordLabel').textContent = langData.loginPasswordLabel;
            document.getElementById('regTitle').textContent = langData.regTitle;
            document.getElementById('emailLabel').textContent = langData.emailLabel;
            document.getElementById('passwordLabel').textContent = langData.passwordLabel;
            document.getElementById('infoTitle').textContent = langData.infoTitle;
            document.getElementById('nameLabel').textContent = langData.nameLabel;
            document.getElementById('genderLabel').textContent = langData.genderLabel;
            document.getElementById('weightLabel').textContent = langData.weightLabel;
            document.getElementById('heightLabel').textContent = langData.heightLabel;
            document.getElementById('ageLabel').textContent = langData.ageLabel;
            document.getElementById('activityLabel').textContent = langData.activityLabel;
            document.getElementById('goalLabel').textContent = langData.goalLabel;
            document.getElementById('fatLabel').textContent = langData.fatLabel;
            document.getElementById('waterLabel').textContent = langData.waterLabel;
            document.getElementById('planLabel').textContent = langData.planLabel;
            document.getElementById('supplementsLabel').textContent = langData.supplementsLabel;
            document.getElementById('resultsTitle').textContent = langData.resultsTitle;
            document.getElementById('needsTitle').textContent = langData.needsTitle;
            document.getElementById('mealTitle').textContent = langData.mealTitle;
            document.getElementById('breakfastLabel').textContent = langData.breakfastLabel;
            document.getElementById('lunchLabel').textContent = langData.lunchLabel;
            document.getElementById('dinnerLabel').textContent = langData.dinnerLabel;
            document.getElementById('snacksLabel').textContent = langData.snacksLabel;
            document.getElementById('totalLabel').textContent = langData.totalLabel;
            document.getElementById('vitaminsTitle').textContent = langData.vitaminsTitle;
            document.getElementById('fitnessTitle').textContent = langData.fitnessTitle;
            document.getElementById('gymDaysLabel').textContent = langData.gymDaysLabel;
            document.getElementById('systemLabel').textContent = langData.systemLabel;
            document.getElementById('suppLabel').textContent = langData.suppLabel;
            document.getElementById('muscleLabel').textContent = langData.muscleLabel;
            document.querySelector('#userForm button[type="submit"]').textContent = language === 'en' ? 'Calculate My Needs' : 'احسب احتياجاتي';
            document.querySelector('#showPlanBtn').textContent = language === 'en' ? 'Show Plan' : 'اعرض الخطة';
            document.querySelector('#showExercisesBtn').textContent = language === 'en' ? 'Show Exercises' : 'اعرض التمارين';
            document.querySelectorAll('.meal-btn').forEach(btn => {
                btn.textContent = language === 'en' ? `Select ${btn.getAttribute('data-meal').charAt(0).toUpperCase() + btn.getAttribute('data-meal').slice(1)}` : `اختر ${btn.getAttribute('data-meal')}`;
            });
            document.getElementById('snacksBtn').textContent = language === 'en' ? 'Select Snacks' : 'اختر الوجبات الخفيفة';
            document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
        }

        document.getElementById('hasAccountBtn').addEventListener('click', function() {
            document.getElementById('accountChoiceContainer').classList.add('hidden');
            document.getElementById('loginContainer').classList.remove('hidden');
        });

        document.getElementById('noAccountBtn').addEventListener('click', function() {
            document.getElementById('accountChoiceContainer').classList.add('hidden');
            document.getElementById('registrationContainer').classList.remove('hidden');
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const loginError = document.getElementById('loginError');
            const message = document.getElementById('message');

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                loginError.style.display = 'none';
                currentUser = user;
                message.textContent = language === 'en' ? 'Login successful! Welcome, ' + email : 'تم تسجيل الدخول بنجاح! أهلاً بك، ' + email;
                document.getElementById('loginContainer').classList.add('hidden');
                document.getElementById('mainHeader').classList.remove('hidden');
                document.getElementById('user-info').classList.remove('hidden');
            } else {
                loginError.style.display = 'block';
                message.textContent = '';
            }
        });

        document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const emailError = document.getElementById('emailError');
            const message = document.getElementById('message');

            if (registeredEmails.includes(email)) {
                emailError.style.display = 'block';
                return;
            }
            emailError.style.display = 'none';

            const userData = { email, password, data: { calories: 0, workouts: [], name: "", gender: "", weight: 0, height: 0, age: 0, activityLevel: 1, goal: 1, fatPercentage: 0, waterPercentage: 0, planType: 1, wantsSupplements: "yes" } };
            users.push(userData);
            registeredEmails.push(email);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('registeredEmails', JSON.stringify(registeredEmails));
            currentUser = userData;

            message.textContent = language === 'en' ? 'Registration successful! Welcome, ' + email : 'تم التسجيل بنجاح! أهلاً بك، ' + email;
            document.getElementById('registrationContainer').classList.add('hidden');
            document.getElementById('mainHeader').classList.remove('hidden');
            document.getElementById('user-info').classList.remove('hidden');
        });

        document.addEventListener('DOMContentLoaded', function() {
            let userData = {
                name: "",
                gender: "",
                weight: 0,
                height: 0,
                age: 0,
                activityLevel: 1,
                goal: 1,
                fatPercentage: 0,
                waterPercentage: 0,
                planType: 1,
                wantsSupplements: "yes",
                dailyCalories: 0,
                dailyProtein: 0,
                dailyFat: 0,
                dailyCarbs: 0,
                dailyWater: 0,
                vitaminC: 0,
                vitaminD: 0,
                calcium: 0,
                iron: 0,
                totalCalories: 0,
                totalProtein: 0,
                totalCarbs: 0
            };

            const foodOptions = {
                breakfast: [
                    {name: "Grilled Eggs", calories: 155, protein: 13},
                    {name: "Oatmeal with Milk", calories: 150, protein: 5},
                    {name: "Banana", calories: 90, protein: 1.2},
                    {name: "Cheese Toast", calories: 200, protein: 8},
                    {name: "Low-Fat Milk", calories: 120, protein: 8},
                    {name: "Greek Yogurt", calories: 100, protein: 10},
                    {name: "White Cheese", calories: 50, protein: 3},
                    {name: "Honey on Bread", calories: 180, protein: 2},
                    {name: "Avocado on Toast", calories: 250, protein: 4},
                    {name: "Almond Butter", calories: 200, protein: 7},
                    {name: "Fava Beans", calories: 130, protein: 5},
                    {name: "Dates with Cheese", calories: 220, protein: 6},
                    {name: "Boiled Eggs", calories: 140, protein: 12},
                    {name: "Oatmeal with Banana", calories: 180, protein: 6},
                    {name: "Brown Bread", calories: 120, protein: 4},
                    {name: "Coconut Milk", calories: 140, protein: 1},
                    {name: "Yogurt with Fruits", calories: 150, protein: 7},
                    {name: "Cream Cheese", calories: 90, protein: 2},
                    {name: "Natural Jam", calories: 100, protein: 0.5},
                    {name: "Chia Seeds", calories: 130, protein: 5},
                    {name: "Dried Figs", calories: 110, protein: 1},
                    {name: "Pickled Cucumber", calories: 15, protein: 0.3},
                    {name: "Olive Oil", calories: 120, protein: 0},
                    {name: "Rusks", calories: 90, protein: 2},
                    {name: "Smoked Salmon", calories: 180, protein: 20},
                    {name: "Fried Eggs", calories: 180, protein: 14},
                    {name: "Oatmeal with Honey", calories: 160, protein: 4},
                    {name: "Banana with Butter", calories: 220, protein: 3},
                    {name: "Bread with Tahini", calories: 200, protein: 6},
                    {name: "Almond Milk", calories: 90, protein: 1},
                    {name: "Yogurt with Nuts", calories: 200, protein: 9},
                    {name: "Dutch Cheese", calories: 110, protein: 7},
                    {name: "Dates", calories: 130, protein: 1},
                    {name: "Fava with Oil", calories: 150, protein: 6},
                    {name: "Rice Cakes", calories: 110, protein: 2},
                    {name: "Baked Apple", calories: 95, protein: 0.5},
                    {name: "Peanut Butter", calories: 190, protein: 7},
                    {name: "Whole Grain Bread", calories: 130, protein: 5},
                    {name: "Soy Milk", calories: 100, protein: 3},
                    {name: "Yogurt with Oatmeal", calories: 170, protein: 8},
                    {name: "Romano Cheese", calories: 120, protein: 9},
                    {name: "Dried Dates", calories: 140, protein: 2},
                    {name: "Fava with Garlic", calories: 160, protein: 7},
                    {name: "Plain Biscuits", calories: 100, protein: 2},
                    {name: "Orange", calories: 60, protein: 1},
                    {name: "Cashew Butter", calories: 180, protein: 5},
                    {name: "Corn Bread", calories: 150, protein: 3},
                    {name: "Oat Milk", calories: 110, protein: 2},
                    {name: "Yogurt with Honey", calories: 140, protein: 6},
                    {name: "Cheese with Honey", calories: 130, protein: 5},
                    {name: "Pita Bread", calories: 120, protein: 4},
                    {name: "Fava with Tahini", calories: 170, protein: 8},
                    {name: "Eggs with Thyme", calories: 160, protein: 13},
                    {name: "Oatmeal with Nuts", calories: 220, protein: 7},
                    {name: "Banana with Milk", calories: 150, protein: 5},
                    {name: "Sesame Bread", calories: 140, protein: 5}
                ],
                lunch: [
                    {name: "Grilled Chicken Breast", calories: 165, protein: 31},
                    {name: "White Rice", calories: 130, protein: 2.7},
                    {name: "Green Salad", calories: 30, protein: 1},
                    {name: "Grilled Fish", calories: 200, protein: 25},
                    {name: "Pasta with Sauce", calories: 180, protein: 6},
                    {name: "Beef Steak", calories: 300, protein: 28},
                    {name: "Cooked Broccoli", calories: 50, protein: 3},
                    {name: "Quinoa", calories: 120, protein: 4},
                    {name: "Cooked Lentils", calories: 115, protein: 9},
                    {name: "Baked Potatoes", calories: 130, protein: 2},
                    {name: "Chicken Curry", calories: 250, protein: 25},
                    {name: "Rice with Veggies", calories: 150, protein: 3},
                    {name: "Tuna Salad", calories: 180, protein: 20},
                    {name: "Salmon", calories: 250, protein: 23},
                    {name: "Pasta with Cheese", calories: 220, protein: 8},
                    {name: "Lamb Meat", calories: 300, protein: 25},
                    {name: "Stuffed Zucchini", calories: 140, protein: 4},
                    {name: "Quinoa with Veggies", calories: 160, protein: 5},
                    {name: "Fava Beans", calories: 130, protein: 5},
                    {name: "Potatoes with Butter", calories: 180, protein: 2},
                    {name: "Chicken with Thyme", calories: 200, protein: 28},
                    {name: "Rice with Raisins", calories: 170, protein: 3},
                    {name: "Fruit Salad", calories: 90, protein: 1},
                    {name: "Fried Fish", calories: 220, protein: 22},
                    {name: "Pasta with Béchamel", calories: 250, protein: 7},
                    {name: "Chicken Steak", calories: 180, protein: 30},
                    {name: "Broccoli with Garlic", calories: 70, protein: 3},
                    {name: "Quinoa with Chicken", calories: 220, protein: 25},
                    {name: "Lentils with Rice", calories: 160, protein: 8},
                    {name: "Spiced Potatoes", calories: 150, protein: 2},
                    {name: "Oven-Grilled Chicken", calories: 240, protein: 27},
                    {name: "Rice with Soy", calories: 140, protein: 4},
                    {name: "Quinoa Salad", calories: 120, protein: 5},
                    {name: "Fish with Lemon", calories: 180, protein: 22},
                    {name: "Pasta with Veggies", calories: 160, protein: 5},
                    {name: "Meat with Sauce", calories: 280, protein: 26},
                    {name: "Zucchini with Oil", calories: 100, protein: 2},
                    {name: "Grilled Quinoa", calories: 130, protein: 4},
                    {name: "Fava with Tomato", calories: 150, protein: 6},
                    {name: "Fried Potatoes", calories: 200, protein: 3},
                    {name: "Chicken with Cumin", calories: 220, protein: 26},
                    {name: "Rice with Pepper", calories: 160, protein: 3},
                    {name: "Egg Salad", calories: 140, protein: 10},
                    {name: "Spiced Fish", calories: 210, protein: 24},
                    {name: "Pasta with Meat", calories: 250, protein: 15},
                    {name: "Steak with Pepper", calories: 320, protein: 29},
                    {name: "Grilled Broccoli", calories: 60, protein: 3},
                    {name: "Quinoa with Parsley", calories: 140, protein: 5},
                    {name: "Lentils with Oil", calories: 170, protein: 9},
                    {name: "Potatoes with Turmeric", calories: 160, protein: 2},
                    {name: "Chicken with Olives", calories: 230, protein: 27},
                    {name: "Rice with Onion", calories: 150, protein: 3},
                    {name: "Cucumber Salad", calories: 20, protein: 1},
                    {name: "Fish with Garlic", calories: 190, protein: 23},
                    {name: "Pasta with Parsley", calories: 170, protein: 6}
                ],
                dinner: [
                    {name: "Beef Steak", calories: 300, protein: 28},
                    {name: "Mashed Potatoes", calories: 150, protein: 2},
                    {name: "Sautéed Broccoli", calories: 60, protein: 3},
                    {name: "Vegetable Soup", calories: 80, protein: 2},
                    {name: "Syrian Bread", calories: 200, protein: 6},
                    {name: "Grilled Chicken", calories: 240, protein: 27},
                    {name: "Grilled Salmon", calories: 250, protein: 25},
                    {name: "Sweet Potatoes", calories: 100, protein: 2},
                    {name: "Fried Tofu", calories: 180, protein: 15},
                    {name: "Cooked Spinach", calories: 40, protein: 3},
                    {name: "Chicken Steak", calories: 180, protein: 30},
                    {name: "Potatoes with Butter", calories: 180, protein: 2},
                    {name: "Broccoli with Lemon", calories: 70, protein: 3},
                    {name: "Lentil Soup", calories: 120, protein: 5},
                    {name: "Brown Bread", calories: 130, protein: 4},
                    {name: "Oven Chicken", calories: 220, protein: 26},
                    {name: "Salmon with Honey", calories: 270, protein: 24},
                    {name: "Spiced Potatoes", calories: 160, protein: 2},
                    {name: "Tofu with Soy", calories: 150, protein: 12},
                    {name: "Spinach with Garlic", calories: 50, protein: 3},
                    {name: "Steak with Pepper", calories: 320, protein: 29},
                    {name: "Baked Potatoes", calories: 130, protein: 2},
                    {name: "Broccoli with Oil", calories: 80, protein: 3},
                    {name: "Chicken Soup", calories: 100, protein: 6},
                    {name: "Thyme Bread", calories: 180, protein: 5},
                    {name: "Chicken with Turmeric", calories: 230, protein: 27},
                    {name: "Salmon with Lemon", calories: 240, protein: 23},
                    {name: "Red Potatoes", calories: 110, protein: 2},
                    {name: "Grilled Tofu", calories: 160, protein: 14},
                    {name: "Spinach with Parsley", calories: 45, protein: 3},
                    {name: "Grilled Steak", calories: 290, protein: 28},
                    {name: "Potatoes with Cumin", calories: 140, protein: 2},
                    {name: "Broccoli with Sesame", calories: 90, protein: 4},
                    {name: "Vegetable Soup", calories: 90, protein: 2},
                    {name: "Garlic Bread", calories: 190, protein: 5},
                    {name: "Chicken with Olives", calories: 250, protein: 26},
                    {name: "Spiced Salmon", calories: 260, protein: 25},
                    {name: "Potatoes with Oil", calories: 170, protein: 2},
                    {name: "Tofu with Veggies", calories: 140, protein: 13},
                    {name: "Grilled Spinach", calories: 50, protein: 3},
                    {name: "Steak with Garlic", calories: 310, protein: 29},
                    {name: "Potatoes with Pepper", calories: 150, protein: 2},
                    {name: "Broccoli with Cheese", calories: 100, protein: 5},
                    {name: "Tomato Soup", calories: 70, protein: 2},
                    {name: "Sesame Bread", calories: 170, protein: 5},
                    {name: "Chicken with Parsley", calories: 230, protein: 27},
                    {name: "Grilled Salmon", calories: 250, protein: 25},
                    {name: "Potatoes with Turmeric", calories: 160, protein: 2},
                    {name: "Tofu with Lemon", calories: 150, protein: 12},
                    {name: "Spinach with Oil", calories: 60, protein: 3},
                    {name: "Steak with Cumin", calories: 300, protein: 28}
                ],
                snacks: [
                    {name: "Greek Yogurt", calories: 100, protein: 10},
                    {name: "Mixed Nuts", calories: 200, protein: 5},
                    {name: "Apple", calories: 52, protein: 0.3},
                    {name: "Cream Cheese", calories: 90, protein: 2},
                    {name: "Dark Chocolate", calories: 150, protein: 2},
                    {name: "Protein Bar", calories: 200, protein: 20},
                    {name: "Plain Popcorn", calories: 120, protein: 3},
                    {name: "Granola", calories: 180, protein: 4},
                    {name: "Small Banana", calories: 70, protein: 1},
                    {name: "Hummus", calories: 150, protein: 7},
                    {name: "Roasted Almonds", calories: 160, protein: 6},
                    {name: "Dates", calories: 120, protein: 1},
                    {name: "Yogurt with Honey", calories: 140, protein: 6},
                    {name: "Walnuts", calories: 180, protein: 4},
                    {name: "Chocolate with Nuts", calories: 200, protein: 5}
                ]
            };

            const userForm = document.getElementById('userForm');
            const resultsSection = document.getElementById('results');
            const requirementsSection = document.getElementById('requirements');
            const mealPlanSection = document.getElementById('mealPlanSection');
            const vitaminsSection = document.getElementById('vitaminsSection');
            const fitnessPlanSection = document.getElementById('fitnessPlanSection');
            const showPlanBtn = document.getElementById('showPlanBtn');
            const trainingSystem = document.getElementById('trainingSystem');
            const systemDescription = document.getElementById('systemDescription');
            const supplementsSection = document.getElementById('supplementsSection');
            const supplementsList = document.getElementById('supplementsList');
            const muscleGroupsSection = document.getElementById('muscleGroupsSection');
            const showExercisesBtn = document.getElementById('showExercisesBtn');
            const exercisesSection = document.getElementById('exercisesSection');
            const totalConsumed = document.getElementById('totalConsumed');
            const snacksSection = document.getElementById('snacksSection');
            const snacksBtn = document.getElementById('snacksBtn');
            const mealButtons = document.querySelectorAll('.meal-btn');

            if (userForm) userForm.addEventListener('submit', handleFormSubmit);
            if (showPlanBtn) showPlanBtn.addEventListener('click', showTrainingPlan);
            if (showExercisesBtn) showExercisesBtn.addEventListener('click', showExercises);
            if (snacksBtn) snacksBtn.addEventListener('click', () => showMealSelection('snacks'));
            if (mealButtons) mealButtons.forEach(btn => btn.addEventListener('click', function() { showMealSelection(this.getAttribute('data-meal')); }));

            function handleFormSubmit(e) {
                if (e && userForm) {
                    e.preventDefault();
                    userData.name = document.getElementById('userName').value;
                    userData.gender = document.querySelector('input[name="gender"]:checked')?.value || "";
                    userData.weight = parseFloat(document.getElementById('weight').value) || 0;
                    userData.height = parseFloat(document.getElementById('height').value) || 0;
                    userData.age = parseInt(document.getElementById('age').value) || 0;
                    userData.activityLevel = parseInt(document.getElementById('activityLevel').value) || 1;
                    userData.goal = parseInt(document.getElementById('goal').value) || 1;
                    userData.fatPercentage = parseFloat(document.getElementById('fatPercentage').value) || 0;
                    userData.waterPercentage = parseFloat(document.getElementById('waterPercentage').value) || 0;
                    userData.planType = parseInt(document.querySelector('input[name="planType"]:checked')?.value) || 1;
                    userData.wantsSupplements = document.querySelector('input[name="supplements"]:checked')?.value || "yes";
                    calculateRequirements();
                    showResults();
                    if (currentUser) {
                        currentUser.data = { ...currentUser.data, ...userData };
                        localStorage.setItem('users', JSON.stringify(users));
                    }
                }
            }

            function calculateRequirements() {
                let bmr;
                if (userData.gender === "male") {
                    bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age + 5;
                } else {
                    bmr = 10 * userData.weight + 6.25 * userData.height - 5 * userData.age - 161;
                }
                const activityMultiplier = [1.2, 1.375, 1.55, 1.725, 1.9];
                userData.dailyCalories = bmr * (activityMultiplier[userData.activityLevel - 1] || 0);
                if (userData.goal === 1) userData.dailyCalories += 500;
                else if (userData.goal === 2) userData.dailyCalories -= 500;
                userData.dailyProtein = userData.weight * (userData.goal === 1 ? 2.0 : 1.5) || 0;
                userData.dailyFat = userData.fatPercentage * userData.weight / 100.0 || 0;
                const caloriesFromProtein = userData.dailyProtein * 4;
                const caloriesFromFat = userData.dailyFat * 9;
                const remainingCalories = userData.dailyCalories - (caloriesFromProtein + caloriesFromFat);
                userData.dailyCarbs = remainingCalories / 4 || 0;
                userData.dailyWater = userData.weight * 35 || 0;
                calculateVitaminsAndMinerals();
            }

            function calculateVitaminsAndMinerals() {
                if (userData.gender === "male") {
                    userData.vitaminC = (userData.age > 18) ? 90 : 75;
                    userData.vitaminD = 15;
                    userData.calcium = 1000;
                    userData.iron = (userData.age > 18) ? 8 : 11;
                } else {
                    userData.vitaminC = (userData.age > 18) ? 75 : 65;
                    userData.vitaminD = 15;
                    userData.calcium = (userData.age > 50) ? 1200 : 1000;
                    userData.iron = (userData.age > 18) ? 18 : 15;
                }
            }

            function showResults() {
                const userInfo = document.getElementById('user-info');
                if (userInfo) userInfo.classList.add('hidden');
                if (resultsSection) resultsSection.classList.remove('hidden');
                if (requirementsSection) {
                    requirementsSection.classList.remove('hidden');
                    document.getElementById('caloriesResult').textContent = userData.dailyCalories.toFixed(0);
                    document.getElementById('proteinResult').textContent = userData.dailyProtein.toFixed(1);
                    document.getElementById('fatResult').textContent = userData.dailyFat.toFixed(1);
                    document.getElementById('carbsResult').textContent = userData.dailyCarbs.toFixed(1);
                    document.getElementById('waterResult').textContent = userData.dailyWater.toFixed(0);
                }
                if (userData.planType === 1 || userData.planType === 3) {
                    if (mealPlanSection) mealPlanSection.classList.remove('hidden');
                    if (vitaminsSection) {
                        vitaminsSection.classList.remove('hidden');
                        document.getElementById('vitaminC').textContent = userData.vitaminC;
                        document.getElementById('vitaminD').textContent = userData.vitaminD;
                        document.getElementById('calcium').textContent = userData.calcium;
                        document.getElementById('iron').textContent = userData.iron;
                    }
                }
                if (userData.planType === 2 || userData.planType === 3) {
                    if (fitnessPlanSection) fitnessPlanSection.classList.remove('hidden');
                    if (muscleGroupsSection) muscleGroupsSection.classList.remove('hidden');
                    if (userData.wantsSupplements === "yes" && supplementsSection) {
                        supplementsSection.classList.remove('hidden');
                        if (supplementsList) {
                            supplementsList.innerHTML = '';
                            const supplements = [
                                "Whey Protein: 1-2 scoops (25-50g) post-workout",
                                "Creatine Monohydrate: 5g daily",
                                "Pre-Workout: 1 scoop 20-30 minutes before workout",
                                "BCAAs: 5-10g during workout",
                                "Multivitamins: 1 tablet daily with a meal",
                                "Omega-3 Fish Oil: 1-2 capsules daily with meals"
                            ];
                            supplements.forEach(supplement => {
                                const li = document.createElement('li');
                                li.textContent = supplement;
                                supplementsList.appendChild(li);
                            });
                        }
                    } else if (supplementsSection) {
                        supplementsSection.classList.add('hidden');
                    }
                }
            }

            function showMealSelection(mealType) {
                const mealContainer = document.getElementById(mealType).querySelector('.meal-options');
                if (mealContainer) {
                    mealContainer.innerHTML = '';
                    const mealOptions = foodOptions[mealType].slice(0, mealType === 'snacks' ? 15 : 60);
                    mealOptions.forEach((item, index) => {
                        const mealItem = document.createElement('div');
                        mealItem.className = 'meal-item';
                        mealItem.innerHTML = `<label for="meal-${mealType}-${index}">${item.name} (per 100g: ${item.calories} kcal, ${item.protein} g protein)</label><input type="number" id="meal-${mealType}-${index}-weight" min="0" placeholder="Amount (g)" style="width: 60px;">`;
                        mealContainer.appendChild(mealItem);
                    });
                    const confirmBtn = document.createElement('button');
                    confirmBtn.className = 'btn';
                    confirmBtn.textContent = 'Confirm Selection / تأكيد الاختيار';
                    confirmBtn.addEventListener('click', () => confirmMealSelection(mealType));
                    mealContainer.appendChild(confirmBtn);
                }
            }

            function confirmMealSelection(mealType) {
                const mealOptions = foodOptions[mealType].slice(0, mealType === 'snacks' ? 15 : 60);
                let totalMealCalories = 0;
                let totalMealProtein = 0;
                mealOptions.forEach((item, index) => {
                    const weightInput = document.getElementById(`meal-${mealType}-${index}-weight`);
                    if (weightInput && weightInput.value) {
                        const weight = parseFloat(weightInput.value);
                        if (weight > 0) {
                            totalMealCalories += (item.calories * weight) / 100;
                            totalMealProtein += (item.protein * weight) / 100;
                        }
                    }
                });
                if (totalMealCalories > 0) {
                    const mealContainer = document.getElementById(mealType).querySelector('.meal-options');
                    if (mealContainer) {
                        mealContainer.innerHTML = `<p>Selected: ${totalMealCalories.toFixed(1)} kcal, ${totalMealProtein.toFixed(1)} g protein</p>`;
                        userData.totalCalories += totalMealCalories;
                        userData.totalProtein += totalMealProtein;
                        userData.totalCarbs += (totalMealCalories - (totalMealProtein * 4)) / 4;
                        if (totalConsumed) {
                            totalConsumed.classList.remove('hidden');
                            document.getElementById('totalCalories').textContent = userData.totalCalories.toFixed(1);
                            document.getElementById('totalProtein').textContent = userData.totalProtein.toFixed(1);
                            document.getElementById('totalCarbs').textContent = userData.totalCarbs.toFixed(1);
                        }
                        const remainingCalories = userData.dailyCalories - userData.totalCalories;
                        const remainingElement = document.getElementById(`remainingCalories${mealType.charAt(0).toUpperCase() + mealType.slice(1)}`);
                        if (remainingElement) remainingElement.textContent = remainingCalories.toFixed(0);
                        if (mealType === 'dinner' && snacksSection) snacksSection.classList.remove('hidden');
                    }
                }
                const editYes = document.getElementById(`edit${mealType.charAt(0).toUpperCase() + mealType.slice(1)}Yes`);
                const editNo = document.getElementById(`edit${mealType.charAt(0).toUpperCase() + mealType.slice(1)}No`);
                if (editYes && editNo) {
                    editYes.addEventListener('change', () => {
                        if (editYes.checked) showMealSelection(mealType);
                    });
                    editNo.addEventListener('change', () => {
                        if (editNo.checked) {
                            const mealContainer = document.getElementById(mealType).querySelector('.meal-options');
                            if (mealContainer) mealContainer.innerHTML = `<p>Selected: ${totalMealCalories.toFixed(1)} kcal, ${totalMealProtein.toFixed(1)} g protein</p>`;
                        }
                    });
                }
                if (currentUser) {
                    currentUser.data = { ...currentUser.data, ...userData };
                    localStorage.setItem('users', JSON.stringify(users));
                }
            }

            function showTrainingPlan() {
                if (showPlanBtn && trainingSystem && systemDescription) {
                    const gymDays = parseInt(document.getElementById('gymDays').value);
                    trainingSystem.classList.remove('hidden');
                    let description = '';
                    if (gymDays <= 3) description = 'Full Body Training System: Focus on compound exercises covering all muscles per session.';
                    else if (gymDays === 4) description = 'Muscle Split System: Day for chest and arms, day for back and shoulders, day for legs, and a rest or light workout day.';
                    else description = 'Advanced Split System: Day for chest, day for back, day for shoulders, day for arms, day for legs.';
                    systemDescription.textContent = description;
                }
            }

            function showExercises() {
                if (showExercisesBtn && exercisesSection) {
                    const muscleNames = {chest: "Chest", back: "Back", shoulder: "Shoulders", arm: "Arms", leg: "Legs"};
                    const selectedMuscles = Array.from(document.querySelectorAll('input[name="muscleGroup"]:checked')).map(input => input.value);
                    exercisesSection.classList.remove('hidden');
                    exercisesSection.innerHTML = '';
                    if (selectedMuscles.length === 0) {
                        exercisesSection.innerHTML = '<p>Please select at least one muscle group.</p>';
                        return;
                    }
                    const exercises = {
                        chest: ["Bench Press or Dumbbell Press (middle chest)", "Incline Press (upper chest)", "Decline Press (lower chest)", "Flyes (with dumbbells or cable)", "Cable Crossover (all chest parts)"],
                        back: ["Deadlift (lower and middle back)", "Bar Pull (middle back)", "Pull-Up (upper and lateral back)", "Cable Pull (middle back)", "Face Pull (upper and lateral back)"],
                        shoulder: ["Overhead Press (all shoulder parts)", "Lateral Raise (side delts)", "Rear Delt Raise (rear delts)", "Arnold Press (front delts with rotation)"],
                        arm: ["Barbell Bicep Curl", "Hammer Curl", "Tricep Cable Pushdown", "Overhead Tricep Extension", "Wrist Curls (forearms)"],
                        leg: ["Squat (thighs and glutes)", "Deadlift (hamstrings and glutes)", "Lunge (thighs and glutes)", "Leg Raise (calves)", "Leg Press"]
                    };
                    selectedMuscles.forEach(muscle => {
                        const muscleSection = document.createElement('div');
                        muscleSection.innerHTML = `<h4>${muscleNames[muscle]}</h4>`;
                        const ul = document.createElement('ul');
                        exercises[muscle].forEach(exercise => {
                            const li = document.createElement('li');
                            li.textContent = exercise;
                            ul.appendChild(li);
                        });
                        muscleSection.appendChild(ul);
                        exercisesSection.appendChild(muscleSection);
                    });
                }
            }

            // Add date and time functionality
            function updateDateTime() {
                const now = new Date();
                const options = { hour: '2-digit', minute: '2-digit', hour12: true, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZoneName: 'short' };
                const dateTimeString = now.toLocaleString(language === 'en' ? 'en-US' : 'ar-EG', options);
                document.getElementById('dateTime').textContent = language === 'en' ? `Current Date and Time: ${dateTimeString}` : `التاريخ والوقت الحالي: ${dateTimeString}`;
            }

            // Initial date-time update and interval
            updateDateTime();
            setInterval(updateDateTime, 60000); // Update every minute

            // Ensure compatibility with touch devices
            document.body.addEventListener('touchstart', function() {}, { passive: true });
        });