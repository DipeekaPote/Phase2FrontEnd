import React, { useState, useRef, useEffect } from 'react';
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { RiAddCircleLine } from 'react-icons/ri';
import { IoIosCloseCircleOutline } from "react-icons/io";


const TextEditor = () => {
 
  var modules = {
    toolbar: [
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        [{ "background": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ["emoji"],
        [{ 'custom-add-shortcode': 'Add Shortcode' }]
      ],
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "background",
    "list", "color", "bullet", 
    "link",  "size","emoji",
  ];
  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };
//
const [searchTerm, setSearchTerm] = useState('');
const dropdownRef = useRef(null);
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const [textareaValue, setTextareaValue] = useState('');
    const onTextareaChange = (e) => {
        const { value } = e.target;
        setTextareaValue(value);
        console.log(textareaValue)

    };
    const [showDropdownhtml, setShowDropdownhtml] = useState(false);

    const handleAddShortcuthtml = (shortcut) => {
        setTextareaValue(prevText => prevText + `[${shortcut}]`);
        setShowDropdownhtml(false);
    };



   
    const [inputText, setInputText] = useState('');

    const [showDropdown, setShowDropdown] = useState(false);
    
    const handleAddShortcut = (shortcut) => {
        setInputText(prevText => prevText + `[${shortcut}]`);
        setShowDropdown(false);


    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setSearchTerm(''); // Clear search term when showing the dropdown
    };
    const toggleDropdownhtml = () => {
        setShowDropdownhtml(!showDropdownhtml);
        setSearchTerm(''); // Clear search term when showing the dropdown
    };
    const [filteredShortcuts, setFilteredShortcuts] = useState([]);
    const [shortcuts, setShortcuts] = useState([]);

    const [selectedOption, setSelectedOption] = useState('contacts'); // Default selected option
    useEffect(() => {
        if (selectedOption === 'contacts') {
            // Set contact shortcuts
            const contactShortcuts = [
                { title: 'Account Shortcodes', isBold: true },
                { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
                { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
                { title: 'Contact Shortcodes', isBold: true, },
                { title: 'Contact Name', isBold: false, value: 'CONTACT_NAME' },
                { title: 'First Name', isBold: false, value: 'FIRST_NAME' },
                { title: 'Middle Name', isBold: false, value: 'MIDDLE_NAME' },
                { title: 'Last Name', isBold: false, value: 'LAST_NAME' },
                { title: 'Phone number', isBold: false, value: 'PHONE_NUMBER' },
                { title: 'Country', isBold: false, value: 'COUNTRY' },
                { title: 'Company name', isBold: false, value: 'COMPANY_NAME ' },
                { title: 'Street address', isBold: false, value: 'STREET_ADDRESS' },
                { title: 'City', isBold: false, value: 'CITY' },
                { title: 'State/Province', isBold: false, value: 'STATE / PROVINCE' },
                { title: 'Zip/Postal code', isBold: false, value: 'ZIP / POSTAL CODE' },
                { title: 'Custom field:Email', isBold: false, value: 'CONTACT_CUSTOM_FIELD:Email' },

                { title: 'Date Shortcodes', isBold: true },
                { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
                { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
                { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
                { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
                { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
                { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
                { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
                { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
                { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
                { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
                { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
                { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
                { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
                { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
                { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
                { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
                { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
                { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
                { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
                { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
                { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
                { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
                { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
                { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



            ];
            setShortcuts(contactShortcuts);
        } else if (selectedOption === 'account') {
            // Set account shortcuts
            const accountShortcuts = [
                { title: 'Account Shortcodes', isBold: true },
                { title: 'Account Name', isBold: false, value: 'ACCOUNT_NAME' },
                { title: 'Custom field:Website', isBold: false, value: 'ACCOUNT_CUSTOM_FIELD:Website' },
                { title: 'Date Shortcodes', isBold: true },
                { title: 'Current day full date', isBold: false, value: 'CURRENT_DAY_FULL_DATE' },
                { title: 'Current day number', isBold: false, value: 'CURRENT_DAY_NUMBER' },
                { title: 'Current day name', isBold: false, value: 'CURRENT_DAY_NAME' },
                { title: 'Current week', isBold: false, value: 'CURRENT_WEEK' },
                { title: 'Current month number', isBold: false, value: 'CURRENT_MONTH_NUMBER' },
                { title: 'Current month name', isBold: false, value: 'CURRENT_MONTH_NAME' },
                { title: 'Current quarter', isBold: false, value: 'CURRENT_QUARTER' },
                { title: 'Current year', isBold: false, value: 'CURRENT_YEAR' },
                { title: 'Last day full date', isBold: false, value: 'LAST_DAY_FULL_DATE' },
                { title: 'Last day number', isBold: false, value: 'LAST_DAY_NUMBER' },
                { title: 'Last day name', isBold: false, value: 'LAST_DAY_NAME' },
                { title: 'Last week', isBold: false, value: 'LAST_WEEK' },
                { title: 'Last month number', isBold: false, value: 'LAST_MONTH_NUMBER' },
                { title: 'Last month name', isBold: false, value: 'LAST_MONTH_NAME' },
                { title: 'Last quarter', isBold: false, value: 'LAST_QUARTER' },
                { title: 'Last_year', isBold: false, value: 'LAST_YEAR' },
                { title: 'Next day full date', isBold: false, value: 'NEXT_DAY_FULL_DATE' },
                { title: 'Next day number', isBold: false, value: 'NEXT_DAY_NUMBER' },
                { title: 'Next day name', isBold: false, value: 'NEXT_DAY_NAME' },
                { title: 'Next week', isBold: false, value: 'NEXT_WEEK' },
                { title: 'Next month number', isBold: false, value: 'NEXT_MONTH_NUMBER' },
                { title: 'Next month name', isBold: false, value: 'NEXT_MONTH_NAME' },
                { title: 'Next quarter', isBold: false, value: 'NEXT_QUARTER' },
                { title: 'Next year', isBold: false, value: 'NEXT_YEAR' }



            ]; setShortcuts(accountShortcuts);
        }
    }, [selectedOption]);
    
    const [selectedShortcut, setSelectedShortcut] = useState('');
    useEffect(() => {
        setFilteredShortcuts(shortcuts.filter(shortcut => shortcut.title.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, shortcuts]);
  
    const handleOptionChange = (value) => {
        setSelectedOption(value);

    };



    

   



  return (
   
    <div style={{ display: "flex", alignItems: "center" }}>
    <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        placeholder="Description"
        onChange={handleProcedureContentChange}
        style={{  flex: "1" }}
        className='col-12'
      
    >
    </ReactQuill>

        {/* <div className='addshortcodes' style={{ color: 'var(--links-background)', cursor: 'pointer',marginBottom:'55px', }}>
                                <RiAddCircleLine onClick={toggleDropdown} className="add-shortcut-icon" />Shortcode

                                {showDropdown && (
                                    <div  className="dropdown" ref={dropdownRef}>
                                     <div className="search-bar" style={{display:'flex', justifyContent:'space-between', gap:'10px'}}>
                                        <input
                                            type="text"
                                            placeholder="Search shortcuts"
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <button className="close-icon-email" style={{fontSize:"20px",marginTop:'4px',border:'none',background:'none',color:'#007bff'}} onClick={toggleDropdown}>
                                        <IoIosCloseCircleOutline />
                                        </button>
                                    </div>
                                        <ul className="dropdown-list">
                                            {filteredShortcuts.map(shortcut => (
                                                <div key={shortcut.title}>
                                                    <span
                                                        style={{ fontWeight: shortcut.isBold ? 'bold' : 'normal', cursor: 'pointer' }}
                                                        onClick={() => handleAddShortcut(shortcut.value)}>
                                                        {shortcut.title}
                                                    </span>
                                                </div>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div> */}



      </div>

      
   
  );

}

export default TextEditor;




