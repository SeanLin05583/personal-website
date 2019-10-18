/**
 * 滑動到指定 Y 軸
 * @param {number} targetY    指定 Y 軸
 * @param {element} ref       傳入 target div
 */
export default function smoothScroll(targetY, ref) {
  const targetElement = ref || window;
  const targetElementScrollY = ref ? targetElement.scrollY : window.pageYOffset;

  // 移動的距離
  const movingSpacing = Math.abs(targetElementScrollY - targetY);

  // window 高度
  const windowHeight = window.innerHeight;

  // window 可滑動高度
  const windowScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;

  // 移動方向 往下滑為正 往上滑為負
  const directionBase = targetY - targetElementScrollY > 0 ? 1 : -1;

  // 移動距離與時間間隔根據 滑動距離是否大於整個螢幕高度 有不同的數值
  const isMovingSpaceLargerThanWindowHeight = movingSpacing < windowHeight;

  // 每次移動距離
  const scrollBase = isMovingSpaceLargerThanWindowHeight ? 25 : 75;

  // 移動時間間隔
  const timeBase = isMovingSpaceLargerThanWindowHeight ? 15 : 15;

  // 判斷是否已開始滑動的參數
  let scrollCounter = 0;
  const scrollInterval = setInterval(() => {
    let scrollToY = ref ? targetElement.scrollTop : window.pageYOffset;
    if ((scrollToY === windowScrollableHeight || scrollToY === 0) && scrollCounter !== 0) {
      // 已滑動到底部則停止滑動
      clearInterval(scrollInterval);
      return;
    }
    if (directionBase * (scrollToY + directionBase * scrollBase - targetY) < 0) {
      scrollToY += directionBase * scrollBase;
      scrollCounter += 1;
      targetElement.scrollTo(0, scrollToY);
    } else {
      targetElement.scrollTo(0, targetY);
      clearInterval(scrollInterval);
      return;
    }
  }, timeBase);
}
