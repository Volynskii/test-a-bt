import React,{useState,useRef,useEffect} from 'react';

const Select = ({searchedItems,handleFindItems}) => {

    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        handleFindItems(search)
    }, [search]);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const {current: wrap} = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const handleChooseItem = item => {
        setSearch(item);
        setDisplay(false);
    };

    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <input
                id="auto"
                onClick={() => setDisplay(!display)}
                placeholder="Type to search"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {display && (
                <div className="autoContainer">
                    {searchedItems
                        .map((value, i) => {
                            return (
                                <div
                                    onClick={() => handleChooseItem(value.name)}
                                    className="option"
                                    key={i}
                                    tabIndex="0"
                                >
                                    <span>{value.name}</span>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};
export default Select;
