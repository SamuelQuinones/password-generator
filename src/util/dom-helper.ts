type EditableCSS = "paddingRight" | "marginRight";

export const getWidth = () => {
  const docWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - docWidth);
};

const setDataAttribute = (
  element: HTMLElement,
  styleProp: EditableCSS,
  value: string
) => {
  element.setAttribute(`data-pw-${styleProp}`, value);
};

export const resetDataAttribute = (
  element: HTMLElement,
  styleProp: EditableCSS
) => {
  element.removeAttribute(`data-pw-${styleProp}`);
};

export const setElementStyles = (
  selector: string,
  styleProp: EditableCSS,
  callback: (n: number) => number
) => {
  const Elements = document.querySelectorAll<HTMLElement>(selector);
  if (!Elements) return;
  Elements.forEach((e) => {
    const actualValue = e.style[styleProp];
    if (actualValue) setDataAttribute(e, styleProp, actualValue);

    const calcVal = window.getComputedStyle(e)[styleProp];
    e.style[styleProp] = `${callback(parseFloat(calcVal))}px`;
  });
};

export const resetElementStyles = (
  selector: string,
  styleProp: EditableCSS
) => {
  const Elements = document.querySelectorAll<HTMLElement>(selector);
  if (!Elements) return;
  Elements.forEach((e) => {
    const dataPw = e.getAttribute(`data-pw-${styleProp}`);
    if (dataPw === null) {
      e.style[styleProp] = "";
    } else {
      resetDataAttribute(e, styleProp);
      e.style[styleProp] = dataPw;
    }
  });
};
