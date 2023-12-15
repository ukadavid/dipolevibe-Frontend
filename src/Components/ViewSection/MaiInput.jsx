/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'
import { TbFileDescription } from "react-icons/tb";
import { LuUser, LuUsers } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineGroupAdd } from "react-icons/md";

import { RiChatPrivateLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FaAngleDown } from "react-icons/fa6";

function MailInput({
  email,
  setEmail,
  emailButtons,
  setEmailButtons,
  setSelectedOption,
  hasMinimumTag,
  setMinimumTagError,
  selectedOption,
  displayModal,
  handleSubmit
}) {
  const [buttonText, setButtonText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tagLimitExceeded, setTagLimitExceeded] = useState(false);
  const [duplicateTagError, setDuplicateTagError] = useState(false);
  const [hasAtLeastOneTag, setHasAtLeastOneTag] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [showDropdown, setShowdropdown] = useState(false);
  // const { displayModal,handleSubmit } = props;
  const [open, setOpen] = useState(displayModal)
 
  const cancelButtonRef = useRef(null)

  const handleTextInputChange = (e) => {
    setButtonText(e.target.value);
    setTagLimitExceeded(false); // Reset the tag limit message
    setDuplicateTagError(false); // Reset the duplicate tag error
    setEmailValidationError(false)
  };

  const validateEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const createButton = (e) => {
    e.preventDefault(); // Prevent the form submission

    if (buttonText.trim() === "") {
      alert("Please enter some text for the button.");
      return;
    }

    setMinimumTagError(false);

    if (emailButtons.length >= 5) {
      setTagLimitExceeded(true); // Set the tag limit message
      return;
    }

    if (!validateEmail(buttonText)) {
        setEmailValidationError(true); // Set the email validation error
        return;
      }

    if (emailButtons.includes(buttonText)) {
      setDuplicateTagError(true); // Set the duplicate tag error
      return;
    }

    // Add the new button to the list of buttons
    // setButtons([...buttons, buttonText]);
    // setTag([...tag, buttonText]);

    setEmailButtons([...emailButtons,buttonText]);
    setEmail([...email, buttonText])

    // Clear the input field after creating the button
    setButtonText("");
    setHasAtLeastOneTag(true); // At least one tag is entered

    // Exit edit mode
    setIsEditing(false);
  };

  const removeButton = (index) => {
    const newButtons = [...emailButtons];
    newButtons.splice(index, 1);
    // const newTag = [...tag];
    // newTag.splice(index, 1);
    setEmailButtons(newButtons);
    // setEmail(newTag);
  };

  // Handle input blur (losing focus)
  const handleInputBlur = () => {
    if (!hasAtLeastOneTag && buttonText.trim() !== "") {
      setHasAtLeastOneTag(true);
    }
    setIsEditing(false);
  };

  const handleSelectChange = (event) => {
    const newSelectedOption = event.currentTarget.dataset.option;
    setSelectedOption(newSelectedOption);
    setShowdropdown(false);
  }



  useEffect(() => {
    // Check if at least one tag is entered
    if (emailButtons.length === 0) {
      setHasAtLeastOneTag(false);
    }
  }, [emailButtons]);

  // return (
  //   <>
  //   <div className="border border-current pl-1">
  //     <div id="">
  //       <select value={selectedOption} onChange={handleSelectChange}>
  //           <option value="self">self</option>
  //           <option value="public-private">public private</option>
  //           <option value="team">share with team</option>
  //       </select>
  //     </div>
  //     <div id="button-container" className="">
  //       {emailButtons.map((buttonText, index) => (
  //         <div
  //           key={index}
  //           className="tag-button dark:text-gray-800 text-gray-800 flex items-center mr-2"
  //         >
  //           {buttonText}
  //           <span
  //             onClick={() => removeButton(index)}
  //           >
  //             <MdOutlineCancel />
  //           </span>
  //         </div>
  //       ))}
  //     </div>
  //   {selectedOption == "team" ? 
  //     <div id="input-container">
  //       <form id="input-form" onSubmit={createButton}>
  //         <input
  //           type="text"
  //           id="text-input"
  //           placeholder="Enter email"
  //           value={buttonText}
  //           onChange={handleTextInputChange}
  //           onBlur={handleInputBlur} // Handle blur event
  //           className="outline-0 dark:bg-white dark:text-black text-gray-800"
  //           autoComplete="off"
  //         />
  //       </form>
  //       {emailValidationError && (
  //        <p className="text-red-600 dark:text-red-600 text-xs">
  //         Invalid email.
  //        </p>
  //       )}
  //     </div> :
  //     ""
  //   }
  //   </div>
  //   {tagLimitExceeded && (
  //   <p className="text-red-600 dark:text-red-600 text-xs">
  //     You can only share with a maximum of 3 people.
  //   </p>
  //   )}
  //   {duplicateTagError && (
  //   <p className="text-red-600 dark:text-red-600 text-xs">
  //     Duplicate mail. Please enter a different email.
  //   </p>
  //   )}
  //   </>
  //   )
    return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 border border-current sm:p-6 sm:pb-4">
                  <div className="flex items-center">
                    <span className=" flex items-center justify-center text-3xl w-10 h-10 border rounded-3xl text-blue-500 bg-blue-200">
                      <MdOutlineGroupAdd className="w-6 h-8"/>
                    </span>
                    <span className="ml-2">Share with Spaces and people</span>
                  </div>
                <>
                 <div className=" pl-1 flex items-center pt-3.5 pb-3.5">
                 {/* <div id=""> */}
                   {/* <select value={selectedOption} onChange={handleSelectChange}>
                       <option value="self">self</option>
                       <option value="public-private">public private</option>
                       <option value="team">share with team</option>
                   </select> */}

                   <div 
                   className="flex items-center pl-1.5 font-sans text-slate-700 border-2 rounded-lg border-inherit w-1/2 hover:border-sky-400"
                   onClick={() => setShowdropdown(true)}
                   >
                    <span className="text-sm font-normal font-sans">
                      {selectedOption || "self"}
                    </span>
                    <RiArrowDropDownLine />
                   </div>
                   {
                     showDropdown 
                      && 
                     <div className="w-96 ml-2">
                      <ul className=" w-1/2 py-1 border border-slate-300 rounded-md hover:shadow-xl">
                        <li 
                        className="pb-2 pl-1 text-base font-sans font-light text-slate-500 hover:bg-slate-100"
                        onClick={handleSelectChange}
                        data-option="self"
                        >
                          <div className="flex items-center">
                            <LuUser />
                            <span className="text-sm font-normal font-sans">Self</span>
                          </div>
                        </li>
                        <li 
                        className="pb-2 pl-1 text-base font-sans font-light text-slate-500 hover:bg-slate-100"
                        onClick={handleSelectChange}
                        data-option="public-private"
                        >
                          <div className="flex items-center">
                            <RiChatPrivateLine />
                            <span className="text-sm font-normal font-sans">Public-private</span>
                          </div>
                        </li>
                        <li 
                        className="pb-2 pl-1 text-base font-sans font-light text-slate-500 hover:bg-slate-100"
                        onClick={handleSelectChange}
                        data-option="team"
                        >
                          <div className="flex items-center">
                            <LuUsers />
                            <span className="text-sm font-normal font-sans">Team</span>
                          </div>
                        </li>
                      </ul>
                     </div>
                   }

                 {/* </div> */}
               </div>

               {
                selectedOption == 'team'
                  &&
                <div className="pl-2 pr-2 pt-2 pb-2 border rounded-3xl hover:border-blue-500">
                 <div id="button-container" className="">
                     {emailButtons.map((buttonText, index) => (
                       <div
                         key={index}
                         className="pl-2 pr-2 mb-2 max-w-max tag-button bg-gray-100 border rounded-3xl dark:text-gray-800 text-gray-800 flex items-center mr-2"
                       >
                         <span className="text-sm font-light text-slate-500">
                           {buttonText}
                         </span>
                         <span
                           onClick={() => removeButton(index)}
                           className="hover:text-red-300"
                         >
                           <MdOutlineCancel />
                         </span>
                       </div>
                     ))}
                 </div>
                {selectedOption == "team" ? 
                 <div 
                   id="input-container"
                   className="ml-2 text-sm"
                  >
                     <form id="input-form" onSubmit={createButton}>
                     <input
                       type="text"
                       id="text-input"
                       placeholder="Enter email"
                       value={buttonText}
                       onChange={handleTextInputChange}
                       onBlur={handleInputBlur} // Handle blur event
                       className="outline-0 pl-2 pt-2 pb-2 w-full rounded-3xl dark:bg-white dark:text-black text-gray-800"
                       autoComplete="off"
                       autoFocus
                     />
                     </form>
                     {emailValidationError && (
                    <p className="text-red-600 dark:text-red-600 text-xs">
                     Invalid email.
                    </p>
                     )}
                 </div> :
                   ""
                 }
                </div>
               }
               {tagLimitExceeded && (
               <p className="text-red-600 dark:text-red-600 text-xs">
                 You can only share with a maximum of 3 people.
               </p>
                )}
               {duplicateTagError && (
               <p className="text-red-600 dark:text-red-600 text-xs">
                 Duplicate mail. Please enter a different email.
               </p>
                )}
                </>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                        setOpen(false)

                        handleSubmit()
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => {
                      setOpen(false)
                      setSelectedOption('');
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MailInput;



// import { TbFileDescription } from "react-icons/tb";

// function TranscriptionPrompt(props) {



// }
