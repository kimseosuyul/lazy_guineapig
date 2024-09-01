import confetti from 'canvas-confetti';

function Success() {
    function firework() {
        var duration = 15 * 100;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 0 };
        //  startVelocity: 범위, spread: 방향, ticks: 갯수
      
        function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        }
      
        var interval = setInterval(function () {
          var timeLeft = animationEnd - Date.now();
      
          if (timeLeft <= 0) {
            return clearInterval(interval);
          }
      
          var particleCount = 50 * (timeLeft / duration);
          // since particles fall down, start a bit higher than random
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            })
          );
        }, 250);
      }
    
      firework();

    return(
        <>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>

        <div class="flex flex-col w-screen h-svh items-center justify-center gap-8 overflow-hidden bg-yellow-200">
            <div class="flex flex-col w-[95%] h-[95%] items-center mx-8 rounded-sm bg-white border border-gray-400">
                <img src='images/결제완료페이지.jpg' alt='' class="h-[50%]"></img>
                <div class="text-[30px] font-pop ">구매해 주셔서 감사합니다!</div>

                <div class="flex flex-col gap-16 self-center mt-12 text-[20px] font-noto_sans"><div class="self-center font-Freesentation">안내 사항을 꼭 읽어주세요</div>
                <div>1.입금 확인 후에 기입해 주신 연락처로 QR 코드를 전송해 드릴 예정입니다. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;현장에서 이 QR 코드를 보여주시면 바로 상품 수령이 가능하오니, 노출되지 않도록 주의해 주세요.</div>
                <div>2.입금 확인까지는 하루 정도가 소요될 수 있으며, 만약 하루가 지나도 연락이 오지 않는다면 <br></br>&nbsp;&nbsp;&nbsp;&nbsp;lazyguineapig1@gamil.com로 문의해주세요.</div>
                <div>3.혹시나 다른 문의사항이 있으실 경우 위 이메일로 문의주시면 최대한 빨리 답변드리겠습니다.</div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Success;

