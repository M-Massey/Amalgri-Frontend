import { createGlobalStyle } from "styled-components";
import homepageBg from "../../assets/biganime.png";

export default createGlobalStyle`
/*
#FF69B4
#010400
#145C9E
#3BF4FB
#B10F2E
*/
  /* http://meyerweb.com/eric/tools/css/reset/
      v2.0 | 20110126
      License: none (public domain)
  */
:root { 
  /* #224186 */
  --test:#112960;
  --border: lightgray;
  --darker-border: darkgray;
  --primary: #FF69B4;
  --black:#010400;
  --dark-blue:#145C9E;
  --light-blue:#3BF4FB;
  --red:#B10F2E;
  --white: whitesmoke;
}




  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video,button, input {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      font-family: Arial, sans-serif
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url(${homepageBg});
  background-position: center;
  background-repeat: repeat;
  background-size: cover;
  position: relative;
  height:100vh;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  button, input[type="submit"], input[type="reset"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
`;
