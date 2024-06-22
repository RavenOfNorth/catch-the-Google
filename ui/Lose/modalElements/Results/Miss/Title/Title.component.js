export function TitleMissComponent() {
    const element = document.createElement('span')
    element.classList.add('result-title');

    element.append('Miss:')

    return element;
}