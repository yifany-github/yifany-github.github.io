class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0 };
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                Seconds: {this.state.seconds}
            </div>
        );
    }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('timer-example')
);
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable();
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Hello, **world**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }
    s
    class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className="square" onClick={() => alert('click')}>
                {this.props.value}
            </button>
        );
    }
}