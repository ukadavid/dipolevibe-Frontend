const ShowTranscript = () => {
    return (
      <div className="max-w-screen-lg mx-auto bg-white shadow-md p-4 rounded-lg">
        <div className="flex items-center">
          {/* Column 1: Rounded Span */}
          <div className="flex-shrink-0">
            <span className="rounded-full bg-gray-900 text-white text-2xl p-2">
              KA
            </span>
          </div>
  
          {/* Column 2: Two Rows for Title and Email */}
          <div className="flex-grow">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-gray-600 text-sm">john.doe@example.com</p>
          </div>
  
          {/* Divider Column */}
          <div className="border-l border-gray-300 h-12"></div>
  
          {/* Column 3: Date */}
          <div className="ml-12">
            <p className="text-sm font-semibold">2023-08-30</p>
          </div>
  
          {/* Column 4: Time */}
          <div className="ml-12">
            <p className="text-sm font-semibold">15:30</p>
          </div>
  
          {/* Column 5: Exact Minutes */}
          <div className="ml-12">
            <p className="text-sm">20 minutes</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShowTranscript;
  