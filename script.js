// 퀴즈 데이터 (문제, 답, 이미지 경로)
const quizData = [
    {
        question: "( ) 해결 정책",
        answer: "통일 문제",
        image: "images/1.JPEG" // 이미지 URL
    },
    {
        question: "피라미드 효과 : ( )",
        answer: "성장 동력",
        image: "images/2.JPEG"
    },
    {
        question: "피라미드와 배로 부양하는 ( )",
        answer: "신산업 창출",
        image: "images/3.JPEG"
    },
    {
        question: "( ): 고속 운송으로 연결한 거대 시장",
        answer: "나일 플랫폼",
        image: "images/4.JPEG"
    },
    {
        question: "신왕국 시대의 과제<br>후기 청동기 시대<br>( ) 증강<br>전략자원( ) 확보<br>성장 동력 창출",
        answer: "군사력 / 구리, 주석, 말, 나무",
        image: "images/5.JPEG"
    },
    {
        question: "이집트는 ( ), 히타이트는 ( )",
        answer: "단일 제국군, 용병 연합군",
        image: "images/6.JPEG"
    },
    {
        question: "문명사 최초의 ( )",
        answer: "세계대전",
        image: "images/7.JPEG"
    },
    {
        question: "카데쉬 전투 이후 ( )",
        answer: "청동 벨트 붕괴",
        image: "images/8.JPEG"
    },
    {
        question: "제우스 전략, 브론즈 벨트 대신 ( )",
        answer: "에게해 플랫폼",
        image: "images/9.JPEG"
    },
    {
        question: "트로이 전쟁의 결과: ( ) 체제의 붕괴",
        answer: "청동기",
        image: "images/10.JPEG"
    },
    {
        question: "트로이 유민, ( )로 가다: 해양문명의 진화",
        answer: "로마",
        image: "images/11.JPEG"
    },
    {
        question: "육상문명의 西進 擴張(서진 확장)을 막고, ( ) 플랫폼을 지배하는 그리스",
        answer: "에게해 거래",
        image: "images/12.JPEG"
    },
    {
        question: "신흥 로마: 카르타고와의 ( ) 전쟁",
        answer: "포에니",
        image: "images/13.JPEG"
    },
    {
        question: "육상 지배권인 아닌 '( )'을 기준으로 시대를 구분해야",
        answer: "바다 지배권",
        image: "images/14.JPEG"
    },
    {
        question: "당, ( ) 패전으로 서쪽 한계선 봉착",
        answer: "탈라스 전투",
        image: "images/15.JPEG"
    },
    {
        question: "대룩과 해양의 중간에서 ( )을 장악",
        answer: "연결",
        image: "images/16.JPEG"
    },
    {
        question: "지중해 문명이 이슬람 세계를 상대로 한 '중세판 ( )전쟁'",
        answer: "트로이",
        image: "images/17.JPEG"
    },
    {
        question: "가성비(Benefit to Cost Ratio)가 낮은 ( ) 조건",
        answer: "지정학적",
        image: "images/18.JPEG"
    },
    {
        question: "오스만 투르트 제국의 ( ) 함락",
        answer: "콘스탄티노플",
        image: "images/19.JPEG"
    },
    {
        question: "유럽 정복자의 무기: ( )",
        answer: "총, 균, 쇠",
        image: "images/20.JPEG"
    },
    {
        question: "대항해 시대의 ( ) 무역",
        answer: "3각",
        image: "images/21.JPEG"
    },
    {
        question: "1760년 ( ) 발명으로 노예보다 석탄을 택한 것",
        answer: "증기기관",
        image: "images/22.JPEG"
    },
    {
        question: "18C 영국, ( ) 대신 석탄",
        answer: "노예",
        image: "images/23.JPEG"
    },
    {
        question: "( ), 노예의 종말",
        answer: "엔진",
        image: "images/24.JPEG"
    },
    {
        question: "석탄 에너지 전환과 ( ) 도시",
        answer: "1차원",
        image: "images/25.JPEG"
    },
    {
        question: "에너지: ( )화된 노동력, 資本(자본)의 원천",
        answer: "화석",
        image: "images/26.JPEG"
    },
    {
        question: "석유, 에너지의 ( )",
        answer: "황제",
        image: "images/27.JPEG"
    },
    {
        question: "유체 에너지가 흐르는 도시, ( )이 되다",
        answer: "면",
        image: "images/28.JPEG"
    },
    {
        question: "전기 에너지 전환: ( ) 도시",
        answer: "3차원",
        image: "images/29.JPEG"
    },
    {
        question: "전력망이 ( )다. Vladimir Il'ich Lenin",
        answer: "소비에트",
        image: "images/30.JPEG"
    },
    {
        question: "석탄과 석유를 전기로 바꾸면, ( )",
        answer: "전기화",
        image: "images/31.JPEG"
    },
    {
        question: "모터, ( ) 동력",
        answer: "유비쿼터스",
        image: "images/32.JPEG"
    },
    {
        question: "전기가 부양하는 ( )",
        answer: "알고리즘과 인공지능",
        image: "images/33.JPEG"
    },
    {
        question: "( ) 없는 에너지 전환",
        answer: "온실가스(CO2)",
        image: "images/34.JPEG"
    },
    {
        question: "새로운 에너지의 조건 : ( )<br>( ) 에너지",
        answer: "비탄소, 질량",
        image: "images/35.JPEG"
    },
    {
        question: "태양광만이 ( )가 가능",
        answer: "에너지 잉여",
        image: "images/36.JPEG"
    },
    {
        question: "농민이 농지에서 만든 전기는 ( )",
        answer: "농산물",
        image: "images/37.JPEG"
    },
    {
        question: "문명의 4차원 확장과 가상화: ( )",
        answer: "메타버스",
        image: "images/38.JPEG"
    },
    {
        question: "Twin 문명의 부양 한계: ( )",
        answer: "탄소 제약",
        image: "images/39.JPEG"
    }
];


// 현재 퀴즈의 인덱스
let currentQuizIndex = 0; 

// 퀴즈 시작 함수
function startQuiz(mode) {
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
}

// 문제 로드 함수
function loadQuestion() {
    // 현재 문제 데이터 가져오기
    const quiz = quizData[currentQuizIndex];

    // 문제 텍스트 설정
    document.getElementById('question').innerHTML = quiz.question;

    // 이미지 설정
    const quizImage = document.getElementById('quiz-image');
    quizImage.src = quiz.image;  // 이미지 경로 설정
    quizImage.style.display = 'block';  // 이미지 보이게 설정

    // 입력칸 초기화
    document.getElementById('answer').value = '';
    document.getElementById('result').innerHTML = '';

    // 버튼 초기화
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'block';

    // 정답 보기 버튼 숨기기
    document.getElementById('show-answer-btn').style.display = 'none';
}

// 답안 제출 함수
function submitAnswer() {
    const answer = document.getElementById('answer').value;
    const quiz = quizData[currentQuizIndex];
    
    // 정답 확인
    if (answer === quiz.answer) {
        document.getElementById('result').innerHTML = '정답입니다! 🎉';
    } else {
        document.getElementById('result').innerHTML = '틀렸습니다. 다시 시도해주세요.';
    }

    // 정답 보기 버튼 및 다음 문제 버튼 표시
    document.getElementById('show-answer-btn').style.display = 'block';
    document.getElementById('next-btn').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
}

// 다음 문제로 이동 함수
function nextQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        loadQuestion();
    } else {
        alert('퀴즈가 끝났습니다!');
    }
}

// 정답 보기 함수
function showAnswer() {
    const quiz = quizData[currentQuizIndex];
    alert('정답은: ' + quiz.answer);
}
