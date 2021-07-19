userPhoneChange = (e) => {
    const { value } = e.target;
    const reg = /^1([0-9]*)?$/;
    if ((reg.test(value) && value.length < 9) || value === '') {
        this.setState({
            userPhone: value
        })
    }
}
class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error', error));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}
class AddressItem extends Component {
    render() {
        return (
            <div className="row form-group justify-content-start">
                <label className="col-sm-4 col-form-label">{this.props.label}</label>
                <div className="col-xl-8">
                    <input
                        type="text"
                        defaultValue={this.props.value}
                        onChange={this.props.onChange}
                        className="form-control"
                        placeholder={this.props.placeholder} />
                </div>
            </div>
        );
    }
}

class AddressInput extends Component {
    render() {
        return (
            <div className="card"><div className="card-body">
                <AddressItem label="Street" value={this.props.street} placeholder="" readonly="true" />
                <AddressItem label="City" value={this.props.city} placeholder="" readonly="true" />
                <AddressItem label="State" value={this.props.state} placeholder="" readonly="true" />
                <AddressItem label="Postal Code" value={this.props.code} placeholder="" readonly="true" />
                <AddressItem label="Country" value={this.props.country} placeholder="" readonly="true" />
            </div></div>
        );
    }
}