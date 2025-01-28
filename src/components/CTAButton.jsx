const CTAButton = () => {
    return (
        <>
            <button className="btn-circle border-2 border-primary md:btn-primary btn w-25 md:w-40 text-md sm:text-lg text-white ml-1"
                    onClick={() => document.getElementById('my_modal_2').showModal()}>
                <p className="hidden md:block">Skontaktuj się</p>
                <p className="animate-wiggle md:hidden">📞</p>
            </button>
            <dialog id="my_modal_2" className="modal text-wrap text-center">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Umów się na wizytę</h3>
                    <h4 className="py-4">Zapraszamy do kontaktu, aby umówić się na wizytę. Zadzwoń lub napisz do nas, a chętnie ustalimy dogodny termin!</h4>
                    <div className="text-gray-700 text-center mb-6">
                        <div className="flex mb-2 justify-center">
                            <p className="animate-wiggle mx-2">📞</p>
                            <a href="tel:+48123456789" className="font-bold text-blue-600 hover:underline">+48 123 456 789</a>
                        </div>
                        <span className="text-sm mb-2">Dostępny w godzinach: 8:00–18:00</span>
                        <p className="my-4">
                            ✉️ <a href="mailto:kontakt@dentysta.pl" className="font-bold text-blue-600 hover:underline">kontakt@dentysta.pl</a>
                        </p>
                        <p>
                            🏠 ul. Przykładowa 10, 81-100 Gdynia
                        </p>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

export default CTAButton