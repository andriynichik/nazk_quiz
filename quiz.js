
    var quiztitle = "Дізнайся, який ти декларант?";
    var quiz = [
        {
            "question"      :   "1. Коли останній термін подання щорічної декларації?",
            "image"         :   "",
            "choices"       :   [
                                    "7 січня",
                                    "8 березня",
                                    "31 березня",
                                    "Останній удар курантів 31 грудня"
                                ],
            "correct"       :   "31 березня",
            "explanation"   :   "31 березня",
        },
        {
            "question"      :   "2. Хто обов’язково вважається членом сім’ї декларанта?",
            "image"         :   "",
            "choices"       :   [
                                    "Песик Адольф",
                                    "Чоловік",
                                    "Кохана теща",
                                    "Свекруха, яка завжди краще знає Як"
                                ],
            "correct"       :   "Чоловік",
            "explanation"   :   "Чоловік",
        },
        {
            "question"      :   "3. Що має зробити суб’єкт декларування, якщо він одружився?",
            "image"         :   "",
            "choices"       :   [
                                    "Подати повідомлення про суттєві зміни у майновому стані",
                                    "Розлучитись до 31 грудня",
                                    "Виставити фото з весілля в інстаграм",
                                    "Зазначити дружину та наявні у неї об’єкти для декларування у наступній декларації"
                                ],
            "correct"       :   "Зазначити дружину та наявні у неї об’єкти для декларування у наступній декларації",
            "explanation"   :   "Зазначити дружину та наявні у неї об’єкти для декларування у наступній декларації",
        },
        {
            "question"      :   "4. Протягом якого строку можна подати виправлену декларацію?",
            "image"         :   "",
            "choices"       :   [
                                    "протягом місяця",
                                    "15 днів",
                                    "7 днів",
                                    "В будь-якому разі це не допоможе"
                                ],
            "correct"       :   "7 днів",
            "explanation"   :   "7 днів",
        },
        {
            "question"      :   "5. Яка відповідальність передбачена за подання завідомо недостовірних відомостей у декларації на суму понад 100 та до 250 прожиткових мінімумів для працездатних осіб, встановлених на 1 січня відповідного року?  * (прожитковий мінімум для працездатних осіб на 1 січня 2018 року відповідно до ЗУ «Про  Державний бюджет України на 2018 рік» становив 1762 грн. Відповідно для декларації за 2018 рік відповідний поріг становить 440,5 тис. грн)",
            "image"         :   "",
            "choices"       :   [
                                    "політична",
                                    "Господарська",
                                    "Адміністративна",
                                    "на розсуд суду"
                                ],
            "correct"       :   "Адміністративна",
            "explanation"   :   "Адміністративна",
        },
        {
            "question"      :   "6. Що зобов’язаний зробити суб’єкт декларування при звільненні?",
            "image"         :   "",
            "choices"       :   [
                                    "Повідомити НАЗК про звільнення",
                                    "Закинути резюме на work.ua",
                                    "Поїхати на море",
                                    "Подати декларацію за неохоплений раніше поданими деклараціями період"
                                ],
            "correct"       :   "Подати декларацію за неохоплений раніше поданими деклараціями період",
            "explanation"   :   "Подати декларацію за неохоплений раніше поданими деклараціями період",
        },
                {
            "question"      :   "7. Суб’єкт декларування є власником 2/3 квартири. Інша 1/3 належать куму.  Як суб’єкт декларування повинен задекларувати квартиру?",
            "image"         :   "",
            "choices"       :   [
                                    "Вказати свою частку",
                                    "Вказати частку кума",
                                    "Вказати частку кума, лише якщо він там проживає",
                                    "Вказати частки двох співвласників"
                                ],
            "correct"       :   "Вказати частки двох співвласників",
            "explanation"   :   "Вказати частки двох співвласників",
        },
                {
            "question"      :   "8. Які типи декларацій подаються до 1 квітня?",
            "image"         :   "",
            "choices"       :   [
                                    "Щорічна",
                                    "Після звільнення",
                                    "Митна декларація",
                                    "Варіант 1 та 2"
                                ],
            "correct"       :   "Варіант 1 та 2",
            "explanation"   :   "Варіант 1 та 2",
        },
                {
            "question"      :   "9. До чого може призвести  несвоєчасне подання без поважних причин декларації державним службовцем?",
            "image"         :   "",
            "choices"       :   [
                                    "До громадських робіт у вигляді доставки піци на обід колегам",
                                    "До виконання посадових обов’язків наступні 3 місяці без отримання заробітної плати",
                                    "До стягнення штрафу та звільнення",
                                    "Поважні причини завжди знайдуться"
                                ],
            "correct"       :   "До стягнення штрафу та звільнення",
            "explanation"   :   "До стягнення штрафу та звільнення",
        },
                {
            "question"      :   "10. Кому НАЗК вносить припис у разі встановлення недостовірних відомостей?",
            "image"         :   "",
            "choices"       :   [
                                    "Батькам декларанта",
                                    "Першій вчительці",
                                    "Самому декларанту",
                                    "Керівнику органу, установи, організації де  працює декларант"
                                ],
            "correct"       :   "Керівнику органу, установи, організації де  працює декларант",
            "explanation"   :  "Керівнику органу, установи, організації де  працює декларант",
        },
    ];



    var currentquestion = 0, score = 0, submt=true, picked;

    jQuery(document).ready(function($){


        function htmlEncode(value){
          return $(document.createElement('div')).text(value).html();
        }

        function addChoices(choices){
            if(typeof choices !== "undefined" && $.type(choices) == "array"){
                $('#choice-block').empty();
                for(var i=0;i<choices.length; i++){
                    $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');                    
                }
            }
        }
        
        function nextQuestion(){
            submt = true;
            $('#explanation').empty();
            $('#question').text(quiz[currentquestion]['question']);
            $('#pager').text('Запитання ' + Number(currentquestion + 1) + ' з ' + quiz.length);
            if(quiz[currentquestion].hasOwnProperty('image') && quiz[currentquestion]['image'] != ""){
                if($('#question-image').length == 0){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question'])).insertAfter('#question');
                } else {
                    $('#question-image').attr('src', quiz[currentquestion]['image']).attr('alt', htmlEncode(quiz[currentquestion]['question']));
                }
            } else {
                $('#question-image').remove();
            }
            addChoices(quiz[currentquestion]['choices']);
            setupButtons();
        }

        function processQuestion(choice){
            if(quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']){
                $('.choice').eq(choice).css({'background-color':'#50D943'});
                $('#explanation').html('<strong>Вірно!</strong>');
                score++;
            } else {
                $('.choice').eq(choice).css({'background-color':'#D92623'});
                $('#explanation').html('<strong>Не правильно. Вірним є: </strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            }
            currentquestion++;
            $('#submitbutton').html('Наступне запитання &raquo;').on('click', function(){
                if(currentquestion == quiz.length){
                    endQuiz();
                } else {
                    $(this).text('Відповісти').css({'color':'#222'}).off('click');
                    nextQuestion();
                }
            })
        }

        function setupButtons(){
            $('.choice').on('mouseover', function(){
                $(this).css({'background-color':'#e1e1e1'});
            });
            $('.choice').on('mouseout', function(){
                $(this).css({'background-color':'#fff'});
            })
            $('.choice').on('click', function(){
                picked = $(this).attr('data-index');
                $('.choice').removeAttr('style').off('mouseout mouseover');
                $(this).css({'border-color':'#222','font-weight':700,'background-color':'#c1c1c1'});
                if(submt){
                    submt=false;
                    $('#submitbutton').css({'color':'#000'}).on('click', function(){
                        $('.choice').off('click');
                        $(this).off('click');
                        processQuestion(picked);
                    });
                }
            })
        }

        function endQuiz(){
            $('#explanation').empty();
            $('#question').empty();
            $('#choice-block').empty();
            $('#submitbutton').remove();
            if (score < 5  ) {
                result_img = '<img src="1.jpeg" width="620">';
            }else if (score >= 5 && score < 9 ){
                result_img = '<img src="2.jpeg" width="620">';
            }else{
                result_img = '<img src="3.jpeg" width="620">';
            }
            $('#question').html("Ви дали  " + score + " з " + quiz.length + " правильних відповідей <br><h4>"+result_img+"</h4");
            $(document.createElement('h2')).css({'text-align':'center', 'font-size':'4em'}).text(Math.round(score/quiz.length * 100) + '%').insertAfter('#question');
        }

        function init(){
            if(typeof quiztitle !== "undefined" && $.type(quiztitle) === "string"){
                $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
            } else {
                $(document.createElement('h1')).text("Quiz").appendTo('#frame');
            }
            if(typeof quiz !== "undefined" && $.type(quiz) === "array"){
                $(document.createElement('p')).addClass('pager').attr('id','pager').text('Запитання 1 з ' + quiz.length).appendTo('#frame');
                $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');
                if(quiz[0].hasOwnProperty('image') && quiz[0]['image'] != ""){
                    $(document.createElement('img')).addClass('question-image').attr('id', 'question-image').attr('src', quiz[0]['image']).attr('alt', htmlEncode(quiz[0]['question'])).appendTo('#frame');
                }
                $(document.createElement('p')).addClass('explanation').attr('id','explanation').html('&nbsp;').appendTo('#frame');
                $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
                addChoices(quiz[0]['choices']);
                $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Відповісти').css({'font-weight':700,'color':'#222','padding':'30px 0'}).appendTo('#frame');
                setupButtons();
            }
        }
        
        init();
    });