export default function createRouter(routes: { path: string, element: string }[]) {
    // TODO: Check if route.path === '/' and only one instance exists.
    // When using router,
    // 1. only once instance of '/' path should exist
    // 2. Router should be the top most element
    // 3. 
    function router(path: string) {
        window.history.pushState({}, '', path);
        routes.forEach(route => {
            if (route.path === path) {
                const root: HTMLElement | null = document.getElementById('root');
                if (root !== null) {
                    root.innerHTML = route.element;
                }
            }
        });
    }
    return router;
}
