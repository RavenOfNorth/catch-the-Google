export function SettingsElement(componentTitle, component) {
    const element = document.createElement("div");
    element.classList.add('line');
    element.append(
        componentTitle, component)

    return element
}