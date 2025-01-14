import VSX from "vsx";

function App(): HTMLElement {
    return (
        <div>Hello, World! Is anyone out there?</div>
    );
}

document.getElementById("root")?.appendChild(<App />);
