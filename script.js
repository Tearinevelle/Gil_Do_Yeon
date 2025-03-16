document.addEventListener('DOMContentLoaded', function() {
  // Добавляем старт-скрин в стиле стимпанк
  const startScreen = document.createElement('div');
  startScreen.className = 'start-screen';
  startScreen.innerHTML = `
    <div class="steampunk-container">
      <div class="gears-decoration top-left"></div>
      <div class="gears-decoration top-right"></div>
      <h1 class="steampunk-title" data-text="ВНИМАНИЕ">ВНИМАНИЕ</h1>
      <h2 class="steampunk-subtitle">ДОСТУП РАЗРЕШЕН</h2>
      <div class="steampunk-loading-bar"><div class="steampunk-loading-progress"></div></div>
      <p class="steampunk-blink-text">Нажмите любую клавишу для входа</p>
      <div class="steampunk-warning">ОСТОРОЖНО ОСТОРОЖНО ОСТОРОЖНО</div>
      <div class="gears-decoration bottom-left"></div>
      <div class="gears-decoration bottom-right"></div>
    </div>
  `;
  document.body.appendChild(startScreen);

  // Звук старт-скрина
  const startupSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-computer-startup-2315.mp3');
  const keyPressSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-fast-small-sweep-transition-166.mp3');

  // Запускаем анимацию загрузки
  setTimeout(() => {
    if (document.querySelector('.steampunk-loading-progress')) {
      document.querySelector('.steampunk-loading-progress').style.width = '100%';
    }
  }, 500);

  // Обработчик нажатия клавиш для старт-скрина
  function hideStartScreen() {
    if (keyPressSound && startScreen) {
      keyPressSound.play();
      startScreen.classList.add('fade-out');
      setTimeout(() => {
        if (startupSound) startupSound.play();
        if (startScreen && startScreen.parentNode) {
          startScreen.remove();
        }
      }, 1000);

      document.removeEventListener('keydown', hideStartScreen);
      document.removeEventListener('click', hideStartScreen);
    }
  }

  document.addEventListener('keydown', hideStartScreen);
  document.addEventListener('click', hideStartScreen);

  const lightToggle = document.getElementById('lightToggle');
  const roomContainer = document.querySelector('.room-container');
  const radio = document.getElementById('radio');
  const documents = document.getElementById('documents');
  const laptop = document.getElementById('laptop');
  const notes = document.querySelectorAll('.sticky-note');
  const seoulMap = document.getElementById('seoulMap');
  const dialogBox = document.getElementById('dialogBox');
  const dialogText = document.getElementById('dialogText');
  const continueDialog = document.getElementById('continueDialog');
  const documentModal = document.getElementById('documentModal');
  const documentContent = document.getElementById('documentContent');
  const translateDocument = document.getElementById('translateDocument');
  const backDocument = document.getElementById('backDocument');
  const audio = document.getElementById('audio');
  const scarySound = document.getElementById('scarySound');
  const jumpscare = document.getElementById('jumpscare');
  const musicPlayer = document.getElementById('musicPlayer');
  const pausePlay = document.getElementById('pausePlay');
  const prevSong = document.getElementById('prevSong');
  const nextSong = document.getElementById('nextSong');
  const seekBar = document.getElementById('seekBar');
  const currentSongDisplay = document.getElementById('currentSong');
  let isKorean = true; // По умолчанию корейская версия
  // Погодный виджет
  let weatherData = null; // Данные о погоде
  let lastWeatherUpdate = 0; // Время последнего обновления погоды
  let isWeatherKorean = true; // По умолчанию корейский язык

  // Состояние света
  let lightOn = true;

  // Функция переключения света
  lightToggle.addEventListener('click', function() {
    lightOn = !lightOn;
    roomContainer.classList.toggle('dark');
    this.textContent = lightOn ? 'Выключить свет' : 'Включить свет';

    // Добавляем плавное выделение ноутбука при выключенном свете
    if (!lightOn) {
      laptop.style.transition = 'all 0.8s ease';
      laptop.style.transform = 'scale(1.05)';
    } else {
      laptop.style.transition = 'all 0.5s ease';
      laptop.style.transform = 'scale(1)';
    }
  });

  // Обработчик для радио
  radio.addEventListener('click', function() {
    window.location.href = 'https://t.me/Gil_Do_Yeon_playlist_ICO';
  });

  // Обработчики для музыкального плеера
  pausePlay.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      this.textContent = "⏸️";
    } else {
      audio.pause();
      this.textContent = "▶️";
    }
  });

  // Обновление прогресса песни
  audio.addEventListener('timeupdate', function() {
    if (audio.duration) {
      seekBar.value = (audio.currentTime / audio.duration) * 100;
    }
  });

  // Обработчик для документов
  documents.addEventListener('click', showDocuments);

  function showDocuments() {
    documentModal.classList.remove('hidden');
    renderDocument();
  }

  function renderDocument() {
    documentContent.innerHTML = isKorean ? generateKoreanWantedDocument() : generateRussianWantedDocument();
  }

  // Функция для генерации русского документа о розыске
  function generateRussianWantedDocument() {
    return `
      <div class="wanted-document">
        <div class="document-watermark"></div>

        <div class="official-letterhead">
          <div class="letterhead-emblem"></div>
          <div class="letterhead-title">
            <div class="agency-name">МИНИСТЕРСТВО ВНУТРЕННИХ ДЕЛ</div>
            <div class="agency-subtitle">НАЦИОНАЛЬНОЕ АГЕНТСТВО ПОЛИЦИИ РЕСПУБЛИКИ КОРЕЯ</div>
          </div>
          <div class="letterhead-info">
            <div class="ref-number">№ KNPA-GN-2025-0089</div>
            <div class="security-level">КОНФИДЕНЦИАЛЬНО</div>
            <div class="document-date">от 25.02.2025 г.</div>
          </div>
        </div>

        <div class="document-header">
          <div class="document-title">ОРИЕНТИРОВКА</div>
          <div class="document-subtitle">О РОЗЫСКЕ ОСОБО ОПАСНОГО ПРЕСТУПНИКА</div>
          <div class="document-priority">
            <div class="priority-label">УРОВЕНЬ ПРИОРИТЕТА:</div>
            <div class="priority-value">ВЫСШИЙ</div>
          </div>
        </div>

        <div class="document-photo-section">
          <div class="suspect-photo-container">
            <div class="suspect-photo-placeholder">
              <div class="photo-not-available">ФОТО ОТСУТСТВУЕТ</div>
            </div>
            <div class="photo-caption">По имеющимся данным, лицо подозреваемого не поддается фиксации на фото- и видеоносителях</div>
          </div>
          <div class="suspect-main-info">
            <div class="suspect-status">РАЗЫСКИВАЕТСЯ</div>
            <div class="info-row"><span class="info-label">Ф.И.О.:</span> <span class="info-value">Неизвестно</span></div>
            <div class="info-row"><span class="info-label">Пол:</span> <span class="info-value">Мужской</span></div>
            <div class="info-row"><span class="info-label">Возраст:</span> <span class="info-value">Приблизительно 25-30 лет</span></div>
            <div class="info-row"><span class="info-label">Рост:</span> <span class="info-value">6 футов / 183 см</span></div>
            <div class="info-row"><span class="info-label">Телосложение:</span> <span class="info-value">Худощавое</span></div>
            <div class="case-number">ДЕЛО № KNM-2502-785/2025</div>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon suspect-icon"></div>
            <div class="section-title">ИДЕНТИФИКАЦИОННЫЕ ДАННЫЕ</div>
          </div>
          <div class="section-content two-columns">
            <div class="column">
              <div class="info-row"><span class="info-label">Гражданство:</span> <span class="info-value">Неизвестно</span></div>
              <div class="info-row"><span class="info-label">Дата рождения:</span> <span class="info-value">Неизвестно</span></div>
              <div class="info-row"><span class="info-label">Место рождения:</span> <span class="info-value">Неизвестно</span></div>
              <div class="info-row"><span class="info-label">Цвет глаз:</span> <span class="info-value">Неизвестно</span></div>
            </div>
            <div class="column">
              <div class="info-row"><span class="info-label">Цвет волос:</span> <span class="info-value">Тёмные</span></div>
              <div class="info-row"><span class="info-label">Особые приметы:</span> <span class="info-value">Носит исключительно чёрный костюм, напоминающий сценический наряд фокусника</span></div>
              <div class="info-row"><span class="info-label">Языки:</span> <span class="info-value">Предположительно корейский</span></div>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon crime-icon"></div>
            <div class="section-title">КРИМИНАЛЬНАЯ ИНФОРМАЦИЯ</div>
          </div>
          <div class="section-content">
            <div class="info-row"><span class="info-label">Дата совершения преступления:</span> <span class="info-value">15.02.2025</span></div>
            <div class="info-row"><span class="info-label">Место совершения преступления:</span> <span class="info-value">г. Сеул, район Каннам</span></div>
            <div class="info-row"><span class="info-label">Квалификация:</span> <span class="info-value">Множественные похищения людей</span></div>
            <div class="info-row"><span class="info-label">Описание преступления:</span> <span class="info-value">Согласно свидетельским показаниям, все лица, вступавшие в контакт с подозреваемым, впоследствии бесследно исчезали</span></div>

            <div class="victims-section">
              <div class="victims-title">Данные о жертвах:</div>
              <table class="victims-table">
                <thead>
                  <tr>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Дата исчезновения</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Кан Су Ан</td>
                    <td>37 лет</td>
                    <td>15.02.2025</td>
                    <td>Не обнаружен</td>
                  </tr>
                  <tr>
                    <td>Ким Сан И</td>
                    <td>23 года</td>
                    <td>15.02.2025</td>
                    <td>Не обнаружен</td>
                  </tr>
                  <tr>
                    <td>Но Ыль Иль</td>
                    <td>56 лет</td>
                    <td>15.02.2025</td>
                    <td>Не обнаружен</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon investigation-icon"></div>
            <div class="section-title">ДАННЫЕ РАССЛЕДОВАНИЯ</div>
          </div>
          <div class="section-content two-columns">
            <div class="column">
              <div class="info-row"><span class="info-label">Метод похищения:</span> <span class="info-value">Неизвестен</span></div>
              <div class="info-row"><span class="info-label">Используемый транспорт:</span> <span class="info-value">Неизвестен</span></div>
              <div class="info-row"><span class="info-label">Наличие оружия:</span> <span class="info-value">Не подтверждено</span></div>
            </div>
            <div class="column">
              <div class="info-row"><span class="info-label">Свидетели:</span> <span class="info-value">Нам Су Хо</span></div>
              <div class="info-row"><span class="info-label">Ведущий следователь:</span> <span class="info-value">Капитан Хён Тэ Джун</span></div>
              <div class="info-row"><span class="info-label">Предполагаемое местонахождение:</span> <span class="info-value">Предположительно район Каннам, г. Сеул</span></div>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon warning-icon"></div>
            <div class="section-title">МЕРЫ ПРЕДОСТОРОЖНОСТИ</div>
          </div>
          <div class="section-content">
            <div class="warning-box">
              <div class="warning-symbol">⚠</div>
              <div class="warning-text">
                <div class="warning-title">ВНИМАНИЕ! ОСОБАЯ ОПАСНОСТЬ!</div>
                <div class="warning-description">Запрещается самостоятельно предпринимать попытки задержания подозреваемого. При обнаружении немедленно сообщите в ближайшее отделение полиции.</div>
              </div>
            </div>
            <div class="info-row"><span class="info-label">Предыдущие преступления:</span> <span class="info-value">По имеющимся данным, подозреваемый может быть причастен к ранее зафиксированным случаям исчезновения жителей района Каннам</span></div>
            <div class="info-row"><span class="info-label">Связи с преступными организациями:</span> <span class="info-value">Данных не имеется</span></div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon contact-icon"></div>
            <div class="section-title">КОНТАКТНАЯ ИНФОРМАЦИЯ</div>
          </div>
          <div class="section-content">
            <div class="contact-info">
              <div class="info-row"><span class="info-label">Телефон горячей линии:</span> <span class="info-value">010-XXXX-XXXX</span></div>
              <div class="info-row"><span class="info-label">Круглосуточный дежурный:</span> <span class="info-value">02-XXXX-XXXX</span></div>
              <div class="info-row"><span class="info-label">Электронная почта:</span> <span class="info-value">TaeJun@police.kr.gov</span></div>
              <div class="info-row"><span class="info-label">Адрес отделения полиции:</span> <span class="info-value">г. Сеул, район Каннам, ул. Тэпхён, 112</span></div>
            </div>
            <div class="reward-section">
              <div class="reward-title">ВОЗНАГРАЖДЕНИЕ</div>
              <div class="reward-amount">5 000 000 KRW</div>
              <div class="reward-description">За предоставление достоверной информации, способствующей задержанию разыскиваемого лица</div>
            </div>
          </div>
        </div>

        <div class="document-footer">
          <div class="footer-left">
            <p>Настоящий документ составлен в соответствии с законом Республики Корея «О полиции» и содержит сведения, не подлежащие разглашению.</p>
            <p>Распространение, копирование или публикация без официального разрешения ЗАПРЕЩЕНЫ.</p>
          </div>
          <div class="footer-right">
            <div class="signature-section">
              <div class="signature-title">Начальник следственного отдела:</div>
              <div class="small-subtitle" style="font-size: 9px; font-style: italic; color: #555; text-align: center; margin-bottom: 5px;">Департамент особых расследований</div>
              <div class="small-handwritten-signature" style="font-family: 'Brush Script MT', cursive; font-size: 16px; color: #000066; text-align: center; margin-bottom: 2px; transform: rotate(-5deg); letter-spacing: 1px; text-shadow: 0px 0px 1px rgba(0,0,0,0.2);">Hyun Taejun</div>
              <div class="signature-rank">Капитан полиции</div>
            </div>

            <div class="stamp-container">
              <div class="stamp-section">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YW1wR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZng9IjUwJSIgZnk9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QyMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjciLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMC43Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNzdGFtcEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNzdGFtcEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iNzUiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7tm4TtlZzrr7jqtZE8L3RleHQ+PHRleHQgeD0iNzUiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7qsrXrqoXtmqw8L3RleHQ+PHRleHQgeD0iNzUiIHk9Ijg1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7sm5Drs7Q8L3RleHQ+PHRleHQgeD0iNzUiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2QyMDAwMCI+6rWt7ZWY66+46rWRPC90ZXh0Pjwvc3ZnPg==" alt="Официальная печать" class="stamp-image"/>
                <div class="stamp-date">25.02.2025 г.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Функция для генерации корейского документа о розыске
  function generateKoreanWantedDocument() {
    return `
      <div class="wanted-document">
        <div class="document-watermark"></div>

        <div class="official-letterhead">
          <div class="letterhead-emblem"></div>
          <div class="letterhead-title">
            <div class="agency-name">대한민국 행정안전부</div>
            <div class="agency-subtitle">국가경찰청</div>
          </div>
          <div class="letterhead-info">
            <div class="ref-number">№ KNPA-GN-2025-0089</div>
            <div class="security-level">기밀</div>
            <div class="document-date">2025년 02월 25일</div>
          </div>
        </div>

        <div class="document-header">
          <div class="document-title">수배령</div>
          <div class="document-subtitle">극도로 위험한 범죄자 수배</div>
          <div class="document-priority">
            <div class="priority-label">우선순위 레벨:</div>
            <div class="priority-value">최고</div>
          </div>
        </div>

        <div class="document-photo-section">
          <div class="suspect-photo-container">
            <div class="suspect-photo-placeholder">
              <div class="photo-not-available">사진 없음</div>
            </div>
            <div class="photo-caption">가용 정보에 따르면, 용의자의 얼굴은 사진 및 비디오 매체에 촬영되지 않음</div>
          </div>
          <div class="suspect-main-info">
            <div class="suspect-status">수배 중</div>
            <div class="info-row"><span class="info-label">성명:</span> <span class="info-value">미상</span></div>
            <div class="info-row"><span class="info-label">성별:</span> <span class="info-value">남성</span></div>
            <div class="info-row"><span class="info-label">나이:</span> <span class="info-value">약 25-30세</span></div>
            <div class="info-row"><span class="info-label">신장:</span> <span class="info-value">6피트 / 183cm</span></div>
            <div class="info-row"><span class="info-label">체형:</span> <span class="info-value">마른 체형</span></div>
            <div class="case-number">사건 번호 № KNM-2502-785/2025</div>
          </div>
        </div>

        <div class="section-divider"></div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon suspect-icon"></div>
            <div class="section-title">신원 정보</div>
          </div>
          <div class="section-content two-columns">
            <div class="column">
              <div class="info-row"><span class="info-label">국적:</span> <span class="info-value">미상</span></div>
              <div class="info-row"><span class="info-label">생년월일:</span> <span class="info-value">미상</span></div>
              <div class="info-row"><span class="info-label">출생지:</span> <span class="info-value">미상</span></div>
              <div class="info-row"><span class="info-label">눈 색깔:</span> <span class="info-value">미상</span></div>
            </div>
            <div class="column">
              <div class="info-row"><span class="info-label">머리 색깔:</span> <span class="info-value">어두운 색</span></div>
              <div class="info-row"><span class="info-label">특이사항:</span> <span class="info-value">마술사 의상과 유사한 검은색 정장만 착용</span></div>
              <div class="info-row"><span class="info-label">사용 언어:</span> <span class="info-value">추정 한국어</span></div>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon crime-icon"></div>
            <div class="section-title">범죄 정보</div>
          </div>
          <div class="section-content">
            <div class="info-row"><span class="info-label">범행 일시:</span> <span class="info-value">추정 2025년 2월 15일</span></div>
            <div class="info-row"><span class="info-label">범행 장소:</span> <span class="info-value">서울특별시 강남구</span></div>
            <div class="info-row"><span class="info-label">범죄 유형:</span> <span class="info-value">다수의 납치 사건</span></div>
            <div class="info-row"><span class="info-label">범죄 내용:</span> <span class="info-value">목격자 진술에 따르면, 용의자와 접촉한 모든 사람들이 이후 흔적 없이 사라짐</span></div>

            <div class="victims-section">
              <div class="victims-title">피해자 정보:</div>
              <table class="victims-table">
                <thead>
                  <tr>
                    <th>성명</th>
                    <th>나이</th>
                    <th>실종 날짜</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>강수안</td>
                    <td>37세</td>
                    <td>2025.02.15</td>
                    <td>발견되지 않음</td>
                  </tr>
                  <tr>
                    <td>김상이</td>
                    <td>23세</td>
                    <td>2025.02.15</td>
                    <td>발견되지 않음</td>
                  </tr>
                  <tr>
                    <td>노을일</td>
                    <td>56세</td>
                    <td>2025.02.15</td>
                    <td>발견되지 않음</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon investigation-icon"></div>
            <div class="section-title">수사 데이터</div>
          </div>
          <div class="section-content two-columns">
            <div class="column">
              <div class="info-row"><span class="info-label">납치 방법:</span> <span class="info-value">알 수 없음</span></div>
              <div class="info-row"><span class="info-label">사용된 교통수단:</span> <span class="info-value">알 수 없음</span></div>
              <div class="info-row"><span class="info-label">무기 소지:</span> <span class="info-value">확인되지 않음</span></div>
            </div>
            <div class="column">
              <div class="info-row"><span class="info-label">목격자:</span> <span class="info-value">남수호</span></div>
              <div class="info-row"><span class="info-label">담당 조사관:</span> <span class="info-value">현태준 경감</span></div>
              <div class="info-row"><span class="info-label">추정 소재지:</span> <span class="info-value">서울특별시 강남구 일대</span></div>
            </div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon warning-icon"></div>
            <div class="section-title">주의사항</div>
          </div>
          <div class="section-content">
            <div class="warning-box">
              <div class="warning-symbol">⚠</div>
              <div class="warning-text">
                <div class="warning-title">주의! 매우 위험!</div>
                <div class="warning-description">용의자를 직접 체포하려는 시도는 금지됩니다. 발견 시 즉시 가까운 경찰서에 신고하십시오.</div>
              </div>
            </div>
            <div class="info-row"><span class="info-label">이전 범죄:</span> <span class="info-value">가용 정보에 따르면, 용의자는 강남구 주민들의 이전 실종 사건과 관련이 있을 수 있음</span></div>
            <div class="info-row"><span class="info-label">범죄 조직과의 연계:</span> <span class="info-value">정보 없음</span></div>
          </div>
        </div>

        <div class="document-section">
          <div class="section-header">
            <div class="section-icon contact-icon"></div>
            <div class="section-title">연락처 정보</div>
          </div>
          <div class="section-content">
            <div class="contact-info">
              <div class="info-row"><span class="info-label">핫라인:</span> <span class="info-value">010-XXXX-XXXX</span></div>
              <div class="info-row"><span class="info-label">24시간 당직:</span> <span class="info-value">02-XXXX-XXXX</span></div>
              <div class="info-row"><span class="info-label">이메일:</span> <span class="info-value">TaeJun@police.kr.gov</span></div>
              <div class="info-row"><span class="info-label">경찰서 주소:</span> <span class="info-value">서울특별시 강남구 테평로 112</span></div>
            </div>
            <div class="reward-section">
              <div class="reward-title">현상금</div>
              <div class="reward-amount">₩5,000,000</div>
              <div class="reward-description">용의자 체포에 기여하는 신뢰할 수 있는 정보 제공에 대해 지급됩니다</div>
            </div>
          </div>
        </div>

        <div class="document-footer">
          <div class="footer-left">
            <p>본 문서는 대한민국 경찰법에 따라 작성되었으며 공개할 수 없는 정보를 포함하고 있습니다.</p>
            <p>공식 허가 없이 배포, 복사 또는 출판하는 것은 금지됩니다.</p>
          </div>
          <div class="footer-right">
            <div class="signature-section">
              <div class="signature-title">수사과장:</div>
              <div class="small-subtitle" style="font-size: 9px; font-style: italic; color: #555; text-align: center; margin-bottom: 5px;">특별수사국</div>
              <div class="small-handwritten-signature" style="font-family: 'Brush Script MT', cursive; font-size: 16px; color: #000066; text-align: center; margin-bottom: 2px; transform: rotate(-5deg); letter-spacing: 1px; text-shadow: 0px 0px 1px rgba(0,0,0,0.2);">Hyun Taejun</div>
              <div class="signature-rank">경감</div>
            </div>

            <div class="stamp-container">
              <div class="stamp-section">
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9InN0YW1wR3JhZGllbnQiIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSIgZng9IjUwJSIgZnk9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2QyMDAwMCIgc3RvcC1vcGFjaXR5PSIwLjciLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjAwMDAiIHN0b3Atb3BhY2l0eT0iMC43Ii8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNzdGFtcEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSI0Ii8+PGNpcmNsZSBjeD0iNzUiIGN5PSI3NSIgcj0iNTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNzdGFtcEdyYWRpZW50KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PHRleHQgeD0iNzUiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7tm4TtlZzrr7jqtZE8L3RleHQ+PHRleHQgeD0iNzUiIHk9IjY1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7qsrXrqoXtmqw8L3RleHQ+PHRleHQgeD0iNzUiIHk9Ijg1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZDIwMDAwIj7sm5Drs7Q8L3RleHQ+PHRleHQgeD0iNzUiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEyIiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2QyMDAwMCI+6rWt7ZWY66+46rWRPC90ZXh0Pjwvc3ZnPg==" alt="직인" class="stamp-image"/>
                <div class="stamp-date">2025년 02월 25일</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Обработчики для модального окна документов
  translateDocument.addEventListener('click', function() {
    isKorean = !isKorean;
    renderDocument();
    this.textContent = isKorean ? 'Перевести' : '원문으로';
  });

  backDocument.addEventListener('click', function() {
    documentModal.classList.add('hidden');
  });

  // Обработчики для стикеров
  notes.forEach((note, index) => {
    note.addEventListener('click', function() {
      showNote(index);
    });
  });

  function showNote(index) {
    const noteContent = document.getElementById('noteContent');
    const noteModal = document.getElementById('noteModal');
    const noteTexts = [
      'Он снова появился. Кажется, теперь его видели на станции Каннам.',
      'Встречу с Но Ыль Илем отменили... Интересно, куда он пропал?',
      'Нам Су Хо говорит, что видел странного человека в чёрном костюме. Нужно с ним поговорить.'
    ];

    noteContent.innerHTML = `<p>${noteTexts[index]}</p>`;
    noteModal.classList.remove('hidden');
  }

  // Обработчики для модального окна заметок
  document.getElementById('backNote').addEventListener('click', function() {
    document.getElementById('noteModal').classList.add('hidden');
  });

  // Неиспользуемая функция удалена

  // Добавляем постоянные шестеренки на экран
  function addPermanentGears() {
    // Добавляем 4 фиксированные шестеренки
    const gearPositions = [
      { top: '50px', left: '50px', size: '80px', speed: '10s', direction: 'normal' },
      { top: '50px', right: '50px', size: '60px', speed: '15s', direction: 'reverse' },
      { bottom: '70px', left: '70px', size: '70px', speed: '12s', direction: 'normal' },
      { bottom: '70px', right: '70px', size: '50px', speed: '8s', direction: 'reverse' }
    ];

    gearPositions.forEach(pos => {
      const gear = document.createElement('div');
      gear.className = 'permanent-gear animated-gear';

      gear.style.width = pos.size;
      gear.style.height = pos.size;
      if (pos.top) gear.style.top = pos.top;
      if (pos.bottom) gear.style.bottom = pos.bottom;
      if (pos.left) gear.style.left = pos.left;
      if (pos.right) gear.style.right = pos.right;
      gear.style.animationDuration = pos.speed;
      gear.style.animationDirection = pos.direction;
      gear.style.position = 'fixed';
      gear.style.zIndex = '500';
      gear.style.pointerEvents = 'none'; // Чтобы не мешали кликам

      document.body.appendChild(gear);
    });
  }

  // Запускаем добавление шестеренок при загрузке страницы
  document.addEventListener('DOMContentLoaded', function() {
    addPermanentGears();
  });

  // Обработчик для ноутбука
  laptop.addEventListener('click', function() {
    const laptopModal = document.getElementById('laptopModal');
    laptopModal.classList.remove('hidden');

    // Создаем или обновляем структуру ноутбука в модальном окне, если еще не создана
    const modalContent = document.querySelector('.modal-content.laptop-screen-full');
    if (!modalContent.querySelector('.laptop-frame-modal')) {
      const laptopHTML = `
        <div class="laptop-frame-modal">
          <div class="laptop-screen-frame-modal">
            <div class="laptop-desktop">
              <div class="desktop-time">
                <div class="time-widget">
                  <div class="time-container">
                    <p id="seoulTime" class="time-display"></p>
                    <div class="time-seconds" id="seoulSeconds"></div>
                  </div>
                  <p id="seoulDate" class="date-display"></p>
                  <div class="time-info">
                    <div class="time-zone">Seoul / UTC+9</div>
                    <div class="time-analog">
                      <div class="clock-face">
                        <div class="clock-hour" id="clockHour"></div>
                        <div class="clock-minute" id="clockMinute"></div>
                        <div class="clock-second" id="clockSecond"></div>
                        <div class="clock-center"></div>
                        <div class="clock-marks"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="desktop-icons">
                <div class="icon" id="youtubeIcon">
                  <div class="icon-image youtube"></div>
                  <div class="icon-glow"></div>
                  <p>YouTube</p>
                </div>
                <div class="icon" id="browserIcon">
                  <div class="icon-image browser"></div>
                  <div class="icon-glow"></div>
                  <p>Интернет</p>
                </div>
                <div class="icon" id="emailIcon">
                  <div class="icon-image email"></div>
                  <div class="icon-glow"></div>
                  <p>Почта</p>
                </div>
                <div class="icon" id="folderIcon">
                  <div class="icon-image folder"></div>
                  <div class="icon-glow"></div>
                  <p>Файлы</p>
                </div>
                <div class="icon" id="notepadIcon">
                  <div class="icon-image notepad"></div>
                  <div class="icon-glow"></div>
                  <p>Заметки</p>
                </div>
                <div class="icon" id="gameIcon">
                  <div class="icon-image game"></div>
                  <div class="icon-glow"></div>
                  <p>Игры</p>
                </div>
                <div class="icon" id="cameraIcon">
                  <div class="icon-image camera"></div>
                  <div class="icon-glow"></div>
                  <p>Камера</p>
                </div>
                <div class="icon" id="questionIcon">
                  <div class="icon-image question"></div>
                  <div class="icon-glow"></div>
                  <p>?</p>
                </div>
                <div class="icon" id="weatherIcon">
                  <div class="icon-image weather"></div>
                  <div class="icon-glow"></div>
                  <p>Погода</p>
                </div>
                <div class="icon" id="galleryIcon">
                  <div class="icon-image gallery"></div>
                  <div class="icon-glow"></div>
                  <p>Галерея</p>
                </div>
                <div class="icon" id="calendarIcon">
                  <div class="icon-image calendar"></div>
                  <div class="icon-glow"></div>
                  <p>Календарь</p>
                </div>
                <div class="icon" id="trashIcon">
                  <div class="icon-image trash"></div>
                  <div class="icon-glow"></div>
                  <p>Корзина</p>
                </div>
              </div>
              <div class="desktop-taskbar">
                <div class="taskbar-icons">
                  <div class="taskbar-icon" style="background-image: url('https://www.freepnglogos.com/uploads/chrome-logo-png/chrome-logo-png-google-chrome-icon-download-19.png');"></div>
                  <div class="taskbar-icon" style="background-image: url('https://www.freepnglogos.com/uploads/folder-png-icon/folder-png-icon-yellow-folder-with-pictures-icon-18.png');"></div>
                  <div class="taskbar-icon" style="background-image: url('https://www.freepnglogos.com/uploads/notepad-png/notepad-metro-style-icon-pixelkit-3.png');"></div>
                </div>
                <div class="taskbar-spacer"></div>
              </div>
            </div>
            <button id="backLaptop">Назад</button>
          </div>
        </div>
      `;

      // Получаем оригинальное содержимое
      const originalBackButton = modalContent.querySelector('#backLaptop');

      // Очищаем содержимое и добавляем новую структуру
      modalContent.innerHTML = laptopHTML;

      // Добавляем обработчик для новой кнопки назад
      modalContent.querySelector('#backLaptop').addEventListener('click', function() {
        document.getElementById('laptopModal').classList.add('hidden');
      });

      // Добавляем обработчики для погодного виджета
      const weatherIcon = modalContent.querySelector('#weatherIcon');
      if (weatherIcon) {
        weatherIcon.addEventListener('click', function() {
          const weatherModal = document.getElementById('weatherModal');
          if (weatherModal) {
            weatherModal.classList.remove('hidden');
            updateWeatherData();
            setupWeatherHandlers(); // Важно! Устанавливаем обработчики при открытии виджета
          }
        });
      }

      // Инициализация обработчиков для YouTube
      const youtubeIcon = modalContent.querySelector('#youtubeIcon');
      if (youtubeIcon) {
        youtubeIcon.addEventListener('click', function() {
          const youtubeModal = document.getElementById('youtubeModal');
          const youtubePlayer = document.getElementById('youtubePlayer');
          youtubeModal.classList.remove('hidden');
          youtubePlayer.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `;
        });
      }

      // Инициализация обработчика для календаря
      const calendarIcon = modalContent.querySelector('#calendarIcon');
      if (calendarIcon) {
        calendarIcon.addEventListener('click', createCalendar);
      }

      // Инициализация обработчика для почты
      const emailIcon = modalContent.querySelector('#emailIcon');
      if (emailIcon) {
        emailIcon.addEventListener('click', createEmailClient);
      }

      // Инициализация обработчика для блокнота
      const notepadIcon = modalContent.querySelector('#notepadIcon');
      if (notepadIcon) {
        notepadIcon.addEventListener('click', function() {
          // Создаем модальное окно блокнота, если оно еще не существует
          let notepadModal = document.getElementById('notepadModal');

          if (!notepadModal) {
            notepadModal = document.createElement('div');
            notepadModal.id = 'notepadModal';
            notepadModal.className = 'modal';
            notepadModal.innerHTML = `
              <div class="modal-content notepad-app">
                <div class="notepad-header">
                  <div class="notepad-title">Блокнот</div>
                  <div class="notepad-controls">
                    <button id="closeNotepad" style="font-size: 24px;">×</button>
                  </div>
                </div>
                <div class="notepad-body">
                  <div class="notepad-content">1995</div>
                </div>
                <div class="notepad-footer">
                  <div class="notepad-status"></div>
                </div>
              </div>
            `;
            document.body.appendChild(notepadModal);

            // Добавляем стили для блокнота
            const style = document.createElement('style');
            style.textContent = `
              .notepad-app {
                width: 400px;
                height: 300px;
                background-color: #f0f0f0;
                border: 1px solid #aaa;
                border-radius: 5px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                display: flex;
                flex-direction: column;
                overflow: hidden;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              }

              .notepad-header {
                height: 30px;
                background: linear-gradient(to bottom, #f6f6f6, #e6e6e6);
                border-bottom: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
              }

              .notepad-title {
                font-size: 14px;
                color: #333;
              }

              .notepad-controls button {
                background: none;
                border: none;
                font-size: 16px;
                cursor: pointer;
                width: 24px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border-radius: 3px;
              }

              .notepad-controls button:hover {
                background-color: #e81123;
                color: white;
              }

              .notepad-body {
                flex: 1;
                padding: 10px;
                background-color: white;
                overflow: auto;
              }

              .notepad-content {
                font-family: 'Consolas', 'Courier New', monospace;
                font-size: 16px;
                line-height: 1.4;
                white-space: pre-wrap;
                color: #000;
                height: 100%;
              }

              .notepad-footer {
                height: 20px;
                background-color: #f0f0f0;
                border-top: 1px solid #ccc;
                display: flex;
                align-items: center;
                padding: 0 10px;
                font-size: 12px;
                color: #555;
              }
            `;
            document.head.appendChild(style);

            // Обработчик для закрытия блокнота
            document.getElementById('closeNotepad').addEventListener('click', function() {
              notepadModal.classList.add('hidden');
            });
          } else {
            // Если модальное окно уже существует, просто показываем его
            notepadModal.classList.remove('hidden');
          }

          // Показываем диалоговое окно с вопросом
          showDialog('Я', 'Что это?', function() {
            showDialog('Я', 'Год рождения?', function() {
              showDialog('Я', 'Или же пароль...?', function() {
                // Закрываем диалоговое окно после третьего сообщения
              });
            });
          });
        });
      }

      // Инициализация обработчика для значка "?"
      const questionIcon = modalContent.querySelector('#questionIcon');
      if (questionIcon) {
        questionIcon.addEventListener('click', function() {
          const passwordModal = document.getElementById('passwordModal');
          const passwordInput = document.getElementById('passwordInput');
          const passwordError = document.getElementById('passwordError');

          if (passwordModal) {
            passwordModal.classList.remove('hidden');
            passwordInput.value = '';
            passwordError.classList.add('hidden');

            // Устанавливаем фокус на поле ввода после открытия модального окна
            setTimeout(() => {
              passwordInput.focus();
            }, 300);
          }
        });
      }
    }

    updateSeoulTime();
  });

  // Улучшенное время в Сеуле с аналоговыми часами
  function updateSeoulTime() {
    const now = new Date();
    const seoulTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const seoulTimeElement = document.getElementById('seoulTime');
    const seoulSecondsElement = document.getElementById('seoulSeconds');
    const seoulDateElement = document.getElementById('seoulDate');

    if (seoulTimeElement && seoulSecondsElement && seoulDateElement) {
      // Форматирование времени
      const hours = seoulTime.getHours().toString().padStart(2, '0');
      const minutes = seoulTime.getMinutes().toString().padStart(2, '0');
      const seconds = seoulTime.getSeconds().toString().padStart(2, '0');

      // Форматирование даты
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };

      seoulTimeElement.textContent = `${hours}:${minutes}`;
      seoulSecondsElement.textContent = seconds;
      seoulDateElement.textContent = seoulTime.toLocaleDateString('ko-KR', options);

      // Обновление аналоговых часов
      updateAnalogClock(seoulTime);

      // Обновление времени каждую секунду
      setTimeout(updateSeoulTime, 1000);
    }
  }

  // Функция для обновления аналоговых часов
  function updateAnalogClock(time) {
    const hourHand = document.getElementById('clockHour');
    const minuteHand = document.getElementById('clockMinute');
    const secondHand = document.getElementById('clockSecond');

    if (hourHand && minuteHand && secondHand) {
      const hours = time.getHours() % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      const hourDegrees = (hours * 30) + (minutes * 0.5);
      const minuteDegrees = (minutes * 6) + (seconds * 0.1);
      const secondDegrees = seconds * 6;

      hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
      secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    }
  }

  // Обработчик для кнопки закрытия YouTube
  document.getElementById('backYoutube').addEventListener('click', function() {
    const youtubeModal = document.getElementById('youtubeModal');
    const youtubePlayer = document.getElementById('youtubePlayer');
    youtubeModal.classList.add('hidden');
    youtubePlayer.innerHTML = '';
  });

  // Обработчики для модального окна с паролем
  const passwordModal = document.getElementById('passwordModal');
  const passwordInput = document.getElementById('passwordInput');
  const submitPassword = document.getElementById('submitPassword');
  const backPassword = document.getElementById('backPassword');
  const passwordError = document.getElementById('passwordError');
  const blackScreen = document.getElementById('blackScreen');
  const welcomeText = document.getElementById('welcomeText');

  // Переменная для отслеживания первого входа
  let firstLogin = true;

  // Правильный пароль (4 цифры)
  const correctPassword = '1995';

  // Обработчик для ввода только цифр
  passwordInput.addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');

    // Автоматическая проверка при вводе 4-х цифр
    if (this.value.length === 4) {
      setTimeout(() => {
        submitPassword.click();
      }, 300);
    }
  });

  // Функция для создания эффекта волшебных частиц
  function createMagicSparkles() {
    const characterProfile = document.querySelector('.character-profile');
    if (characterProfile) {
      // Добавляем 40 волшебных искр для более заметного эффекта
      for (let i = 0; i < 40; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkle';

        // Рандомное положение
        const randomX = Math.floor(Math.random() * 100);
        const randomY = Math.floor(Math.random() * 100);

        // Рандомные задержки анимаций
        const randomDelay = Math.random() * 8;
        const randomSize = 2 + Math.random() * 4;
        const randomOpacity = 0.3 + Math.random() * 0.5;

        // Различные цвета для частиц
        const colors = [
          'rgba(138, 43, 226, 0.6)', // Пурпурный
          'rgba(100, 78, 160, 0.5)', // Фиолетовый
          'rgba(72, 61, 139, 0.4)',  // Темно-синий
          'rgba(106, 90, 205, 0.3)', // Синий
          'rgba(160, 32, 240, 0.4)'  // Яркий фиолетовый
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        sparkle.style.left = `${randomX}%`;
        sparkle.style.top = `${randomY}%`;
        sparkle.style.width = `${randomSize}px`;
        sparkle.style.height = `${randomSize}px`;
        sparkle.style.opacity = `${randomOpacity}`;
        sparkle.style.backgroundColor = randomColor;
        sparkle.style.animationDelay = `${randomDelay}s`;

        // Разные скорости анимации для более органичного эффекта
        sparkle.style.animationDuration = `${3 + Math.random() * 5}s, ${6 + Math.random() * 6}s, ${1 + Math.random() * 2}s`;

        characterProfile.appendChild(sparkle);
      }
    }
  }

  // Функция для показа черного экрана с текстом
  function showBlackScreenWithText() {
    return new Promise((resolve) => {
      // Показываем черный экран
      blackScreen.classList.remove('hidden');
      setTimeout(() => {
        blackScreen.classList.add('visible');
      }, 100);

      // Показываем текст с задержкой
      setTimeout(() => {
        welcomeText.classList.add('visible');
      }, 500);

      // Скрываем всё через 3 секунды после завершения анимации печатания
      setTimeout(() => {
        blackScreen.classList.remove('visible');
        setTimeout(() => {
          blackScreen.classList.add('hidden');
          welcomeText.classList.remove('visible');
          resolve();
        }, 500);
      }, 4000); // 1 секунда на анимацию + 3 секунды на отображение
    });
  }

  // Обработчик для кнопки "Подтвердить"
  submitPassword.addEventListener('click', async function() {
    if (passwordInput.value === correctPassword) {
      // Правильный пароль - открываем анкету персонажа
      passwordModal.classList.add('hidden');

      // Если это первый вход, показываем черный экран с текстом
      if (firstLogin) {
        await showBlackScreenWithText();
        firstLogin = false;
      }

      // Показываем модальное окно с анкетой персонажа
      const characterModal = document.getElementById('characterModal');
      characterModal.classList.remove('hidden');

      // Создаем эффект волшебных частиц
      createMagicSparkles();
    } else {
      // Неверный пароль - показываем сообщение об ошибке
      passwordError.textContent = "Неверный пароль";
      passwordError.classList.remove('hidden');
      passwordError.classList.add('visible');

      // Визуальное встряхивание
      passwordInput.style.borderColor = '#ff6b6b';

      setTimeout(() => {
        passwordInput.style.borderColor = '#6e4a77';
      }, 1000);

      // Очищаем поле ввода
      passwordInput.value = '';
      passwordInput.focus();
    }
  });

  // Обработчик для возврата из анкеты персонажа
  const backFromCharacter = document.getElementById('backFromCharacter');
  if (backFromCharacter) {
    backFromCharacter.addEventListener('click', function() {
      document.getElementById('characterModal').classList.add('hidden');
    });
  }

  // Обработчик для клавиши Enter
  passwordInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      submitPassword.click();
    }
  });

  // Обработчик для кнопки "Назад"
  backPassword.addEventListener('click', function() {
    passwordModal.classList.add('hidden');
    passwordInput.value = '';
    passwordError.classList.add('hidden');
  });

  const weatherTranslations = {
    // Корейские названия погодных условий
    'Clear': { ko: '맑음', ru: 'Ясно' },
    'Sunny': { ko: '맑음', ru: 'Солнечно' },
    'Clouds': { ko: '구름', ru: 'Облачно' },
    'Partly cloudy': { ko: '구름 조금', ru: 'Переменная облачность' },
    'Rain': { ko: '비', ru: 'Дождь' },
    'Drizzle': { ko: '이슬비', ru: 'Морось' },
    'Thunderstorm': { ko: '천둥번개', ru: 'Гроза' },
    'Snow': { ko: '눈', ru: 'Снег' },
    'Mist': { ko: '안개', ru: 'Туман' },
    'Haze': { ko: '옅은 안개', ru: 'Дымка' },
    'Fog': { ko: '안개', ru: 'Туман' },
    'Dust': { ko: '먼지', ru: 'Пыль' },
    // Дни недели
    'Monday': { ko: '월요일', ru: 'Понедельник' },
    'Tuesday': { ko: '화요일', ru: 'Вторник' },
    'Wednesday': { ko: '수요일', ru: 'Среда' },
    'Thursday': { ko: '목요일', ru: 'Четверг' },
    'Friday': { ko: '금요일', ru: 'Пятница' },
    'Saturday': { ko: '토요일', ru: 'Суббота' },
    'Sunday': { ko: '일요일', ru: 'Воскресенье' },
    // Другие тексты
    'Seoul Weather': { ko: '서울 날씨', ru: 'Погода в Сеуле' },
    'Seoul, South Korea': { ko: '대한민국 서울', ru: 'Сеул, Южная Корея' },
    'Humidity': { ko: '습도', ru: 'Влажность' },
    'Wind': { ko: '바람', ru: 'Ветер' },
    'Pressure': { ko: '기압', ru: 'Давление' },
    'Tomorrow': { ko: '내일', ru: 'Завтра' },
    'Back': { ko: '뒤로', ru: 'Назад' },
    'Translate': { ko: '번역', ru: 'Перевести' }
  };

  // Функция для прямого добавления обработчиков к погодному виджету
  function setupWeatherHandlers() {
    console.log('Установка обработчиков погоды...');

    // Обработчик для кнопки "Назад"
    const backWeatherBtn = document.getElementById('backWeather');
    if (backWeatherBtn) {
      console.log('Найдена кнопка "Назад", добавляем обработчик');
      backWeatherBtn.addEventListener('click', function() {
        console.log('Нажата кнопка "Назад"');
        const weatherModal = document.getElementById('weatherModal');
        if (weatherModal) {
          weatherModal.classList.add('hidden');
        }
      });
    } else {
      console.warn('Элемент backWeather не найден');
    }

    // Обработчик для кнопки "Перевести"
    const translateWeatherBtn = document.getElementById('translateWeather');
    if (translateWeatherBtn) {
      console.log('Найдена кнопка "Перевести", добавляем обработчик');
      translateWeatherBtn.addEventListener('click', function() {
        console.log('Нажата кнопка "Перевести", переключение языка');
        isWeatherKorean = !isWeatherKorean;
        updateWeatherUI();
        this.textContent = isWeatherKorean ? weatherTranslations['Translate'].ko : weatherTranslations['Translate'].ru;
      });
    } else {
      console.warn('Элемент translateWeather не найден');
    }
  }

  // Устанавливаем обработчик для погодного виджета после загрузки страницы
  document.addEventListener('DOMContentLoaded', function() {
    setupWeatherHandlers();
  });

  // Функция получения актуальной погоды из API
  async function updateWeatherData() {
    const currentTime = new Date().getTime();

    // Сначала сразу устанавливаем стандартные данные, чтобы виджет мог отобразиться без лагов
    if (!weatherData) {
      weatherData = getDefaultWeatherData();
      updateWeatherUI();
    }

    // Обновляем погоду только если прошел час или данных еще нет
    if (!weatherData || (currentTime - lastWeatherUpdate) > 3600000) {
      try {
        // Получаем текущую погоду в Сеуле
        // Используем новый API ключ
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&units=metric&appid=4d8fb5b93d4af21d66a2948710284366');
        const data = await response.json();

        if (!response.ok) {
          throw new Error('Ошибка получения данных о погоде: ' + response.status);
        }

        // Получаем прогноз на 5 дней
        const forecastResponse = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=Seoul,kr&units=metric&appid=4d8fb5b93d4af21d66a2948710284366');
        const forecastData = await forecastResponse.json();

        if (!forecastResponse.ok) {
          throw new Error('Ошибка получения прогноза погоды: ' + forecastResponse.status);
        }

        weatherData = {
          current: {
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            wind: Math.round(data.wind.speed),
            pressure: data.main.pressure,
            icon: data.weather[0].icon
          },
          forecast: processForecast(forecastData.list)
        };

        lastWeatherUpdate = currentTime;
        // Обновляем UI после получения новых данных
        updateWeatherUI();

        // Запланируем следующее обновление через час
        setTimeout(updateWeatherData, 3600000); // 1 час в миллисекундах
      } catch (error) {
        console.error('Ошибка при получении данных о погоде:', error);
        // В случае ошибки используем стандартные данные, если они еще не установлены
        if (!weatherData) {
          weatherData = getDefaultWeatherData();
          updateWeatherUI();
        }
        // В случае ошибки пробуем повторить через 15 минут
        setTimeout(updateWeatherData, 900000); // 15 минут в миллисекундах
      }
    }
  }

  // Обработка данных прогноза для получения погоды на следующие дни
  function processForecast(forecastList) {
    const dailyData = {};
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Текущая дата
    const now = new Date();
    const today = now.getDate();

    forecastList.forEach(item => {
      const date = new Date(item.dt * 1000);
      const day = days[date.getDay()];
      const dayOfMonth = date.getDate();

      // Пропускаем прогнозы на сегодня
      if (dayOfMonth === today) {
        return;
      }

      // Берем только прогноз на полдень (около 12:00)
      if (date.getHours() >= 11 && date.getHours() <= 14) {
        // Если еще нет данных для этого дня или текущий прогноз ближе к полудню
        const existingData = dailyData[day];
        const currentHour = date.getHours();
        const currentDistance = Math.abs(currentHour - 12);

        if (!existingData || currentDistance < Math.abs(existingData.hour - 12)) {
          dailyData[day] = {
            temp: Math.round(item.main.temp),
            condition: item.weather[0].main,
            icon: item.weather[0].icon,
            hour: currentHour,
            date: date,
            dayOfMonth: dayOfMonth
          };
        }
      }
    });

    // Преобразуем в массив для удобства
    let result = [];

    // Создаем массив дат на следующие 5 дней
    for (let i = 1; i <= 5; i++) {
      const futureDate = new Date();
      futureDate.setDate(today + i);
      const futureDay = days[futureDate.getDay()];

      if (dailyData[futureDay]) {
        // Проверяем, что это действительно будущий день, а не день из прошлого цикла
        if (dailyData[futureDay].dayOfMonth === futureDate.getDate()) {
          result.push({
            day: futureDay,
            temp: dailyData[futureDay].temp,
            condition: dailyData[futureDay].condition,
            icon: dailyData[futureDay].icon
          });
        } else {
          // Если нет точного совпадения по дате, используем стандартные данные
          result.push({
            day: futureDay,
            temp: 20 + Math.floor(Math.random() * 8),
            condition: 'Clear',
            icon: '01d'
          });
        }
      } else {
        // Если нет данных для этого дня недели, добавляем стандартные
        result.push({
          day: futureDay,
          temp: 20 + Math.floor(Math.random() * 8),
          condition: 'Clear',
          icon: '01d'
        });
      }
    }

    // Если каким-то образом не получили 5 дней, заполняем остаток
    while (result.length < 5) {
      const randomDay = days[Math.floor(Math.random() * 7)];
      result.push({
        day: randomDay,
        temp: 20 + Math.floor(Math.random() * 8),
        condition: 'Clear',
        icon: '01d'
      });
    }

    return result;
  }

  // Стандартные данные о погоде при отсутствии доступа к API
  function getDefaultWeatherData() {
    return {
      current: {
        temp: 23,
        condition: 'Clear',
        humidity: 45,
        wind: 3,
        pressure: 1013,
        icon: '01d'
      },
      forecast: [
        { day: 'Tomorrow', temp: 25, condition: 'Clear', icon: '01d' },
        { day: 'Wednesday', temp: 24, condition: 'Partly cloudy', icon: '02d' },
        { day: 'Thursday', temp: 21, condition: 'Rain', icon: '10d' },
        { day: 'Friday', temp: 22, condition: 'Clouds', icon: '03d' },
        { day: 'Saturday', temp: 26, condition: 'Clear', icon: '01d' }
      ]
    };
  }

  // Обновление пользовательского интерфейса виджета погоды
  function updateWeatherUI() {
    if (!weatherData) {
      // Если данных о погоде нет, инициализируем стандартные данные
      weatherData = getDefaultWeatherData();
    }

    const lang = isWeatherKorean ? 'ko' : 'ru';

    // Проверяем существование всех элементов перед обновлением
    const headerTitle = document.querySelector('.weather-header h2');
    if (headerTitle) {
      headerTitle.textContent = weatherTranslations['Seoul Weather'][lang];
    }

    const locationElement = document.querySelector('.weather-location');
    if (locationElement) {
      locationElement.textContent = weatherTranslations['Seoul, South Korea'][lang];
    }

    // Обновляем текущую погоду
    const tempElement = document.getElementById('weatherTemp');
    if (tempElement) {
      tempElement.textContent = `${weatherData.current.temp}°C`;
    }

    const conditionElement = document.getElementById('weatherCondition');
    if (conditionElement) {
      conditionElement.textContent = weatherTranslations[weatherData.current.condition]?.[lang] || weatherData.current.condition;
    }

    const humidityElement = document.getElementById('weatherHumidity');
    if (humidityElement) {
      humidityElement.textContent = `${weatherData.current.humidity}%`;
    }

    const windElement = document.getElementById('weatherWind');
    if (windElement) {
      windElement.textContent = `${weatherData.current.wind} m/s`;
    }

    const pressureElement = document.getElementById('weatherPressure');
    if (pressureElement) {
      pressureElement.textContent = `${weatherData.current.pressure} hPa`;
    }

    // Обновляем иконку текущей погоды
    const weatherIconLarge = document.getElementById('weatherIconLarge');
    if (weatherIconLarge) {
      weatherIconLarge.style.backgroundImage = `url('https://openweathermap.org/img/wn/${weatherData.current.icon}@4x.png')`;
    }

    // Обновляем прогноз
    const forecastDays = document.querySelectorAll('.forecast-day');
    if (forecastDays.length > 0) {
      weatherData.forecast.forEach((forecast, index) => {
        if (index < forecastDays.length) {
          const dayElement = forecastDays[index].querySelector('.forecast-date');
          if (dayElement) {
            dayElement.textContent = weatherTranslations[forecast.day]?.[lang] || forecast.day;
          }

          const tempForecastElement = forecastDays[index].querySelector('.forecast-temp');
          if (tempForecastElement) {
            tempForecastElement.textContent = `${forecast.temp}°C`;
          }

          // Обновляем иконку прогноза
          const forecastIcon = forecastDays[index].querySelector('.forecast-icon');
          if (forecastIcon) {
            forecastIcon.className = 'forecast-icon';
            forecastIcon.style.backgroundImage = `url('https://openweathermap.org/img/wn/${forecast.icon}.png')`;
          }
        }
      });
    }

    // Обновляем текст на кнопках
    const backButton = document.getElementById('backWeather');
    const translateButton = document.getElementById('translateWeather');

    if (backButton && translateButton) {
      backButton.textContent = weatherTranslations['Back'][lang];
      translateButton.textContent = weatherTranslations['Translate'][lang];

      // Делаем кнопки более заметными и доступными
      backButton.style.display = 'inline-block';
      translateButton.style.display = 'inline-block';

      // Убедимся, что кнопки имеют правильный стиль и z-index
      backButton.style.zIndex = "9999";
      translateButton.style.zIndex = "9999";
      backButton.style.opacity = "1";
      translateButton.style.opacity = "1";
      backButton.style.position = "relative";
      translateButton.style.position = "relative";

      // Добавляем стиль для лучшей видимости
      backButton.style.fontWeight = "bold";
      translateButton.style.fontWeight = "bold";
      backButton.style.cursor = "pointer";
      translateButton.style.cursor = "pointer";
    }

    // Обновляем видимость кнопок
    const buttonContainer = document.querySelector('.modal-buttons-container');
    const weatherModal = document.getElementById('weatherModal');

    if (buttonContainer && weatherModal) {
      // Убедимся, что кнопки видны и имеют правильный z-index
      buttonContainer.style.display = 'flex';
      buttonContainer.style.zIndex = "9999";
      buttonContainer.style.opacity = "1";
    }

    // Обновляем подписи деталей
    const detailLabels = document.querySelectorAll('.detail-label');
    if (detailLabels.length >= 3) {
      detailLabels[0].textContent = weatherTranslations['Humidity'][lang];
      detailLabels[1].textContent = weatherTranslations['Wind'][lang];
      detailLabels[2].textContent = weatherTranslations['Pressure'][lang];
    }

    console.log('Интерфейс погоды обновлен, язык: ' + (isWeatherKorean ? 'корейский' : 'русский'));
  }

  // Глитч-эффект при клике на текст на ноутбуке
  document.getElementById('laptopText').addEventListener('click', function() {
    showGlitchEffect();
  });

  function showGlitchEffect() {
    // Создаем элемент-контейнер для глюк эффекта
    const glitchContainer = document.createElement('div');
    glitchContainer.className = 'extreme-glitch-container';
    glitchContainer.style.position = 'fixed';
    glitchContainer.style.top = '0';
    glitchContainer.style.left = '0';
    glitchContainer.style.width = '100%';
    glitchContainer.style.height = '100%';
    glitchContainer.style.zIndex = '9999';
    glitchContainer.style.pointerEvents = 'none';
    document.body.appendChild(glitchContainer);

    // Добавляем эффект глючного экрана
    document.body.classList.add('screen-glitch');

    // Включаем эффект стимпанк
    document.body.classList.add('steampunk-effect');

    // Играем звук глюков и смеха
    const laughSound = document.getElementById('laughSound');
    laughSound.currentTime = 0;
    laughSound.play();

    // Создаем звук глюков - белый шум
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const noiseNode = audioContext.createScriptProcessor(4096, 1, 1);
    noiseNode.onaudioprocess = function(e) {
      const output = e.outputBuffer.getChannelData(0);
      for (let i = 0; i < output.length; i++) {
        output[i] = Math.random() * 2 - 1;
      }
    };

    const gainNode = audioContext.createGain();
    gainNode.gain.value = 0.15; // Уменьшаем громкость шума
    noiseNode.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Создаем шестеренки на экране
    createGears();

    // Создаем эффект глючного экрана с ошибками
    showErrorMessages();

    // Создаем искажение экрана - мерцающие цветные блоки
    for (let i = 0; i < 20; i++) {
      const glitchBlock = document.createElement('div');
      glitchBlock.className = 'glitch-block';
      glitchBlock.style.position = 'absolute';
      glitchBlock.style.width = Math.random() * 100 + 50 + 'px';
      glitchBlock.style.height = Math.random() * 50 + 20 + 'px';
      glitchBlock.style.left = Math.random() * 100 + '%';
      glitchBlock.style.top = Math.random() * 100 + '%';
      glitchBlock.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 0.7 + 0.3})`;
      glitchBlock.style.mixBlendMode = 'difference';
      glitchBlock.style.transform = `skew(${Math.random() * 20 - 10}deg)`;
      glitchBlock.style.animation = `glitch-block ${Math.random() * 0.5 + 0.2}s infinite alternate`;
      glitchBlock.style.zIndex = '9998';
      glitchBlock.style.pointerEvents = 'none';
      glitchContainer.appendChild(glitchBlock);
    }

    // Добавляем дрожащий фрейм
    const shakeFrame = document.createElement('div');
    shakeFrame.className = 'shake-frame';
    shakeFrame.style.position = 'fixed';
    shakeFrame.style.top = '0';
    shakeFrame.style.left = '0';
    shakeFrame.style.width = '100%';
    shakeFrame.style.height = '100%';
    shakeFrame.style.border = '10px solid rgba(255, 0, 0, 0.5)';
    shakeFrame.style.animation = 'extreme-glitch-shake 0.1s infinite';
    shakeFrame.style.boxShadow = 'inset 0 0 50px rgba(255, 0, 0, 0.5)';
    shakeFrame.style.pointerEvents = 'none';
    shakeFrame.style.zIndex = '9997';
    glitchContainer.appendChild(shakeFrame);

    // Добавляем RGB сдвиг
    const rgbSplit = document.createElement('div');
    rgbSplit.className = 'rgb-split';
    rgbSplit.style.position = 'fixed';
    rgbSplit.style.top = '0';
    rgbSplit.style.left = '0';
    rgbSplit.style.width = '100%';
    rgbSplit.style.height = '100%';
    rgbSplit.style.backgroundImage = 'linear-gradient(transparent, transparent)';
    rgbSplit.style.boxShadow = 'inset 0 0 100px rgba(0, 255, 255, 0.5), inset 0 0 100px rgba(255, 0, 0, 0.5)';
    rgbSplit.style.mixBlendMode = 'screen';
    rgbSplit.style.animation = 'rgb-shift 0.4s infinite alternate';
    rgbSplit.style.zIndex = '9996';
    rgbSplit.style.pointerEvents = 'none';
    glitchContainer.appendChild(rgbSplit);

    // Создаем "синий экран смерти"
    const bsodFlash = document.createElement('div');
    bsodFlash.className = 'bsod-flash';
    bsodFlash.style.position = 'fixed';
    bsodFlash.style.top = '0';
    bsodFlash.style.left = '0';
    bsodFlash.style.width = '100%';
    bsodFlash.style.height = '100%';
    bsodFlash.style.backgroundColor = '#0000AA';
    bsodFlash.style.color = 'white';
    bsodFlash.style.padding = '50px';
    bsodFlash.style.fontFamily = 'Courier New, monospace';
    bsodFlash.style.zIndex = '10000';
    bsodFlash.style.opacity = '0';
    bsodFlash.style.transition = 'opacity 0.2s';
    bsodFlash.style.pointerEvents = 'none';
    bsodFlash.innerHTML = `
      <h1>FATAL ERROR</h1>
      <p>System halted. Memory corruption detected at 0x0000FFF8.</p>
      <p>ERROR: Critical system failure. Immediate shutdown required.</p>
      <p>CODE: 0xDEADC0DE</p>
      <p>Press any key to self-destruct...</p>
    `;
    glitchContainer.appendChild(bsodFlash);

    // Мигаем синим экраном смерти
    setTimeout(() => {
      bsodFlash.style.opacity = '1';
      setTimeout(() => {
        bsodFlash.style.opacity = '0';
      }, 400);
    }, 1500);

    // Создаем мерцающий текст "система взломана"
    const hackedText = document.createElement('div');
    hackedText.className = 'hacked-text';
    hackedText.style.position = 'fixed';
    hackedText.style.top = '50%';
    hackedText.style.left = '50%';
    hackedText.style.transform = 'translate(-50%, -50%)';
    hackedText.style.fontSize = '80px';
    hackedText.style.fontWeight = 'bold';
    hackedText.style.color = '#FF0000';
    hackedText.style.textShadow = '0 0 20px #FF0000';
    hackedText.style.zIndex = '10001';
    hackedText.style.animation = 'blink 0.2s infinite';
    hackedText.style.opacity = '0';
    hackedText.style.pointerEvents = 'none';
    hackedText.textContent = 'СИСТЕМА ВЗЛОМАНА';
    glitchContainer.appendChild(hackedText);

    // Показываем текст "система взломана"
    setTimeout(() => {
      hackedText.style.opacity = '1';
    }, 2000);

    // Через 3 секунды убираем все эффекты
    setTimeout(() => {
      // Остановка звука
      noiseNode.disconnect();
      gainNode.disconnect();

      // Удаляем эффекты
      document.body.classList.remove('steampunk-effect');
      document.body.classList.remove('screen-glitch');

      // Удаляем элементы
      const gears = document.querySelectorAll('.animated-gear');
      gears.forEach(gear => gear.remove());
      const errors = document.querySelectorAll('.glitch-error');
      errors.forEach(error => error.remove());

      // Удаляем контейнер с эффектами
      if (glitchContainer && glitchContainer.parentNode) {
        glitchContainer.parentNode.removeChild(glitchContainer);
      }

      // Скрываем текст WARNING
      document.getElementById('laptopText').style.display = 'none';

      // Показываем диалоговое окно с реакцией после глюк-эффекта
      setTimeout(() => {
        showDialog('Я', 'Какого хуя произошло..', function() {
          // Действия после закрытия диалога (если нужны)
        });
      }, 500);
    }, 3000);
  }

  function createGears() {
    // Создаем 15 шестеренок разного размера
    for (let i = 0; i < 15; i++) {
      const gear = document.createElement('div');
      gear.className = 'animated-gear';

      // Случайный размер
      const size = 30 + Math.random() * 80;

      // Случайная позиция
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;

      // Случайное направление и скорость вращения
      const direction = Math.random() > 0.5 ? 1 : -1;
      const speed = 5 + Math.random() * 15;

      gear.style.width = `${size}px`;
      gear.style.height = `${size}px`;
      gear.style.left = `${posX}px`;
      gear.style.top = `${posY}px`;
      gear.style.animationDuration = `${speed}s`;
      gear.style.animationDirection = direction > 0 ? 'normal' : 'reverse';

      document.body.appendChild(gear);
    }
  }

  function showErrorMessages() {
    // Создаем большое количество сообщений об ошибках (от 30 до 50)
    const errorCount = 30 + Math.floor(Math.random() * 20);

    // Расширенный массив с разными вариантами сообщений об ошибках
    const errorTexts = [
      "CRITICAL ERROR: SYSTEM FAILURE",
      "FATAL ERROR: MEMORY CORRUPTION",
      "ERROR: GEAR MALFUNCTION",
      "DANGER: STEAM PRESSURE CRITICAL",
      "ERROR: CALCULATION MALFUNCTION",
      "WARNING: BOILER OVERHEATING",
      "ERROR: COGWHEEL DESYNCHRONIZATION",
      "CRITICAL: PRESSURE VALVE FAILURE",
      "ERROR: BRASS MECHANISM JAMMED",
      "DANGER: AETHER FLUX UNSTABLE",
      "ERROR: 0x00000E74 - BSOD IMMINENT",
      "SECURITY BREACH DETECTED",
      "FIREWALL COMPROMISED: SECTOR 7",
      "FATAL EXCEPTION: 0xC000021A",
      "KERNEL PANIC - NOT SYNCING",
      "ERROR: HAL.DLL CORRUPTED",
      "SYSTEM32 DIRECTORY COMPROMISED",
      "PROCESSOR OVERHEAT WARNING",
      "STACK OVERFLOW AT 0x08FFF734",
      "REGISTRY HIVE CORRUPT",
      "MEMORY DUMP IN PROGRESS...",
      "VIRUS DETECTED: TROJANIZED ROOTKIT",
      "HARD DRIVE FAILURE IMMINENT",
      "ERROR: SYSTEM CANNOT FIND FILE",
      "DISK BOOT FAILURE",
      "DATA CORRUPTION DETECTED",
      "SYSTEM SHUTDOWN INITIATED",
      "DEVICE DRIVER NOT FOUND",
      "DISK SECTORS UNREADABLE",
      "CORRUPTED FILE SYSTEM",
      "UNEXPECTED KERNEL MODE TRAP",
      "INVALID SYSTEM DISK",
      "FATAL: CANNOT MOUNT ROOT",
      "SYSTEM HALTED",
      "BAD POOL HEADER",
      "UNEXPECTED INTERRUPT",
      "DEVICE NOT RESPONDING"
    ];

    // Создаем дополнительный контейнер для всех сообщений об ошибках
    const errorContainer = document.createElement('div');
    errorContainer.className = 'error-container';
    errorContainer.style.position = 'fixed';
    errorContainer.style.top = '0';
    errorContainer.style.left = '0';
    errorContainer.style.width = '100%';
    errorContainer.style.height = '100%';
    errorContainer.style.pointerEvents = 'none';
    errorContainer.style.zIndex = '9990';
    document.body.appendChild(errorContainer);

    // Создаем матрицу-подобный эффект на заднем плане
    const matrixElem = document.createElement('div');
    matrixElem.className = 'matrix-bg';
    matrixElem.style.position = 'fixed';
    matrixElem.style.top = '0';
    matrixElem.style.left = '0';
    matrixElem.style.width = '100%';
    matrixElem.style.height = '100%';
    matrixElem.style.color = '#0f0';
    matrixElem.style.fontSize = '12px';
    matrixElem.style.fontFamily = 'monospace';
    matrixElem.style.lineHeight = '12px';
    matrixElem.style.opacity = '0.1';
    matrixElem.style.zIndex = '9989';
    matrixElem.style.overflow = 'hidden';
    matrixElem.style.pointerEvents = 'none';

    // Заполняем матрицу случайными символами
    let matrixContent = '';
    for (let i = 0; i < 500; i++) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?";
      matrixContent += chars.charAt(Math.floor(Math.random() * chars.length));
      if (i % 50 === 0) matrixContent += '<br>';
    }
    matrixElem.innerHTML = matrixContent;
    errorContainer.appendChild(matrixElem);

    // Функция для случайного выбора из массива
    const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

    // Функция для генерации случайного шестнадцатеричного кода ошибки
    const generateHexError = () => '0x' + Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(8, '0');

    // Быстрее создаем ошибки для более интенсивного эффекта
    for (let i = 0; i < errorCount; i++) {
      setTimeout(() => {
        const error = document.createElement('div');
        error.className = 'glitch-error';

        // Добавляем случайный код ошибки для большей реалистичности
        let errorText = getRandomItem(errorTexts);
        if (Math.random() > 0.5) {
          errorText += ` ${generateHexError()}`;
        }
        error.textContent = errorText;

        // Случайная позиция на экране - по всему экрану
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        // Случайные стили для разнообразия
        const size = 12 + Math.floor(Math.random() * 14); // Увеличили размеры
        const rotation = -10 + Math.random() * 20; // Увеличили угол поворота

        error.style.position = 'absolute';
        error.style.left = `${posX}px`;
        error.style.top = `${posY}px`;
        error.style.fontSize = `${size}px`;
        error.style.transform = `rotate(${rotation}deg)`;
        error.style.fontFamily = 'monospace, Courier New';
        error.style.fontWeight = 'bold';
        error.style.padding = '3px 8px';
        error.style.zIndex = '9991';
        error.style.whiteSpace = 'nowrap';
        error.style.pointerEvents = 'none';

        // Случайные цвета текста ошибок для большего разнообразия
        const colors = ['#ff0000', '#00ff00', '#ffff00', '#ff00ff', '#ffffff'];
        error.style.color = getRandomItem(colors);
        error.style.textShadow = `0 0 5px ${getRandomItem(colors)}`;

        // Случайные типы границ
        if (Math.random() > 0.7) {
          error.style.border = `1px solid ${getRandomItem(colors)}`;
          error.style.borderRadius = '3px';
        }

        // Случайный фон для некоторых сообщений
        if (Math.random() > 0.8) {
          error.style.backgroundColor = 'rgba(0,0,0,0.7)';
        }

        // Случайная анимация с увеличенной интенсивностью
        const animations = [
          'glitch-error-1 0.8s infinite',
          'glitch-error-2 0.4s infinite',
          'glitch-error-3 0.6s infinite',
          'extreme-glitch-effect-1 0.3s infinite',
          'extreme-glitch-effect-2 0.5s infinite',
          'shake 0.1s infinite'
        ];
        error.style.animation = getRandomItem(animations);

        errorContainer.appendChild(error);

        // Для некоторых ошибок создаем эффект мигания для большей драматичности
        if (Math.random() > 0.7) {
          const blinkInterval = setInterval(() => {
            error.style.visibility = error.style.visibility === 'hidden' ? 'visible' : 'hidden';
          }, 100 + Math.random() * 200);

          setTimeout(() => {
            clearInterval(blinkInterval);
          }, 3000);
        }

        // Для некоторых ошибок создаем эффект перемещения
        if (Math.random() > 0.6) {
          const initialX = parseFloat(error.style.left);
          const initialY = parseFloat(error.style.top);
          const moveInterval = setInterval(() => {
            const newX = initialX + (Math.random() * 40 - 20);
            const newY = initialY + (Math.random() * 40 - 20);
            error.style.left = `${newX}px`;
            error.style.top = `${newY}px`;
          }, 200);

          setTimeout(() => {
            clearInterval(moveInterval);
          }, 3000);
        }
      }, Math.random() * 1000); // Ускорили появление ошибок
    }

    // Создаем эффект "командной строки" с быстрым выводом текста
    const terminalOutput = document.createElement('div');
    terminalOutput.className = 'terminal-output';
    terminalOutput.style.position = 'fixed';
    terminalOutput.style.bottom = '20px';
    terminalOutput.style.left = '20px';
    terminalOutput.style.width = '50%';
    terminalOutput.style.maxHeight = '30%';
    terminalOutput.style.overflow = 'hidden';
    terminalOutput.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    terminalOutput.style.color = '#0f0';
    terminalOutput.style.fontFamily = 'monospace';
    terminalOutput.style.fontSize = '12px';
    terminalOutput.style.padding = '10px';
    terminalOutput.style.zIndex = '9992';
    terminalOutput.style.border = '1px solid #0f0';
    terminalOutput.style.pointerEvents = 'none';
    errorContainer.appendChild(terminalOutput);

    // Имитация командной строки с быстрым автоматическим вводом
    const commands = [
      'INITIALIZE SYSTEM SCAN',
      'DETECTING ANOMALIES...',
      'WARNING: UNAUTHORIZED ACCESS DETECTED',
      'SCANNING MEMORY REGIONS...',
      'CRITICAL ERROR: KERNEL32.DLL COMPROMISED',
      'ATTEMPTING TO RECOVER CORRUPTED FILES',
      'ERROR: RECOVERY FAILED',
      'SECURITY BREACH AT SECTOR 7G',
      'INITIATING COUNTERMEASURES...',
      'WARNING: COUNTERMEASURES INEFFECTIVE',
      'SYSTEM CORRUPTION AT 47%',
      'SYSTEM CORRUPTION AT 63%',
      'SYSTEM CORRUPTION AT 89%',
      'CRITICAL: SYSTEM FAILURE IMMINENT',
      `EMERGENCY SHUTDOWN SEQUENCE INITIATED: ${Math.floor(Math.random() * 10) + 1} SECONDS REMAINING`
    ];

    let commandIndex = 0;
    const typeCommand = () => {
      if (commandIndex < commands.length) {
        const cmd = commands[commandIndex];
        terminalOutput.innerHTML += `> ${cmd}<br>`;
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
        commandIndex++;
        setTimeout(typeCommand, 150 + Math.random() * 100);
      }
    };

    // Запускаем эффект командной строки
    setTimeout(typeCommand, 200);

    // Удалим контейнер с ошибками через 3 секунды
    setTimeout(() => {
      if (errorContainer && errorContainer.parentNode) {
        errorContainer.parentNode.removeChild(errorContainer);
      }
    }, 3000);
  }

  // Диалоговые окна
  function showDialog(name, text, callback) {
    // Если передан только текст и колбэк (для обратной совместимости)
    if (!callback && typeof text === 'function') {
      callback = text;
      text = name;
      name = '';
    }

    if (name) {
      dialogText.innerHTML = `<strong>${name}:</strong> ${text}`;
    } else {
      dialogText.textContent = text;
    }

    dialogBox.classList.remove('hidden');

    continueDialog.onclick = function() {
      dialogBox.classList.add('hidden');
      if (callback) callback();
    };
  }

  // Инициализация карты Сеула
  seoulMap.addEventListener('click', function() {
    showDialog('На карте отмечены станции метро Сеула. Район Каннам особенно выделен.');
  });

  });

// Функция для создания календаря
function createCalendar() {
  // Проверяем, существует ли модальное окно календаря
  let calendarModal = document.getElementById('calendarModal');
  // Флаг для отслеживания языка (true - корейский, false - русский)
  let isKorean = true;

  if (!calendarModal) {
    // Создаем модальное окно, если оно не существует
    calendarModal = document.createElement('div');
    calendarModal.id = 'calendarModal';
    calendarModal.className = 'modal';
    calendarModal.innerHTML = `
      <div class="modal-content calendar-app">
        <div class="calendar-header">
          <div class="calendar-title-container">
            <div class="calendar-icon"></div>
            <div class="calendar-title">
              <h2 id="calendarMonth"></h2>
              <p id="calendarYear"></p>
            </div>
          </div>
          <div class="calendar-nav-controls">
            <button id="prevMonth" class="month-nav-button">&#10094;</button>
            <button id="nextMonth" class="month-nav-button">&#10095;</button>
          </div>
        </div>

        <div class="calendar-controls">
          <button id="translateCalendar" class="calendar-button calendar-translate-button">Перевести</button>
        </div>

        <div class="calendar-body">
          <div id="weekdaysRow" class="weekdays"></div>
          <div id="calendarDays" class="days"></div>
        </div>

        <div class="calendar-today">
          <div class="today-header">Сегодня</div>
          <div id="todayDate"></div>
          <div id="todayTime"></div>
        </div>

        <div class="calendar-footer">
          <button id="closeCalendar" class="calendar-button close-button">Закрыть</button>
        </div>
      </div>
    `;
    document.body.appendChild(calendarModal);

    // Добавление стилей для календаря
    const calendarStyle = document.createElement('style');
    calendarStyle.textContent = `
      .calendar-app {
        background: linear-gradient(145deg, #121326 0%, #1e1e42 50%, #252344 100%);
        width: 90%;
        max-width: 800px;
        height: auto;
        max-height: 90vh;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        color: #ffffff;
        border: 2px solid #3a3a7a;
        padding: 0;
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      /* Убираем золотую обводку для календаря */
      .modal-content.calendar-app::before {
        display: none;
      }

      .calendar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: rgba(30, 30, 60, 0.8);
        border-bottom: 1px solid #3a3a7a;
      }

      .calendar-title-container {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .calendar-icon {
        width: 32px;
        height: 32px;
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.7));
      }

      .calendar-title {
        display: flex;
        flex-direction: column;
      }

      .calendar-title h2 {
        margin: 0;
        font-size: 24px;
        font-weight: bold;
        color: #ffffff;
      }

      .calendar-title p {
        margin: 5px 0 0;
        font-size: 16px;
        color: #b8b8e6;
      }

      .calendar-nav-controls {
        display: flex;
        gap: 10px;
      }

      .month-nav-button {
        background-color: rgba(80, 80, 180, 0.3);
        border: 1px solid rgba(120, 120, 220, 0.5);
        color: white;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
      }

      .month-nav-button:hover {
        background-color: rgba(100, 100, 200, 0.5);
        transform: scale(1.1);
      }

      .month-nav-button:active {
        transform: scale(0.95);
      }

      .calendar-controls {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        background: rgba(40, 40, 80, 0.5);
      }

      .calendar-button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 100px;
      }

      .calendar-back-button {
        background: linear-gradient(to bottom, #e74c3c, #c0392b);
      }

      .calendar-translate-button {
        background: linear-gradient(to bottom, #3498db, #2980b9);
      }

      .calendar-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
      }

      .calendar-button:active {
        transform: translateY(0);
        box-shadow: none;
      }

      .calendar-body {
        padding: 15px 20px;
        background: rgba(50, 50, 100, 0.3);
        flex: 1;
        overflow-y: auto;
      }

      .weekdays {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
        margin-bottom: 10px;
        text-align: center;
      }

      .weekdays div {
        padding: 8px 0;
        color: #b8b8e6;
        font-weight: bold;
        font-size: 14px;
        border-bottom: 1px solid rgba(120, 120, 220, 0.3);
      }

      .days {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 8px;
        text-align: center;
      }

      .days div {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background: rgba(60, 60, 120, 0.2);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }

      .days div:hover {
        background: rgba(80, 80, 150, 0.4);
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      .days .today {
        background: linear-gradient(to bottom, #5c6bc0, #3f51b5);
        color: white;
        font-weight: bold;
        box-shadow: 0 0 8px rgba(63, 81, 181, 0.6);
      }

      .days .other-month {
        opacity: 0.4;
        background: rgba(60, 60, 120, 0.1);
      }

      .days .lunar-date {
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 9px;
        color: #ffb8b8;
        line-height: 1;
        pointer-events: none;
      }

      .calendar-today {
        padding: 15px 20px;
        background: rgba(30, 30, 60, 0.6);
        border-top: 1px solid #3a3a7a;
        text-align: center;
      }

      .today-header {
        font-size: 16px;
        font-weight: bold;
        color: #b8b8e6;
        margin-bottom: 8px;
        text-transform: uppercase;
      }

      #todayDate {
        font-size: 14px;
        margin-bottom: 10px;
        color: #ffffff;
      }

      #todayTime {
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
        margin-top: 5px;
      }

      .time-separator {
        animation: blink-separator 1s infinite;
        color: #b8b8e6;
        margin: 0 2px;
      }

      @keyframes blink-separator {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.3; }
      }

      .calendar-footer {
        padding: 15px 20px;
        background: rgba(30, 30, 60, 0.8);
        border-top: 1px solid #3a3a7a;
        text-align: center;
      }

      .close-button {
        background: linear-gradient(to bottom, #673ab7, #512da8);
        padding: 10px 20px;
        min-width: 120px;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(calendarStyle);

    // Обработчики событий
    document.getElementById('closeCalendar').addEventListener('click', function() {
      calendarModal.classList.add('hidden');
    });

    // Кнопка Назад удалена

    // Обработчик для кнопки перевода
    document.getElementById('translateCalendar').addEventListener('click', function() {
      isKorean = !isKorean;
      updateCalendar(currentDate, isKorean);
      this.textContent = isKorean ? 'Перевести' : '번역하다';
    });

    // Обработчики для пролистывания месяцев
    let currentDate = new Date();
    document.getElementById('prevMonth').addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() - 1);
      updateCalendar(currentDate, isKorean);
    });

    document.getElementById('nextMonth').addEventListener('click', function() {
      currentDate.setMonth(currentDate.getMonth() + 1);
      updateCalendar(currentDate, isKorean);
    });

    // Инициализация функции обновления времени
    updateSeoulTimeForCalendar();

    // Инициализация календаря
    updateCalendar(currentDate, isKorean);
  } else {
    // Просто показываем существующее модальное окно и обновляем данные
    let currentDate = new Date();
    updateCalendar(currentDate, true);
    updateSeoulTimeForCalendar();
    // Сбрасываем текст кнопки перевода при повторном открытии
    const translateBtn = document.getElementById('translateCalendar');
    if (translateBtn) {
      translateBtn.textContent = 'Перевести';
    }
  }

  calendarModal.classList.remove('hidden');
}

// Функция обновления календаря
function updateCalendar(date, isKorean = true) {
  // Получаем дату в часовом поясе Сеула
  const seoulDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const year = seoulDate.getFullYear();
  const month = seoulDate.getMonth();

  // Названия месяцев на корейском и русском
  const monthNamesKo = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const monthNamesRu = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

  // Дни недели
  const weekdaysKo = ['일', '월', '화', '수', '목', '금', '토'];
  const weekdaysRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  // Обновляем заголовок календаря
  const calendarMonthElement = document.getElementById('calendarMonth');
  const calendarYearElement = document.getElementById('calendarYear');
  if (calendarMonthElement) {
    calendarMonthElement.textContent = isKorean ? monthNamesKo[month] : monthNamesRu[month];
  }
  if (calendarYearElement) {
    calendarYearElement.textContent = isKorean ? year + '년' : year + ' г.';
  }

  // Обновляем дни недели
  const weekdaysRow = document.getElementById('weekdaysRow');
  if (weekdaysRow) {
    weekdaysRow.innerHTML = '';
    const currentWeekdays = isKorean ? weekdaysKo : weekdaysRu;
    currentWeekdays.forEach(day => {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = day;
      weekdaysRow.appendChild(dayDiv);
    });
  }

  // Обновляем кнопки
  const backCalendarBtn = document.getElementById('backCalendar');
  const translateCalendarBtn = document.getElementById('translateCalendar');
  const closeCalendarBtn = document.getElementById('closeCalendar');
  const todayHeader = document.querySelector('.today-header');

  if (backCalendarBtn) {
    backCalendarBtn.textContent = isKorean ? '뒤로' : 'Назад';
  }

  if (translateCalendarBtn) {
    translateCalendarBtn.textContent = isKorean ? '번역하다' : 'Перевести';
  }

  if (closeCalendarBtn) {
    closeCalendarBtn.textContent = isKorean ? '닫기' : 'Закрыть';
  }

  if (todayHeader) {
    todayHeader.textContent = isKorean ? '오늘' : 'Сегодня';
  }

  // Первый день месяца
  const firstDay = new Date(year, month, 1);
  // Последний день месяца
  const lastDay = new Date(year, month + 1, 0);

  // День недели для первого дня месяца (0 - воскресенье, 6 - суббота)
  const firstDayOfWeek = firstDay.getDay();

  // Получаем контейнер для дней
  const daysContainer = document.getElementById('calendarDays');
  if (!daysContainer) return;

  daysContainer.innerHTML = '';

  // Добавляем дни предыдущего месяца
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = prevMonthLastDay - i;
    dayDiv.className = 'other-month';
    daysContainer.appendChild(dayDiv);
  }

  // Текущий день в Сеуле для выделения
  const todayInSeoul = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
  const isCurrentMonth = todayInSeoul.getMonth() === month && todayInSeoul.getFullYear() === year;
  const currentDay = todayInSeoul.getDate();

  // Добавляем дни текущего месяца
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;

    // Выделяем текущий день
    if (isCurrentMonth && i === currentDay) {
      dayDiv.className = 'today';
    }

    // Добавляем лунную дату
    const lunarDateSpan = document.createElement('span');
    lunarDateSpan.className = 'lunar-date';
    lunarDateSpan.textContent = isKorean ? getLunarDateSimulation(i) : getLunarDateSimulationRu(i);
    dayDiv.appendChild(lunarDateSpan);

    daysContainer.appendChild(dayDiv);
  }

  // Добавляем дни следующего месяца, чтобы заполнить сетку
  const totalDaysShown = daysContainer.children.length;
  const remainingCells = 42 - totalDaysShown; // 6 строк по 7 дней

  for (let i = 1; i <= remainingCells; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;
    dayDiv.className = 'other-month';
    daysContainer.appendChild(dayDiv);
  }

  // Обновляем текущую дату и время
  updateTodayInfo(isKorean);
}

// Функция для получения имитации лунной даты на корейском
function getLunarDateSimulation(day) {
  return (day % 29) + 1 + '일';
}

// Функция для получения имитации лунной даты на русском
function getLunarDateSimulationRu(day) {
  return (day % 29) + 1;
}

// Функция обновления информации о текущем дне и времени
function updateTodayInfo(isKorean = true) {
  const now = new Date();
  const seoulNow = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

  // Форматирование даты
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };

  const todayDateElement = document.getElementById('todayDate');
  if (todayDateElement) {
    try {
      let formattedDate = seoulNow.toLocaleDateString(isKorean ? 'ko-KR' : 'ru-RU', options);

      // Для русской версии добавляем правильные окончания
      if (!isKorean) {
        const weekday = formattedDate.split(',')[0];
        const restOfDate = formattedDate.split(',')[1].trim();
        const formattedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
        formattedDate = `${formattedWeekday}, ${restOfDate}`;
      }

      todayDateElement.textContent = formattedDate;
    } catch (error) {
      console.error("Ошибка при обновлении даты:", error);
      todayDateElement.textContent = isKorean ? 
        `${seoulNow.getFullYear()}년 ${seoulNow.getMonth() + 1}월 ${seoulNow.getDate()}일` : 
        `${seoulNow.getDate()}.${seoulNow.getMonth() + 1}.${seoulNow.getFullYear()}`;
    }
  }
}

// Функция обновления времени в Сеуле для календаря
function updateSeoulTimeForCalendar() {
  const now = new Date();
  const seoulTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

  const todayTimeElement = document.getElementById('todayTime');
  if (todayTimeElement) {
    try {
      // Форматирование времени с лидирующими нулями
      const hours = seoulTime.getHours().toString().padStart(2, '0');
      const minutes = seoulTime.getMinutes().toString().padStart(2, '0');
      const seconds = seoulTime.getSeconds().toString().padStart(2, '0');

      // Устанавливаем время с анимированным мигающим разделителем
      todayTimeElement.innerHTML = `${hours}<span class="time-separator">:</span>${minutes}<span class="time-separator">:</span>${seconds}`;
    } catch (error) {
      console.error("Ошибка при обновлении времени:", error);
      todayTimeElement.textContent = "00:00:00";
    }

    // Обновление времени каждую секунду
    setTimeout(updateSeoulTimeForCalendar, 1000);
  }
}

// Инициализация обработчика для иконки календаря
document.addEventListener('DOMContentLoaded', function() {
  const laptopModal = document.getElementById('laptopModal');
  if (laptopModal) {
    const calendarIcon = laptopModal.querySelector('#calendarIcon');
    if (calendarIcon) {
      calendarIcon.addEventListener('click', createCalendar);
    }
  }
});

// Глобальная переменная для почтовых сообщений
window.emailMessages = [
  {
    id: 1,
    sender: '김태준',
    senderEmail: 'TaeJun@police.kr.gov',
    subject: '수사 상황 보고서',
    date: '2025-03-01',
    content: '안녕하세요,<br><br>최근 실종 사건에 대한 조사를 계속하고 있습니다. 모든 정보를 검토 중이며 의심스러운 패턴을 발견했습니다. 곧 추가 정보를 공유하겠습니다.<br><br>경감 김태준',
    subjectRu: 'Отчет о ходе расследования',
    contentRu: 'Здравствуйте,<br><br>Мы продолжаем расследование недавних случаев исчезновения. Проверяем всю информацию и обнаружили подозрительные закономерности. Скоро поделюсь дополнительной информацией.<br><br>Капитан Ким Тэ Джун',
    isRead: false,
    folder: 'inbox'
  },
  {
    id: 2,
    sender: '박민호',
    senderEmail: 'forensics@police.kr.gov',
    subject: '법의학 결과',
    date: '2025-03-03',
    content: '마지막 실종 장소에서 발견된 흔적에 대한 분석이 완료되었습니다. 모든 증거는 범인이 현장에 오래 머물지 않았음을 시사합니다. 완전한 보고서는 첨부 파일에 있습니다.<br><br>법의학팀 박민호',
    subjectRu: 'Результаты судебно-медицинской экспертизы',
    contentRu: 'Анализ следов, обнаруженных на месте последнего исчезновения, завершен. Все улики указывают на то, что преступник не задерживался на месте преступления долго. Полный отчет прилагается.<br><br>Судмедэксперт Пак Мин Хо',
    isRead: false,
    folder: 'inbox'
  },
  {
    id: 3,
    sender: '이진석',
    senderEmail: 'witness@police.kr.gov',
    subject: '새로운 목격자 진술',
    date: '2025-03-05',
    content: '강남 지역에서 새로운 목격자를 발견했습니다. 그는 검은 양복을 입은 남자가 마지막 피해자와 함께 있는 것을 보았다고 주장합니다. 목격자는 그 남자의 얼굴이 기억나지 않는다고 말했습니다. 이것은 우리의 용의자와 일치합니다.<br><br>이진석 형사',
    subjectRu: 'Показания нового свидетеля',
    contentRu: 'Мы нашли нового свидетеля в районе Каннам. Он утверждает, что видел мужчину в черном костюме с последней жертвой. Свидетель говорит, что не может вспомнить лицо мужчины. Это соответствует описанию нашего подозреваемого.<br><br>Детектив Ли Джин Сок',
    isRead: false,
    folder: 'inbox'
  },
  {
    id: 4,
    sender: '최윤정',
    senderEmail: 'profiler@police.kr.gov',
    subject: '범죄자 프로파일링',
    date: '2025-03-07',
    content: '용의자의 초기 프로파일이 준비되었습니다. 그는 고도로 지능적이며 계획적입니다. 그의 공연자로서의 배경은 그가 사람들을 조종하는 데 능숙하다는 것을 시사합니다. 또한 그는 자신의 행동에 대한 어떤 죄책감도 보이지 않습니다.<br><br>범죄심리 분석관 최윤정',
    subjectRu: 'Профиль преступника',
    contentRu: 'Предварительный профиль подозреваемого готов. Он высокоинтеллектуален и методичен. Его опыт как исполнителя указывает на то, что он умеет манипулировать людьми. Также он не проявляет никаких признаков раскаяния за свои действия.<br><br>Криминальный профайлер Чой Юн Джон',
    isRead: false,
    folder: 'inbox'
  },
  {
    id: 5,
    sender: '남수호',
    senderEmail: 'witness@citizen.kr',
    subject: '저... 그를 봤어요',
    date: '2025-03-10',
    content: '저는 그 사람을 봤습니다... 어떤 일이 일어났는지 모르겠어요. 그는 단지 미소를 지었고... 그 후 모든 것이 흐릿해졌어요. 지금 안전한지 확실하지 않습니다. 누군가 저를 지켜보고 있는 것 같아요. 제발 도와주세요.<br><br>남수호',
    subjectRu: 'Я... я видел его',
    contentRu: 'Я видел этого человека... Не понимаю, что произошло. Он просто улыбнулся... а потом всё стало размытым. Не уверен, что я в безопасности сейчас. Мне кажется, кто-то наблюдает за мной. Пожалуйста, помогите.<br><br>Нам Су Хо',
    isRead: false, 
    folder: 'inbox'
  },
  {
    id: 6,
    sender: '나',
    senderEmail: 'detective@police.kr.gov',
    subject: '사건 보고서 제출',
    date: '2025-03-09',
    content: '첨부된 파일에서 최신 사건 보고서를 확인하세요. 모든 증거가 포함되어 있습니다. 추가 질문이 있으시면 알려주세요.<br><br>감사합니다.',
    subjectRu: 'Отправка отчета по делу',
    contentRu: 'Пожалуйста, найдите последний отчет по делу в прикрепленном файле. Все улики включены. Дайте мне знать, если у вас есть дополнительные вопросы.<br><br>Спасибо.',
    isRead: true,
    folder: 'sent'
  },
  {
    id: 7,
    sender: '나',
    senderEmail: 'detective@police.kr.gov',
    subject: '증인 면담 요청',
    date: '2025-03-08',
    content: '남수호씨와의 면담 일정을 잡아주시기 바랍니다. 그의 증언은 사건 해결에 매우 중요합니다.<br><br>긴급히 처리해 주세요.',
    subjectRu: 'Запрос на интервью со свидетелем',
    contentRu: 'Прошу назначить встречу с Нам Су Хо. Его показания крайне важны для решения дела.<br><br>Прошу обработать срочно.',
    isRead: true,
    folder: 'sent'
  },
  {
    id: 8,
    sender: '', 
    senderEmail: '', 
    subject: '새로운 단서 분석',
    date: '2025-03-07',
    content: '아직 완료되지 않은 새로운 단서 분석 보고서입니다. 몇 가지 세부사항을 더 확인해야 합니다.',
    subjectRu: 'Анализ новых улик',
    contentRu: 'Незавершенный отчет об анализе новых улик. Нужно проверить еще несколько деталей.',
    isRead: true,
    folder: 'drafts'
  },
  {
    id: 9,
    sender: '',
    senderEmail: '',
    subject: '수사 계획 초안',
    date: '2025-03-06',
    content: '다음 주 수사 계획 초안입니다. 자원 할당 및 인력 배치 계획이 포함되어 있습니다.',
    subjectRu: 'Черновик плана расследования',
    contentRu: 'Черновик плана расследования на следующую неделю. Включает распределение ресурсов и план размещения персонала.',
    isRead: true,
    folder: 'drafts'
  },
  {
    id: 10,
    sender: '나',
    senderEmail: 'detective@police.kr.gov',
    subject: '오래된 사건 파일',
    date: '2025-03-01',
    content: '이것은 더 이상 관련이 없는 이전 사건의 파일입니다.',
    subjectRu: 'Старые файлы дела',
    contentRu: 'Это файлы предыдущего дела, которые больше не имеют отношения.',
    isRead: true,
    folder: 'trash'
  },
  {
    id: 11,
    sender: '시스템 관리자',
    senderEmail: 'admin@police.kr.gov',
    subject: '시스템 업데이트 알림',
    date: '2025-02-28',
    content: '이것은 삭제된 자동 시스템 알림입니다.',
    subjectRu: 'Уведомление об обновлении системы',
    contentRu: 'Это удаленное автоматическое системное уведомление.',
    isRead: true,
    folder: 'trash'
  }
];

// Функция для создания почтового клиента
function createEmailClient() {
  // Проверяем, существует ли модальное окно почты
  let emailModal = document.getElementById('emailModal');
  // Флаг для отслеживания языка (true - корейский, false - русский)
  let isKorean = true;
  // Текущая активная папка
  let currentFolder = 'inbox';

  if (!emailModal) {
    // Создаем модальное окно, если оно не существует
    emailModal = document.createElement('div');
    emailModal.id = 'emailModal';
    emailModal.className = 'modal';

    // Создаем HTML для модального окна почты
    emailModal.innerHTML = `
      <div class="modal-content email-app">
        <div class="email-header">
          <h2>${isKorean ? '메일함' : 'Почта'}</h2>
          <div class="email-controls">
            <button id="translateEmail" class="email-translate-button">${isKorean ? '번역' : 'Перевести'}</button>
            <button id="closeEmail" class="email-close-button">${isKorean ? '닫기' : 'Закрыть'}</button>
          </div>
        </div>
        <div class="email-body">
          <div class="email-sidebar">
            <div class="email-folders">
              <div class="email-folder active" data-folder="inbox">
                <i class="folder-icon inbox"></i>
                <span>${isKorean ? '받은 편지함' : 'Входящие'}</span>
                <span class="unread-count">5</span>
              </div>
              <div class="email-folder" data-folder="sent">
                <i class="folder-icon sent"></i>
                <span>${isKorean ? '보낸 편지함' : 'Отправленные'}</span>
              </div>
              <div class="email-folder" data-folder="drafts">
                <i class="folder-icon draft"></i>
                <span>${isKorean ? '임시 보관함' : 'Черновики'}</span>
              </div>
              <div class="email-folder" data-folder="trash">
                <i class="folder-icon trash"></i>
                <span>${isKorean ? '휴지통' : 'Корзина'}</span>
              </div>
            </div>
          </div>
          <div class="email-content">
            <div class="email-list">
              <!-- Сюда будут добавлены письма -->
            </div>
            <div class="email-view hidden">
              <div class="email-view-header">
                <button class="back-to-list">${isKorean ? '목록으로' : 'К списку'}</button>
                <h3 class="view-subject"></h3>
                <div class="view-info">
                  <span class="view-sender"></span>
                  <span class="view-sender-email"></span>
                  <span class="view-date"></span>
                </div>
              </div>
              <div class="email-view-content"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(emailModal);

    // Добавление стилей для приложения почты
    const emailStyles = document.createElement('style');
    emailStyles.textContent = `
      .email-app {
        background: linear-gradient(135deg, #282c34 0%, #1c1e24 100%);
        width: 800px;
        height: 600px;
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
        border: 1px solid #3d4453;
        font-family: 'Arial', sans-serif;
      }

      .email-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background-color: #20232a;
        border-bottom: 1px solid #3d4453;
      }

      .email-header h2 {
        margin: 0;
        color: #e2e4e9;
        font-size: 20px;
        font-weight: 500;
      }

      .email-controls {
        display: flex;
        gap: 10px;
      }

      .email-translate-button, .email-close-button {
        padding: 8px 15px;
        border-radius: 6px;
        border: none;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        transition: all 0.2s ease;
      }

      .email-translate-button {
        background-color: #4d78cc;
        color: white;
      }

      .email-translate-button:hover {
        background-color: #3a67c0;
      }

      .email-close-button {
        background-color: #e74c3c;
        color: white;
      }

      .email-close-button:hover {
        background-color: #d44333;
      }

      .email-body {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      .email-sidebar {
        width: 220px;
        background-color: #262a33;
        padding: 15px 0;
        border-right: 1px solid #3d4453;
      }

      .email-folders {
        display: flex;
        flex-direction: column;
      }

      .email-folder {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        color: #a3a8b4;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }

      .email-folder:hover {
        background-color: #2c313c;
        color: #e2e4e9;
      }

      .email-folder.active {
        background-color: #323741;
        color: #e2e4e9;
        border-left: 3px solid #4d78cc;
      }

      .folder-icon {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .folder-icon.inbox {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23a3a8b4" viewBox="0 0 16 16"><path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/><path d="M1.5 14l2-2h9l2 2H1.5zm.646-4.5h11.708c.106 0 .193-.086.193-.193V3.193c0-.107-.086-.193-.193-.193H2.146c-.107 0-.193.086-.193.193v6.114c0 .107.086.193.193.193z"/></svg>');
      }

      .folder-icon.sent {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23a3a8b4" viewBox="0 0 16 16"><path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/></svg>');
      }

      .folder-icon.draft {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23a3a8b4" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg>');
      }

      .folder-icon.trash {
        background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23a3a8b4" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>');
      }

      .unread-count {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #4d78cc;
        color: white;
        border-radius: 12px;
        padding: 2px 8px;
        font-size: 12px;
        font-weight: bold;
      }

      .email-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
      }

      .email-list {
        flex: 1;
        overflow-y: auto;
        background-color: #2d3139;
      }

      .email-item {
        padding: 15px 20px;
        border-bottom: 1px solid #3d4453;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }

      .email-item:hover {
        background-color: #323741;
      }

      .email-item.unread {
        background-color: rgba(77, 120, 204, 0.1);
      }

      .email-item.unread::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        background-color: #4d78cc;
        border-radius: 50%;
      }

      .email-item-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }

      .email-sender {
        font-weight: bold;
        color: #e2e4e9;
      }

      .email-date {
        color: #a3a8b4;
        font-size: 12px;
      }

      .email-subject {
        font-weight: 500;
        color: #e2e4e9;
        margin-bottom: 5px;
      }

      .email-preview {
        color: #a3a8b4;
        font-size: 13px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .email-view {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: #2d3139;
        padding: 20px;
        overflow-y: auto;
      }

      .email-view.hidden {
        display: none;
      }

      .email-view-header {
        margin-bottom: 20px;
      }

      .back-to-list {
        background-color: transparent;
        border: 1px solid #4d78cc;
        color: #4d78cc;
        padding: 5px 10px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        margin-bottom: 15px;
        transition: all 0.2s ease;
      }

      .back-to-list:hover {
        background-color: #4d78cc;
        color: white;
      }

      .view-subject {
        color: #e2e4e9;
        font-size: 18px;
        margin: 10px 0;
      }

      .view-info {
        display: flex;
        flex-wrap: wrap;
        color: #a3a8b4;
        font-size: 14px;
        margin-bottom: 15px;
      }

      .view-sender {
        font-weight: bold;
        margin-right: 10px;
      }

      .view-sender-email {
        color: #a3a8b4;
        margin-right: 10px;
      }

      .view-date {
        margin-left: auto;
      }

      .email-view-content {
        color: #e2e4e9;
        line-height: 1.6;
        font-size: 14px;
      }

      .empty-folder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #a3a8b4;
        font-size: 16px;
        text-align: center;
        padding: 20px;
      }

      .empty-folder-icon {
        font-size: 48px;
        margin-bottom: 15px;
        opacity: 0.5;
      }

      .hidden {
        display: none;
      }
    `;
    document.head.appendChild(emailStyles);

    // Обработчик для закрытия почты
    document.getElementById('closeEmail').addEventListener('click', function() {
      emailModal.classList.add('hidden');
    });

    // Обработчик для перевода
    document.getElementById('translateEmail').addEventListener('click', function() {
      isKorean = !isKorean;
      updateEmailUI(window.emailMessages, isKorean, currentFolder);
      this.textContent = isKorean ? '번역' : 'Перевести';
    });

    // Обработчики для переключения папок
    const folders = document.querySelectorAll('.email-folder');
    folders.forEach(folder => {
      folder.addEventListener('click', function() {
        // Удаляем активный класс со всех папок
        folders.forEach(f => f.classList.remove('active'));
        // Добавляем активный класс на выбранную папку
        this.classList.add('active');
        // Получаем имя папки
        currentFolder = this.getAttribute('data-folder');
        // Обновляем список писем
        updateEmailList(window.emailMessages, isKorean, currentFolder);
      });
    });

    // Обработчики для писем
    setupEmailHandlers(window.emailMessages, isKorean);
  } else {
    // Если модальное окно уже существует, просто показываем его
    updateEmailUI(window.emailMessages, isKorean, currentFolder);
  }

  emailModal.classList.remove('hidden');
}

// Функция обновления UI почты
function updateEmailUI(messages, isKorean, folder = 'inbox') {
  // Обновляем заголовок
  const headerTitle = document.querySelector('.email-app h2');
  if (headerTitle) {
    headerTitle.textContent = isKorean ? '메일함' : 'Почта';
  }

  // Обновляем папки
  const inboxFolder = document.querySelector('.email-folder[data-folder="inbox"] span:not(.unread-count)');
  if (inboxFolder) {
    inboxFolder.textContent = isKorean ? '받은 편지함' : 'Входящие';
  }

  const sentFolder = document.querySelector('.email-folder[data-folder="sent"] span');
  if (sentFolder) {
    sentFolder.textContent = isKorean ? '보낸 편지함' : 'Отправленные';
  }

  const draftFolder = document.querySelector('.email-folder[data-folder="drafts"] span');
  if (draftFolder) {
    draftFolder.textContent = isKorean ? '임시 보관함' : 'Черновики';
  }

  const trashFolder = document.querySelector('.email-folder[data-folder="trash"] span');
  if (trashFolder) {
    trashFolder.textContent = isKorean ? '휴지통' : 'Корзина';
  }

  // Обновляем счетчик непрочитанных сообщений
  updateUnreadCount(messages);

  // Обновляем кнопки
  const backToListBtn = document.querySelector('.back-to-list');
  if (backToListBtn) {
    backToListBtn.textContent = isKorean ? '목록으로' : 'К списку';
  }

  const translateBtn = document.getElementById('translateEmail');
  if (translateBtn) {
    translateBtn.textContent = isKorean ? '번역' : 'Перевести';
  }

  const closeBtn = document.getElementById('closeEmail');
  if (closeBtn) {
    closeBtn.textContent = isKorean ? '닫기' : 'Закрыть';
  }

  // Обновляем список писем
  updateEmailList(messages, isKorean, folder);

  // Обновляем обработчики писем
  setupEmailHandlers(messages, isKorean);
}

// Функция для обновления списка писем
function updateEmailList(messages, isKorean, folder = 'inbox') {
  const emailList = document.querySelector('.email-list');
  if (!emailList) return;

  // Фильтруем сообщения по выбранной папке
  const filteredMessages = messages.filter(msg => msg.folder === folder);

  // Если в папке нет сообщений, показываем сообщение
  if (filteredMessages.length === 0) {
    emailList.innerHTML = `
      <div class="empty-folder">
        <div class="empty-folder-icon">📭</div>
        <div>${isKorean ? '이 폴더에 메시지가 없습니다.' : 'Нет сообщений в этой папке.'}</div>
      </div>
    `;
    return;
  }

  // Иначе показываем список сообщений
  emailList.innerHTML = filteredMessages.map(message => `
    <div class="email-item ${!message.isRead ? 'unread' : ''}" data-id="${message.id}">
      <div class="email-item-header">
        <div class="email-sender">${message.sender}</div>
        <div class="email-date">${message.date}</div>
      </div>
      <div class="email-subject">${isKorean ? message.subject : message.subjectRu}</div>
      <div class="email-preview">${isKorean ? message.content.replace(/<br>/g, ' ').slice(0, 60) + '...' : message.contentRu.replace(/<br>/g, ' ').slice(0, 60) + '...'}</div>
    </div>
  `).join('');

  // Добавляем обработчики событий
  setupEmailItemHandlers(messages, isKorean, folder);
}

// Функция для обновления счетчика непрочитанных сообщений
function updateUnreadCount(messages) {
  const unreadCount = document.querySelector('.unread-count');
  if (unreadCount) {
    const count = messages.filter(msg => msg.folder === 'inbox' && !msg.isRead).length;
    unreadCount.textContent = count;

    // Если непрочитанных сообщений нет, скрываем счетчик
    if (count === 0) {
      unreadCount.style.display = 'none';
    } else {
      unreadCount.style.display = 'inline-block';
    }
  }
}

// Функция для настройки обработчиков событий элементов письма
function setupEmailItemHandlers(messages, isKorean, folder) {
  const emailItems = document.querySelectorAll('.email-item');
  const emailList = document.querySelector('.email-list');
  const emailView = document.querySelector('.email-view');

  // Обработчик для каждого письма
  emailItems.forEach(item => {
    item.addEventListener('click', function() {
      const messageId = parseInt(this.getAttribute('data-id'));
      const message = messages.find(msg => msg.id === messageId);

      if (message) {
        // Отмечаем сообщение как прочитанное
        message.isRead = true;

        // Удаляем класс "непрочитанное"
        this.classList.remove('unread');

        // Обновляем счетчик непрочитанных сообщений
        updateUnreadCount(messages);

        // Заполняем информацию о письме
        document.querySelector('.view-subject').textContent = isKorean ? message.subject : message.subjectRu;
        document.querySelector('.view-sender').textContent = message.sender;
        document.querySelector('.view-sender-email').textContent = `<${message.senderEmail}>`;
        document.querySelector('.view-date').textContent = message.date;
        document.querySelector('.email-view-content').innerHTML = isKorean ? message.content : message.contentRu;

        // Скрываем список и показываем письмо
        emailList.classList.add('hidden');
        emailView.classList.remove('hidden');
      }
    });
  });
}

// Функция для настройки обработчиков писем
function setupEmailHandlers(messages, isKorean) {
  // Обработчик для кнопки "К списку"
  const backToListBtn = document.querySelector('.back-to-list');
  const emailList = document.querySelector('.email-list');
  const emailView = document.querySelector('.email-view');

  if (backToListBtn && emailList && emailView) {
    backToListBtn.addEventListener('click', function() {
      emailList.classList.remove('hidden');
      emailView.classList.add('hidden');
    });
  }

  // Добавляем таинственный символ ㅋㅋㅋ через 10 секунд
  setTimeout(() => {
    // Сбрасываем все флаги при каждой перезагрузке страницы
    localStorage.removeItem('chatDisabled');
    sessionStorage.removeItem('chatTemporarilyDisabled');
    sessionStorage.removeItem('symbolShownThisSession');
    sessionStorage.removeItem('chatBlocked');

    // Символ всегда будет появляться при перезагрузке страницы

    // Ищем родительский элемент для добавления символа
    const emailApp = document.querySelector('.email-app') || document.body;
    if (emailApp) {
      const mysterySymbol = document.createElement('div');
      mysterySymbol.className = 'mystery-symbol';
      mysterySymbol.innerHTML = 'ㅋㅋㅋ';
      mysterySymbol.style.position = 'fixed';
      mysterySymbol.style.bottom = '30px';
      mysterySymbol.style.right = '30px';
      mysterySymbol.style.fontSize = '24px';
      mysterySymbol.style.color = '#8a43e2';
      mysterySymbol.style.textShadow = '0 0 10px rgba(138, 43, 226, 0.7)';
      mysterySymbol.style.zIndex = '9999';
      mysterySymbol.style.cursor = 'pointer';
      mysterySymbol.style.animation = 'mystery-pulse 2s infinite alternate';

      // Добавляем стиль анимации
      const styleElem = document.createElement('style');
      styleElem.innerHTML = `
        @keyframes mystery-pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.3); opacity: 1; }
        }
      `;
      document.head.appendChild(styleElem);

      emailApp.appendChild(mysterySymbol);

      // Добавляем эффект при клике
      mysterySymbol.addEventListener('click', function() {
        // Проверяем флаг временной блокировки
        if (sessionStorage.getItem('chatTemporarilyDisabled') === 'true') {
          // Если чат временно отключен, удаляем символ и ничего не делаем
          if (this.parentNode) {
            this.parentNode.removeChild(this);
          }
          return;
        }

        // Проверяем, заблокирован ли чат
        if (sessionStorage.getItem('chatBlocked') === 'true') {
          // Показываем случайную фразу отказа
          const rejectMessages = ["Отстань.", "Не зли меня.", "Я устал."];
          const randomMessage = rejectMessages[Math.floor(Math.random() * rejectMessages.length)];

          // Создаем всплывающую подсказку
          const tooltip = document.createElement('div');
          tooltip.textContent = randomMessage;
          tooltip.style.position = 'fixed';
          tooltip.style.bottom = '60px';
          tooltip.style.right = '30px';
          tooltip.style.backgroundColor = 'rgba(30, 15, 50, 0.95)';
          tooltip.style.color = '#ff0066';
          tooltip.style.padding = '10px 15px';
          tooltip.style.borderRadius = '8px';
          tooltip.style.fontFamily = 'Arial, sans-serif';
          tooltip.style.fontSize = '16px';
          tooltip.style.fontWeight = 'bold';
          tooltip.style.boxShadow = '0 0 20px rgba(255, 0, 102, 0.5)';
          tooltip.style.zIndex = '10000';
          tooltip.style.opacity = '0';
          tooltip.style.transform = 'translateY(20px)';
          tooltip.style.transition = 'all 0.3s ease';
          document.body.appendChild(tooltip);

          // Анимируем появление подсказки
          setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';

            // Исчезновение подсказки и символа
            setTimeout(() => {
              tooltip.style.opacity = '0';
              tooltip.style.transform = 'translateY(-20px)';

              // Анимация исчезновения символа
              this.style.animation = 'mystery-explode 0.5s forwards';

              // Удаление подсказки и символа
              setTimeout(() => {
                tooltip.remove();
                if (this.parentNode) {
                  this.parentNode.removeChild(this);
                }
              }, 500);
            }, 1500);
          }, 100);

          return;
        }

        // Анимация исчезновения символа
        this.style.animation = 'mystery-explode 0.5s forwards';

        // Добавляем анимацию взрыва
        const explodeStyle = document.createElement('style');
        explodeStyle.innerHTML = `
          @keyframes mystery-explode {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(3); opacity: 0; }
          }
        `;
        document.head.appendChild(explodeStyle);

        // Показываем черный экран с текстом "Хм..."
        const blackOverlay = document.createElement('div');
        blackOverlay.style.position = 'fixed';
        blackOverlay.style.top = '0';
        blackOverlay.style.left = '0';
        blackOverlay.style.width = '100%';
        blackOverlay.style.height = '100%';
        blackOverlay.style.backgroundColor = 'black';
        blackOverlay.style.color = 'white';
        blackOverlay.style.display = 'flex';
        blackOverlay.style.justifyContent = 'center';
        blackOverlay.style.alignItems = 'center';
        blackOverlay.style.fontSize = '36px';
        blackOverlay.style.fontFamily = 'Cinzel, serif';
        blackOverlay.style.zIndex = '10000';
        blackOverlay.style.opacity = '0';
        blackOverlay.style.transition = 'opacity 0.5s ease';
        blackOverlay.textContent = "Хм...";
        document.body.appendChild(blackOverlay);

        // Анимируем черный экран - сразу же делаем видимым
        setTimeout(() => {
          blackOverlay.style.opacity = '1';

          // Скрываем его через 2 секунды
          setTimeout(() => {
            blackOverlay.style.opacity = '0';
            setTimeout(() => {
              blackOverlay.remove();
              // После исчезновения сообщения, показываем чат, только если он не был отключен
              if (!document.getElementById('chatContainer') && sessionStorage.getItem('chatTemporarilyDisabled') !== 'true' && sessionStorage.getItem('chatBlocked') !== 'true') {
                setupChatSystem();
              }
            }, 500);
          }, 2000);
        }, 100);
      });
    }
  }, 10000); // 10 секунд

  // Добавляем интерактивный чат
  function setupChatSystem() {
    // Счетчик сообщений пользователя
    let userMessageCount = 0;

    // Создаем элементы чата
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatContainer';
    chatContainer.style.position = 'fixed';
    chatContainer.style.bottom = '20px';
    chatContainer.style.right = '20px';
    chatContainer.style.width = '350px';
    chatContainer.style.height = '450px';
    chatContainer.style.backgroundColor = 'rgba(30, 15, 50, 0.9)';
    chatContainer.style.border = '2px solid #8a43e2';
    chatContainer.style.borderRadius = '15px';
    chatContainer.style.boxShadow = '0 0 30px rgba(138, 43, 226, 0.5)';
    chatContainer.style.display = 'flex';
    chatContainer.style.flexDirection = 'column';
    chatContainer.style.overflow = 'hidden';
    chatContainer.style.fontFamily = 'Arial, sans-serif';
    chatContainer.style.zIndex = '1000';
    chatContainer.style.transition = 'all 0.3s ease';

    // Заголовок чата
    const chatHeader = document.createElement('div');
    chatHeader.style.padding = '15px';
    chatHeader.style.backgroundColor = 'rgba(40, 20, 65, 0.8)';
    chatHeader.style.color = '#e6c9ff';
    chatHeader.style.fontWeight = 'bold';
    chatHeader.style.display = 'flex';
    chatHeader.style.justifyContent = 'space-between';
    chatHeader.style.alignItems = 'center';
    chatHeader.style.borderBottom = '1px solid #8a43e2';

    const chatTitle = document.createElement('div');
    chatTitle.textContent = '?';
    chatTitle.style.fontSize = '18px';

    const chatClose = document.createElement('button');
    chatClose.textContent = '×';
    chatClose.style.background = 'none';
    chatClose.style.border = 'none';
    chatClose.style.color = '#e6c9ff';
    chatClose.style.fontSize = '24px';
    chatClose.style.cursor = 'pointer';
    chatClose.style.lineHeight = '1';

    chatHeader.appendChild(chatTitle);
    chatHeader.appendChild(chatClose);

    // Область сообщений
    const chatMessages = document.createElement('div');
    chatMessages.className = 'chat-messages';
    chatMessages.style.flex = '1';
    chatMessages.style.overflowY = 'auto';
    chatMessages.style.padding = '15px';
    chatMessages.style.display = 'flex';
    chatMessages.style.flexDirection = 'column';
    chatMessages.style.gap = '10px';

    // Поле ввода сообщения
    const chatInputContainer = document.createElement('div');
    chatInputContainer.style.padding = '15px';
    chatInputContainer.style.borderTop = '1px solid #8a43e2';
    chatInputContainer.style.display = 'flex';
    chatInputContainer.style.alignItems = 'center';
    chatInputContainer.style.gap = '10px';

    const chatInput = document.createElement('input');
    chatInput.type = 'text';
    chatInput.placeholder = 'Введите сообщение...';
    chatInput.style.flex = '1';
    chatInput.style.padding = '10px';
    chatInput.style.border = '1px solid #8a43e2';
    chatInput.style.borderRadius = '20px';
    chatInput.style.backgroundColor = 'rgba(30, 15, 50, 0.5)';
    chatInput.style.color = '#e6c9ff';
    chatInput.style.outline = 'none';

    const chatSend = document.createElement('button');
    chatSend.textContent = '➤';
    chatSend.style.backgroundColor = '#8a43e2';
    chatSend.style.color = 'white';
    chatSend.style.border = 'none';
    chatSend.style.borderRadius = '50%';
    chatSend.style.width = '36px';
    chatSend.style.height = '36px';
    chatSend.style.display = 'flex';
    chatSend.style.justifyContent = 'center';
    chatSend.style.alignItems = 'center';
    chatSend.style.cursor = 'pointer';
    chatSend.style.fontSize = '16px';

    chatInputContainer.appendChild(chatInput);
    chatInputContainer.appendChild(chatSend);

    chatContainer.appendChild(chatHeader);
    chatContainer.appendChild(chatMessages);
    chatContainer.appendChild(chatInputContainer);

    document.body.appendChild(chatContainer);

    // Стили для сообщений
    const style = document.createElement('style');
    style.textContent = `
      .chat-messages::-webkit-scrollbar {
        width: 6px;
      }

      .chat-messages::-webkit-scrollbar-track {
        background: rgba(30, 15, 50, 0.3);
      }

      .chat-messages::-webkit-scrollbar-thumb {
        background: #8a43e2;
        border-radius: 3px;
      }

      .chat-message {
        max-width: 80%;
        padding: 10px 15px;
        border-radius: 15px;
        font-size: 14px;
        line-height: 1.4;
        position: relative;
        animation: fadeIn 0.3s ease;
      }

      .chat-message.user {
        align-self: flex-end;
        background-color: #8a43e2;
        color: white;
        border-bottom-right-radius: 5px;
      }

      .chat-message.system {
        align-self: flex-start;
        background-color: rgba(60, 30, 90, 0.5);
        color: #e6c9ff;
        border-bottom-left-radius: 5px;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes glitchText {
        0% { transform: skew(0deg); }
        20% { transform: skew(10deg); color: #ff0000; }
        40% { transform: skew(-10deg); color: #00ff00; }
        60% { transform: skew(5deg); color: #ff00ff; }
        80% { transform: skew(-5deg); color: #ffff00; }
        100% { transform: skew(0deg); }
      }

      .glitch-effect {
        animation: glitchText 0.3s infinite;
      }

      .red-message {
        color: #ff0000;
        font-size: 24px;
        font-weight: bold;
        position: absolute;
        transform: translate(-50%, -50%);
        text-shadow: 0 0 10px rgba(255, 0, 0, 0.8);
      }

      .typing-indicator {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
      }

      .typing-indicator .dot {
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #e6c9ff;
        margin: 0 3px;
        animation: typingAnimation 1.4s infinite ease-in-out both;
      }

      .typing-indicator .dot:nth-child(1) {
        animation-delay: 0s;
      }

      .typing-indicator .dot:nth-child(2) {
        animation-delay: 0.2s;
      }

      .typing-indicator .dot:nth-child(3) {
        animation-delay: 0.4s;
      }

      @keyframes typingAnimation {
        0%, 60%, 100% { transform: scale(1); opacity: 0.7; }
        30% { transform: scale(1.5); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    // Обработчики событий
    chatClose.addEventListener('click', () => {
      chatContainer.style.transform = 'translateY(20px)';
      chatContainer.style.opacity = '0';
      setTimeout(() => {
        chatContainer.remove();
      }, 300);
    });

    const sendMessage = () => {
      const message = chatInput.value.trim();
      if (message === '') return;

      // Добавляем сообщение пользователя
      addMessage(message, 'user');
      chatInput.value = '';

      // Увеличиваем счетчик сообщений пользователя
      userMessageCount++;

      // Проверяем, достигнут ли лимит сообщений
      if (userMessageCount >= 10) {
        // Блокируем чат после 10 сообщений
        setTimeout(() => {
          // Создаем индикатор печатания
          const typingIndicator = document.createElement('div');
          typingIndicator.className = 'chat-message system typing-indicator';
          typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
          typingIndicator.style.padding = '10px';
          chatMessages.appendChild(typingIndicator);
          chatMessages.scrollTop = chatMessages.scrollHeight;

          // Имитация печатания
          setTimeout(() => {
            typingIndicator.remove();
            const messageElement = addMessage("Что-то ты слишком много болтаешь...", 'system');

            // Закрываем чат через 2 секунды
            setTimeout(() => {
              chatContainer.style.transform = 'translateY(20px)';
              chatContainer.style.opacity = '0';
              setTimeout(() => {
                chatContainer.remove();
                // Устанавливаем флаг, что чат заблокирован
                sessionStorage.setItem('chatBlocked', 'true');
              }, 300);
            }, 2000);
          }, 1000);
        }, 700 + Math.random() * 1000);
        return;
      }

      // Обрабатываем специальные запросы
      setTimeout(() => {
        processMessage(message);
      }, 700 + Math.random() * 1000);
    };

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Функция для добавления сообщения в чат
    function addMessage(text, type) {
      const message = document.createElement('div');
      message.className = 'chat-message ' + type;
      message.textContent = text;
      chatMessages.appendChild(message);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      return message;
    }

    // Функция для обработки сообщений
    function processMessage(message) {
      // Преобразуем в нижний регистр для более точного сопоставления
      const messageLower = message.toLowerCase();

      // Функция задержки печати для имитации человеческого ввода
      const typingDelay = () => Math.floor(100 + Math.random() * messageLower.length * 30); // Более человечная задержка

      // Функция для имитации печатания сообщения
      const simulateTyping = (text, callback) => {
        // Показываем индикатор "печатает..."
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat-message system typing-indicator';
        typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        typingIndicator.style.padding = '10px';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Через реалистичную задержку удаляем индикатор и отправляем сообщение
        setTimeout(() => {
          typingIndicator.remove();
          const messageElement = addMessage(text, 'system');

          // Добавляем микро-паузы между словами для более реалистичной печати
          messageElement.style.opacity = '0';

          // Анимация появления текста
          setTimeout(() => {
            messageElement.style.transition = 'opacity 0.3s ease';
            messageElement.style.opacity = '1';
            if (callback) callback();
          }, 100);
        }, typingDelay());
      };

      // Проверяем на специальные запросы "Ты убил его?"
      if (messageLower.includes("ты убил его") || messageLower.includes("убил ли ты его") || messageLower.includes("это ты его убил")) {
        // Кратковременная задержка для эффекта неожиданности
        setTimeout(() => {
          // Добавляем жуткий звуковой эффект
          const scarySound = document.getElementById('scarySound');
          if (scarySound) {
            scarySound.volume = 0.7;
            scarySound.play();
          }

          // Имитация нервного ответа перед закрытием
          addMessage("Я...", 'system');

          // Пауза для напряжения
          setTimeout(() => {
            // Закрываем чат и показываем черный экран с красными сообщениями
            chatContainer.style.transform = 'translateY(20px)';
            chatContainer.style.opacity = '0';

            setTimeout(() => {
              chatContainer.remove();

              // Создаем черный экран
              const blackScreen = document.createElement('div');
              blackScreen.style.position = 'fixed';
              blackScreen.style.top = '0';
              blackScreen.style.left = '0';
              blackScreen.style.width = '100%';
              blackScreen.style.height = '100%';
              blackScreen.style.backgroundColor = 'black';
              blackScreen.style.zIndex = '10000';
              blackScreen.style.overflow = 'hidden';
              document.body.appendChild(blackScreen);

              // Расширенный список сообщений
              const messages = [
                "МНЕ ЖАЛЬ", 
                "Я НЕ ДЕЛАЛ ЭТОГО", 
                "Я НЕ ХОТЕЛ ЭТОГО...", 
                "ОН НЕ УМЕР!", 
                "ЭТО БЫЛ НЕСЧАСТНЫЙ СЛУЧАЙ", 
                "ПОЖАЛУЙСТА ПОВЕРЬ МНЕ", 
                "Я НЕ ВИНОВАТ",
                "ОН САМ ИСЧЕЗ",
                "Я НЕ ПОНИМАЮ ЧТО СЛУЧИЛОСЬ",
                "ПОМОГИ МНЕ",
                "Я ПРОСТО ХОТЕЛ ПОКАЗАТЬ ФОКУС",
                "Я НЕ ЗНАЛ ЧТО ТАК БУДЕТ",
                "МОЖЕТ ОН ЕЩЕ ВЕРНЕТСЯ",
                "ОНИ ВСЕ ВИНЯТ МЕНЯ",
                "МНЕ СТРАШНО",
                "Я НЕ МОНСТР",
                "ЭТО БЫЛА ОШИБКА",
                "Я ПЫТАЛСЯ ВЕРНУТЬ ЕГО",
                "ГДЕ ОНИ ВСЕ?",
                "Я СЛЫШУ ИХ ГОЛОСА",
                "ОНИ ШЕПЧУТ",
                "НАЙДИ ЕГО",
                "МОЖЕТ ТЫ СМОЖЕШЬ",
                "ПОМОГИ НАЙТИ ЕГО",
                "Я НЕ ХОТЕЛ",
                "НЕ ОСТАВЛЯЙ МЕНЯ",
                "МНЕ ТАК ОДИНОКО",
                "Я БОЮСЬ ТЕМНОТЫ",
                "НИКТО НЕ ВЕРИТ МНЕ",
                "ТЫ ВЕРИШЬ МНЕ?",
                "ТЫ ЖЕ ВИДИШЬ МЕНЯ?",
                "ПОЧЕМУ ТЫ СПРАШИВАЕШЬ?",
                "ТЫ ЧТО-ТО ЗНАЕШЬ?",
                "ЭТО НЕ МОЯ ВИНА",
                "Я ХОЧУ ЗАБЫТЬ",
                "ОДНА ОШИБКА",
                "ЗА ЧТО?",
                "ПРОСТИ МЕНЯ",
                "КАЖДУЮ НОЧЬ Я ВИЖУ ЕГО",
                "ЭТО НЕПРАВДА",
                "ОНИ ВСЕ ВРУТ",
                "ТЫ ТАК ПОХОЖ",
                "ПОЧЕМУ ТЫ ЗДЕСЬ?",
                "ПОМНИШЬ ТЕБЯ?",
                "ТЫ ТАКОЙ ЖЕ"
              ];

              // Создаем еще больше сообщений, заполняя весь экран
              for (let i = 0; i < 200; i++) {
                const randomMessage = messages[Math.floor(Math.random() * messages.length)];
                const msgElement = document.createElement('div');
                msgElement.className = 'red-message';
                msgElement.textContent = randomMessage;

                // Случайный размер текста для более страшного эффекта
                const fontSize = 14 + Math.random() * 36;
                msgElement.style.fontSize = `${fontSize}px`;

                // Случайная позиция
                msgElement.style.left = Math.random() * 100 + '%';
                msgElement.style.top = Math.random() * 100 + '%';

                // Начинаем невидимыми
                msgElement.style.opacity = '0';

                // Добавляем пульсацию и мерцание для страшного эффекта
                const animationDuration = 2 + Math.random() * 5;
                msgElement.style.animation = `textPulse ${animationDuration}s infinite alternate, textFlicker ${animationDuration/3}s infinite`;

                // Изменяем оттенок красного для большего разнообразия
                const redValue = 150 + Math.floor(Math.random() * 105);
                msgElement.style.color = `rgb(${redValue}, ${Math.floor(redValue/10)}, ${Math.floor(redValue/8)})`;

                // Добавляем тень для более жуткого вида
                msgElement.style.textShadow = `0 0 ${5 + Math.random() * 15}px rgba(255, 0, 0, 0.8)`;

                // Случайный наклон текста
                msgElement.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

                blackScreen.appendChild(msgElement);

                // Показываем с разной задержкой для страшного эффекта
                setTimeout(() => {
                  msgElement.style.opacity = `${0.1 + Math.random() * 0.9}`; // Исправлена строка с прозрачностью

                  // Случайное движение текста
                  setInterval(() => {
                    const newTop = parseFloat(msgElement.style.top) + (Math.random() * 2 - 1);
                    const newLeft = parseFloat(msgElement.style.left) + (Math.random() * 2 - 1);
                    msgElement.style.top = `${newTop}%`;
                    msgElement.style.left = `${newLeft}%`;
                  }, 800 + Math.random() * 1500);

                }, Math.random() * 3000);
              }

              // Добавляем стиль для пульсации и мерцания
              const styleElem = document.createElement('style');
              styleElem.innerHTML = `
                @keyframes textPulse {
                  0% { transform: scale(1); }
                  100% { transform: scale(1.2); }
                }
                @keyframes textFlicker {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0.3; }
                }
              `;
              document.head.appendChild(styleElem);

              // Удаляем символ "ㅋㅋㅋ" из текущей сессии
              const mysterySymbol = document.querySelector('.mystery-symbol');
              if (mysterySymbol && mysterySymbol.parentNode) {
                mysterySymbol.parentNode.removeChild(mysterySymbol);
              }

              // Устанавливаем флаг временного отключения в текущей сессии
              sessionStorage.setItem('chatTemporarilyDisabled', 'true');

              // Удаляем черный экран через 5 секунд
              setTimeout(() => {
                blackScreen.style.transition = 'opacity 1s ease';
                blackScreen.style.opacity = '0';
                setTimeout(() => {
                  blackScreen.remove();
                  // НЕ восстанавливаем чат - он недоступен до перезагрузки страницы
                }, 1000);
              }, 5000);
            }, 300);
          }, 800);
        }, 500);

        return;
      }

      // Обработка любых упоминаний "До Ён"
      if (messageLower.includes("до ён") || messageLower.includes("до ен") || messageLower.match(/до\s+[её]н/i)) {
        // Чат начинает глючить и закрывается
        chatMessages.classList.add('glitch-effect');
        chatContainer.style.transform = 'skew(10deg) scale(1.1)';

        // Добавляем больше случайных глюков
        for (let i = 0; i < 15; i++) {
          const glitchElement = document.createElement('div');
          glitchElement.className = 'chat-message system';
          glitchElement.textContent = 'ERROR_' + Math.random().toString(36).substring(2, 8).toUpperCase();
          glitchElement.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
          glitchElement.style.position = 'absolute';
          glitchElement.style.top = Math.random() * 100 + '%';
          glitchElement.style.left = Math.random() * 100 + '%';
          glitchElement.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';
          glitchElement.style.zIndex = '1001';
          chatMessages.appendChild(glitchElement);
        }

        // Добавляем более интенсивные визуальные эффекты
        chatContainer.style.animation = 'glitchText 0.1s infinite';

        // Удаляем символ "ㅋㅋㅋ" после закрытия чата
        const mysterySymbol = document.querySelector('.mystery-symbol');
        if (mysterySymbol) {
          mysterySymbol.style.animation = 'mystery-explode 0.5s forwards';
          setTimeout(() => {
            if (mysterySymbol.parentNode) {
              mysterySymbol.parentNode.removeChild(mysterySymbol);
            }
          }, 500);
        }

        // Устанавливаем флаг в sessionStorage для текущей сессии, чтобы символ не появлялся до перезагрузки страницы
        sessionStorage.setItem('chatTemporarilyDisabled', 'true');

        // Закрываем чат через 1.5 секунды
        setTimeout(() => {
          chatContainer.style.transform = 'skew(30deg) scale(0)';
          chatContainer.style.opacity = '0';
          setTimeout(() => {
            chatContainer.remove();
          }, 500);
        }, 1500);

        return;
      }

      // Определение настроения сообщения пользователя
      const isQuestion = messageLower.includes('?') || messageLower.startsWith('кто') || 
                         messageLower.startsWith('что') || messageLower.startsWith('как') || 
                         messageLower.startsWith('где') || messageLower.startsWith('почему') ||
                         messageLower.startsWith('зачем') || messageLower.startsWith('когда');

      const isGreeting = messageLower.includes('привет') || messageLower.includes('здравствуй') || 
                         messageLower.includes('хай') || messageLower.includes('хей') || 
                         messageLower.includes('здаров');

      const isFarewell = messageLower.includes('пока') || messageLower.includes('прощай') || 
                        messageLower.includes('до свидания') || messageLower.includes('увидимся');

      // Обработка сообщений в более человечном стиле
      if (messageLower === "кто ты" || messageLower === "кто ты?" || messageLower === "ты кто?" || messageLower === "ты кто") {
        simulateTyping("Ты знаешь меня.", () => {
          // В 30% случаев добавляем дополнительное сообщение после паузы
          if (Math.random() < 0.3) {
            setTimeout(() => {
              simulateTyping("Хотя иногда мне кажется, что я сам себя не знаю...");
            }, 2000);
          }
        });
      } 
      else if (messageLower.includes("сколько тебе лет") || messageLower.includes("твой возраст") || messageLower.includes("лет тебе")) {
        simulateTyping("Угадай.", () => {
          // Иногда добавляем дополнительное сообщение
          if (Math.random() < 0.4) {
            setTimeout(() => {
              simulateTyping("Время для меня течет иначе...");
            }, 3000);
          }
        });
      }
      else if (isGreeting) {
        // Разнообразные приветствия
        const greetings = [
          "Привет... давно не виделись.",
          "Здравствуй. Ты меня помнишь?",
          "Хей. Я не ожидал тебя увидеть снова.",
          "Привет... как долго тебя не было.",
          "О, это ты. Привет."
        ];
        simulateTyping(greetings[Math.floor(Math.random() * greetings.length)]);
      }
      else if (messageLower.includes("как дела") || messageLower.includes("как ты") || messageLower === "как жизнь") {
        // Более сложные ответы с продолжением диалога
        simulateTyping("Бывало и лучше. А у тебя как?", () => {
          // Ожидаем ответа пользователя и реагируем на него в следующем цикле
        });
      }
      else if (messageLower.includes("что делаешь") || messageLower.includes("чем занимаешься")) {
        const activities = [
          "Думаю о прошлом...",
          "Пытаюсь вспомнить кое-что важное.",
          "Просто наблюдаю. За всеми вами.",
          "Жду. Жду уже очень давно."
        ];
        simulateTyping(activities[Math.floor(Math.random() * activities.length)]);
      }
      else if (messageLower.includes("где ты") || messageLower.includes("ты где")) {
        simulateTyping("Я всегда рядом.", () => {
          if (Math.random() < 0.2) {
            setTimeout(() => {
              simulateTyping("Иногда ближе, чем ты думаешь.");
            }, 2500);
          }
        });
      }
      else if (messageLower.includes("скучно") || messageLower.includes("скучаю")) {
        simulateTyping("Хочешь развлечься?", () => {
          setTimeout(() => {
            simulateTyping("У меня есть пара трюков в рукаве...");
          }, 1500);
        });
      }
      else if (messageLower.includes("магия") || messageLower.includes("фокус") || messageLower.includes("трюк")) {
        simulateTyping("Магия всегда имеет свою цену.", () => {
          setTimeout(() => {
            simulateTyping("Уверен, что готов платить?");
          }, 2000);
        });
      }
      else if (messageLower.includes("что случилось") || messageLower.includes("что произошло")) {
        // Имитация волнения при наборе текста
        simulateTyping("Я...", () => {
          setTimeout(() => {
            simulateTyping("Некоторые вещи лучше не вспоминать...");
          }, 2000);
        });
      }
      else if (isFarewell) {
        simulateTyping("Мы еще встретимся...", () => {
          // Закрываем чат через 2 секунды
          setTimeout(() => {
            chatContainer.style.transform = 'translateY(20px)';
            chatContainer.style.opacity = '0';
            setTimeout(() => {
              chatContainer.remove();
            }, 300);
          }, 2000);
        });
      }
      else if (messageLower.includes("люблю") || messageLower.includes("нравишься")) {
        simulateTyping("Любовь...", () => {
          setTimeout(() => {
            simulateTyping("Опасное чувство. Особенно со мной.");
          }, 1500);
        });
      }
      else if (messageLower.includes("ты реальный") || messageLower.includes("настоящий")) {
        const realityResponses = [
          "А что для тебя реальность?",
          "Разве это имеет значение?",
          "Иногда я сам задаюсь этим вопросом.",
          "Я настолько же реален, насколько ты хочешь меня видеть."
        ];
        simulateTyping(realityResponses[Math.floor(Math.random() * realityResponses.length)]);
      }
      else if (messageLower.includes("помоги") || messageLower.includes("помощь")) {
        simulateTyping("Я не уверен, что могу помочь...", () => {
          setTimeout(() => {
            simulateTyping("Но могу попытаться. Что именно тебе нужно?");
          }, 1800);
        });
      }
      else if (messageLower.includes("спасибо") || messageLower === "благодарю") {
        const responses = [
          "Не стоит благодарности.",
          "Ты бы сделал то же самое для меня... правда?",
          "Пожалуйста.",
          "Всегда пожалуйста."
        ];
        simulateTyping(responses[Math.floor(Math.random() * responses.length)]);
      }
      else if (messageLower.includes("страшно") || messageLower.includes("боюсь")) {
        simulateTyping("Страх – это естественно.", () => {
          setTimeout(() => {
            simulateTyping("Он защищает нас. Иногда.");
          }, 2000);
        });
      }
      else if (messageLower.match(/^\W+$/) || messageLower.match(/^[0-9]+$/)) {
        // Если сообщение состоит только из символов или цифр
        simulateTyping("...");
      }
      else if (messageLower.length < 3) {
        // Слишком короткие сообщения
        simulateTyping("?");
      }
      else if (!messageLower.match(/[а-яёa-z]/i)) {
        // Если в сообщении нет букв (бессмыслица)
        simulateTyping("Я не понимаю.");
      }
      else if (isQuestion) {
        // Ответы на вопросы в зависимости от длины сообщения
        const questionResponses = messageLower.length < 10 ? [
          "Хороший вопрос.",
          "Мне нужно подумать над этим.",
          "А как ты думаешь?",
          "Не уверен, что могу ответить.",
          "Хм... интересно, почему тебя это интересует?"
        ] : [
          "Сложный вопрос.",
          "Я бы предпочел не отвечать на это.",
          "Может, поговорим о чем-то другом?",
          "Почему тебя это так интересует?",
          "Некоторые вопросы должны остаться без ответа."
        ];

        simulateTyping(questionResponses[Math.floor(Math.random() * questionResponses.length)]);
      }
      else if (messageLower.length > 50) {
        // Для длинных сообщений
        simulateTyping("Ты очень многословен.", () => {
          setTimeout(() => {
            simulateTyping("Иногда молчание говорит больше чем слова.");
          }, 2000);
        });
      }
      else {
        // Более человечные ответы на остальные сообщения
        const randomResponses = [
          // Размышления
          "Интересно, что заставляет тебя думать об этом?",
          "Мне иногда кажется, что мы все не случайно здесь.",

          // Неопределенные ответы
          "Сложно сказать...",
          "Я давно не обсуждал это ни с кем.",

          // Переключение темы
          "Расскажи лучше, как ты меня нашел?",
          "Давай поговорим о том, почему ты здесь.",

          // Загадочные фразы
          "В тишине иногда можно услышать ответы.",
          "Некоторые тайны должны оставаться нераскрытыми.",

          // Личные фразы
          "Я часто думаю о прошлом. А ты?",
          "Знаешь, что самое страшное? Одиночество."
        ];

        // Выбираем более подходящий ответ на основе длины сообщения и случайности
        let responsePool;

        if (messageLower.length < 15) {
          // Для коротких сообщений - более простые ответы
          responsePool = randomResponses.slice(0, 4);
        } else if (messageLower.length < 30) {
          // Для сообщений средней длины
          responsePool = randomResponses.slice(2, 8);
        } else {
          // Для более длинных сообщений - более глубокие ответы
          responsePool = randomResponses.slice(4);
        }

        // Добавляем немного случайности
        if (Math.random() < 0.3) {
          // 30% шанс получить случайный ответ из всего пула
          responsePool = randomResponses;
        }

        // Выбираем ответ
        const response = responsePool[Math.floor(Math.random() * responsePool.length)];

        // Иногда делаем паузу перед ответом для большей реалистичности
        if (Math.random() < 0.3) {
          setTimeout(() => {
            simulateTyping(response);
          }, 1000 + Math.random() * 2000);
        } else {
          simulateTyping(response);
        }
      }
    }

    // Приветственное сообщение
    setTimeout(() => {
      addMessage("Давно не виделись...", 'system');
    }, 1000);
  }

  // Запуск чата при нажатии на кнопку "Чат" или другой триггер
  document.addEventListener('keydown', function(e) {
    // Запускаем чат по нажатию "C", только если он не был отключен
    if (e.key.toLowerCase() === 'c' && !document.getElementById('chatContainer') && localStorage.getItem('chatDisabled') !== 'true') {
      setupChatSystem();
    }
  });

  // Обработчики для папок
  setupFolderHandlers(messages, isKorean);
}

// Функция для настройки обработчиков папок
function setupFolderHandlers(messages, isKorean) {
  const folders = document.querySelectorAll('.email-folder');

  folders.forEach(folder => {
    folder.addEventListener('click', function() {
      // Удаляем активный класс со всех папок
      folders.forEach(f => f.classList.remove('active'));

      // Добавляем активный класс на выбранную папку
      this.classList.add('active');

      // Получаем имя папки
      const folderName = this.getAttribute('data-folder');

      // Обновляем список писем
      updateEmailList(messages, isKorean, folderName);

      // Скрываем просмотр письма и показываем список
      document.querySelector('.email-view').classList.add('hidden');
      document.querySelector('.email-list').classList.remove('hidden');
    });
  });
}
