export default function cut(string, maxWidth, className) {
  var checkPayload = check(string, className);
  if (checkPayload.width > maxWidth) {

      while (checkPayload.width > maxWidth) {
        checkPayload.remove();
        string = string.slice(0, -1);
        checkPayload = check(string, className);
      }

      string += '...';
      checkPayload.remove();

    } else {
      checkPayload.remove();
      // Remove hidden element
    }
    
    return string;
};

function check(string, className) {
  var element = document.createElement('div');
  element.textContent = string;
  element.style.position = 'absolute';
  element.style.visibility = 'hidden';
  element.style.display = 'inline';
  element.style.width = 'initial';
  element.className = className;

  document.body.appendChild(element);
  return {
    width: element.clientWidth,
    remove: () => element.remove()
  };
}

window.check = check;
