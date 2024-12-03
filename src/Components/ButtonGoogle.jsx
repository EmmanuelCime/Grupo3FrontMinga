export default function ButtonGoogle({name, onClick}) {
    return(
        <button
            type="button"
            className="w-full border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition-colors mt-3 gap-3"
            onClick={onClick}
          >
            <img
              src="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg?auto=format%252Ccompress"
              className="w-5 h-5"
              alt="google_logo"
            />
            <span className="text-gray-600">{name}</span>
          </button>
    )
}