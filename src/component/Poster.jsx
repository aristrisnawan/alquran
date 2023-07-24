import quran from '../assets/quran.png'

const Poster = () => {
    return(
        <div className="w-full h-52 bg-green-400 rounded-lg m-3 shadow-lg flex items-center justify-center">
          <img src={quran} alt="" className='w-16 '/>
      </div>
    )
}

export default Poster;