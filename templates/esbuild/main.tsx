import VSX, { createRouter } from "../../src/index";

const router = createRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/page1',
        element: '<div>Welcome to Page 2</div>'
    },
    {
        path: '/page2',
        element: <Page2 />
    },
    {
        path: '/page3',
        element: '<div>Welcome to Page 3. Reloading leads to 404 Not Found.</div>'
    }
]);

function Page2(): HTMLElement {
    return (
        <div>
            <div>
                Welcome to Page 2. 
                <br /><br />
                <button onClick={() => {
                    router('/');
                }}>Go to main page</button>
                <button onClick={() => {
                    router('/page2');
                }}>Go to page 1</button>
            </div>
        </div>
    );
}

function App(): HTMLElement {

    return (
        <div>
            <div>
                Welcome to App
                <br /><br />
                <button onClick={() => {
                    router('/page1');
                }}>Go to page 1</button>
                <br /><br />
                <button onClick={() => {
                    router('/page2');
                }}>Go to page 2</button>
            </div>
        </div>
    );
}

document.getElementById("root")?.appendChild(<App />);
