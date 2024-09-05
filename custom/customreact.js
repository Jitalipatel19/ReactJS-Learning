function customRender(reactElement, container) {
    /*const domElement = document.createElement(reactElement.type);
    
    // Set the text content of the element
    domElement.textContent = reactElement.children;
    
    // Set attributes only if they exist in props
    if (reactElement.props.href) {
        domElement.setAttribute('href', reactElement.props.href);
    }
    if (reactElement.props.target) {
        domElement.setAttribute('target', reactElement.props.target);
    }
    
    // Append the element to the container
    container.appendChild(domElement);*/
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement. props){
        if(prop === 'children') continue;//ignoreable
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
};

const mainContainer = document.getElementById('root');

// Render the element by injecting it into the container
customRender(reactElement, mainContainer);
