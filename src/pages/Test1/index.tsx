import ContentLoader, { Facebook } from "react-content-loader";
import "./index.css";

type Config = {
  val: number;
};

export default function Test1() {
  return (
    <h2>
      <ContentLoader
        // animate={false}
        // foregroundColor="blue"
        // speed={4}
        viewBox="0 0 380 70"
        // interval={0.25}
      >
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="20" />
        <rect x="80" y="50" rx="3" ry="3" width="150" height="20" />
      </ContentLoader>

      <div>
        <div className="test test1">#f5f6f7</div>
        <div className="test test2">#eee</div>
      </div>

      <ContentLoader
        // animate={false}
        foregroundColor="#8a2be2"
        speed={4}
        viewBox="0 0 380 70"
        // interval={0.25}
      >
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="20" />
        <rect x="80" y="50" rx="3" ry="3" width="150" height="20" />
      </ContentLoader>

      <div>
        <div className="test test1">#f5f6f7</div>
        <div className="test test3">#8a2be2</div>
      </div>

      {/* ################################## */}

      {/* aria-labelledby属性标识了一个（或多个）元素，该元素标记了它所应用到的元素。 */}
      {/* 这里指向内部title标签的id */}

      {/* viewBox属性的值是一个包含4个参数的列表 min-x, min-y, width and height， 以空格或者逗号分隔开， 在用户空间中指定一个矩形区域映射到给定的元素,查看属性preserveAspectRatio。 */}
      {/* min-x 视口横轴偏移量，min-y 视口纵轴偏移量 */}
      {/* width 视口宽度，height 视口高度 */}
      <svg aria-labelledby="ml3udb-aria" viewBox="0 0 380 70">
        {/* title 描述性字符串，该描述只能是纯文本，hover时做提示作用。 */}
        <title id="ml3udb-aria">Loading...</title>
        {/* x、y相对定位偏移量，width、height宽高，这里rect为外层 */}

        {/* clip-path CSS 属性使用裁剪方式创建元素的可显示区域。区域内的部分显示，区域外的隐藏。 */}
        {/* 用 <url> 表示剪切元素的路径 */}

        {/* style元素元素样式表直接在SVG内容中间嵌入。 */}
        {/* 这里fill: url指向了id一致的linearGradient渐变标签的id */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          clipPath="url(#ml3udb-diff)"
          style={{
            fill: "url('#ml3udb-animated-diff')",
          }}
        ></rect>
        {/* 把所有需要再次使用的引用元素定义在defs元素里面。 */}
        {/* 这里主要是针对clip-path和style的引用 */}
        <defs>
          <clipPath id="ml3udb-diff">
            {/* 三个小块 1正方形、2长条 */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70"></rect>
            <rect x="80" y="17" rx="4" ry="4" width="300" height="20"></rect>
            <rect x="80" y="50" rx="3" ry="3" width="150" height="20"></rect>
          </clipPath>

          {/* linearGradient元素用来定义线性渐变，用于图形元素的填充或描边。 */}
          <linearGradient id="ml3udb-animated-diff">
            {/* 一个渐变上的颜色坡度，是用stop元素定义的。 */}
            {/* offset属性用于表示该颜色位于渐变的什么位置上。这里指的是offset为整个外层元素横轴0%的地方的基点颜色 */}
            {/* stopColor属性指示在渐变停止时使用的颜色。 */}
            {/* stopOpacity属性定义给定颜色渐变停止的不透明度。 */}
            <stop offset="0%" stopColor="#f5f6f7" stopOpacity="1">
              {/* animate动画元素放在形状元素的内部，用来定义一个元素的某个属性如何踩着时点改变。 */}
              {/* 重点！这里values和keytimes是重点部分，先略过，第4点分析处会说明*/}
              {/* dur，即duration，动画时长 */}
              {/* repeatCount属性表示动画将发生的次数。 */}
              <animate
                attributeName="offset"
                values="-2; -2; 1"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            {/* 这里指的是offset为整个外层元素横轴50%的地方的基点颜色 */}
            <stop offset="50%" stopColor="red" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-1; -1; 2"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
            {/* 这里指的是offset为整个外层元素横轴100%的地方（即终点）的基点颜色 */}
            <stop offset="100%" stopColor="#f5f6f7" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0; 0; 3"
                keyTimes="0; 0.25; 1"
                dur="4s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
      </svg>
    </h2>
  );
}
