const expected = [
  // 001-forward-icon.svg
  // 003-ForwardIcon.svg
  `import React from 'react';\n` +
  `\n` +
  `const ForwardIcon = props => (\n` +
  `  <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>\n` +
  `    <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `  </svg>\n` +
  `);\n` +
  `\n` +
  `export default ForwardIcon;`,

  // 002-f0rward-ic0n.svg
  `import React from 'react';\n` +
  `\n` +
  `const FRwardIcN = props => (\n` +
  `  <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>\n` +
  `    <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `  </svg>\n` +
  `);\n` +
  `\n` +
  `export default FRwardIcN;`,

  // 003-ForwardIcon.svg
  `import React from 'react';\n` +
  `\n` +
  `const ForwardIcon = props => (\n` +
  `  <svg height="24" width="24" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>\n` +
  `    <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `  </svg>\n` +
  `);\n` +
  `\n` +
  `export default ForwardIcon;`,

  // 004.svg
  `import React from 'react';\n` +
  `\n` +
  `const Svg = props => (\n` +
  `  <svg height="24" width="24" {...props}>\n` +
  `    <path d="M21 11l-7-7v4C7 9 4 14 3 19c2.5-3.5 6-5.1 11-5.1V18l7-7z"/>\n` +
  `  </svg>\n` +
  `);\n` +
  `\n` +
  `export default Svg;`
];

module.exports = (actual) => {
  console.assert(
    expected.find(x => x === actual),
    `svg-icon-to-react-component-loader should return a stateless functional component` +
    `\n\n==> Actual result:\n${actual}` +
    `\n\n==> Expected result:\n${expected}`
  );

  return actual;
};
