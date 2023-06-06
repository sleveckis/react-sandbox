function App() {

    const title = 'Log Log 1';
    const body = 'Lorem etc'
    // array of objects is common
    const comments = [
        {id: 1, text: 'Note one'},
        {id: 2, text: 'Note two'},
        {id: 3, text: 'Note three'},
    ];

    const exCom = [
        {
            id: 4, text: 'Extra Note 1'
        },
        {
            id: 5, text: 'Extra Note 5'
        },
        {
            id: 6, text: 'Extra Note 6'
        },
    ];

    let ret = <h1>Default</h1>;

    let loading = false;
    let showComments = true;

    const loader = (
        <div className="container">
            <h1>Well Log Case 2</h1>
            <h2>LOG LOG 2</h2>
            <div className="comments">
                <h3>Notes with Attachments</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key = {index}>{comment.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const mainContent = (
    // remember, must return one element only (wrap multiple elements in a div or a fragment (<> ... </>))
            <div className = 'container'>
                <h1>Well Log</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam blanditiis laboriosam delectus quibusdam, harum aliquid, quisquam, mollitia sunt tempora molestiae explicabo dolor quod. Animi, dicta! Modi magnam illo eum deserunt.</p>
                <h2>{title.toUpperCase()}</h2>
                <p>{body}</p>
                <div className="comments">
                    <h3>Notes with Attachments</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))}
                    </ul>
                    {/* (hideous comment syntax for JSX lol)*/}
                    {/* showComments && == if true, do the thing, otherwise null*/}
                    {showComments && (
                        <div className="extraComments">
                            <ul>
                                {exCom.map((exCom, index) => (
                                    <li key = {index}>{exCom.text}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );

    // returning from a ternary operator requires the return keyword at the beginning of the expression
    return (loading) ? loader : mainContent;



}
export default App
