const items = [
        {
            "id": 1,
            "name": "Growatt 5000W Solar Inverter with MPPT Charge Controller",
            "price": 936,
			"category": "Electronics",
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
            "imgUrl": "data:image/jpeg;base64,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"
        },

        {
			"id": 2,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "CHECK PRINT SHIRT",
			"price": 110,
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
			"category": "Fashion"
		},

		{
            "id": 3,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "GLORIA HIGH LOGO SNEAKER",
			"category": "Fashion",
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
			"price": 91
		},

		{
			"id": 4,
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "CATE RIGID BAG",
			"category": "Fashion",
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
			"price": 94.5
		},

		{
			"id": 5, 
            "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
			"name": "GUESS CONNECT WATCH",
			"category": "Electronics",
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
			"price": 438.9
		},

		{
			"id":  6, 
            "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
			"name": "'70s RETRO GLAM KEFIAH",
			"category": "Fashion",
			"description": "Lorem Ipsum comes from a latin text written in 45BC by Roman statesman, lawyer, scholar, and philosopher, Marcus Tullius Cicero.",
			"price": 20,
		}
    ]

export default items;