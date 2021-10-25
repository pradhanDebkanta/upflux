import React, { useState, useEffect } from 'react';
import '../../asserts/css/searcher.css';

const SearchPannel = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectSubject, setSelectSubject] = useState('');
    const [interestedArea, setInterestedArea] = useState('');
    const [interestedAreaOption, setInterestedAreaOption] = useState('');
    const [searchResultNo, setSearchResultNo] = useState(0);
    const [filterdata, setFilterData] = useState('');

    const options = [
        {
            label: "Physics",
            value: "Physics",
        },
        {
            label: "Chemistry",
            value: "Chemistry",
        },
        {
            label: "Math",
            value: "Math",
        },
    ]

    const interestedOption = {
        Physics: [
            {
                label: 'circular',
                value: 'circular',
            },
            {
                label: 'rigid body',
                value: 'rigid body',
            }
        ],
        Chemistry: [
            {
                label: 'organic',
                value: 'organic',
            },
            {
                label: 'meterial',
                value: 'meterial',
            }
        ],
        Math: [
            {
                label: 'vector',
                value: 'vector',
            },
            {
                label: 'calculas',
                value: 'calculas',
            }
        ]

    }

    const filterData = [
        {
            label: 'famous',
            value: 'famous',
        },
        {
            label: 'tending',
            value: 'tending',
        }
    ]

    useEffect(() => {
        if (selectSubject !== 'select' && interestedOption[selectSubject] !== undefined) {
            // console.log(interestedOption[selectSubject]);
            let optionItem = interestedOption[selectSubject].map((option, idx) => {
                return <option value={option.value} name={option.value} key={idx}>{option.label}</option>
            });
            setInterestedAreaOption(optionItem);
        }

    }, [selectSubject]);

    const onClickHandeler = (e) => {
        e.preventDefault();
        if (!(selectSubject === '' || selectSubject === 'select') && !(interestedArea === '' || interestedArea === 'select')) {
            console.log(interestedArea, selectSubject);
            setSearchResultNo(126);

        }
        // console.log('button submit')
    }

    const selectChange1 = (e) => {
        console.log(e.target.value);
        setSelectSubject(e.target.value);
    }
    const selectChange2 = (e) => {
        console.log(e.target.value);
        setInterestedArea(e.target.value);
    }
    const selectChange3 = (e) => {
        console.log(e.target.value);
        setFilterData(e.target.value);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="three-col-lg">
                    <div className="each-box">
                        <form className="form1">
                            <div className='input-box'>
                                <input className="input" type="text" value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder='Try "Physics Career Advice"'
                                />
                                {searchTerm.length ?
                                    <i className="fas fa-times resetInput" onClick={() => setSearchTerm('')}></i>
                                    : <></>
                                }
                            </div>
                            <button type="submit" className="search-btn" onClick={(e) => onClickHandeler(e)}>
                                <i className="fas fa-search search-icon"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="three-col-lg">
                    <div className="each-box">
                        <div className="select-box">
                            <select value={selectSubject} onChange={(e) => selectChange1(e)} className="select">
                                <option value="select">select</option>
                                {options.map((option, idx) => (
                                    <option value={option.value} name={option.value} key={idx}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="select-box">
                            <select value={interestedArea} onChange={(e) => selectChange2(e)} className="select">
                                <option value="select">select</option>
                                {interestedAreaOption}
                            </select>

                        </div>
                    </div>
                </div>
                <div className="three-col-lg">
                    <div className="each-box">
                        <div className="flex-end">
                            <div className="result-box">
                                <p className="result">{searchResultNo} results</p>
                            </div>
                            <select value={filterdata} onChange={(e) => selectChange3(e)} className="select">
                                <option value="Sort results">Sort results</option>
                                {filterData.map((option, idx) => (
                                    <option value={option.value} name={option.value} key={idx}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchPannel
