// FREE_WARNING = 'Free shipping only applies to single customer orders'
// BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
// NONE_SELECTED = '0'

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600 
// else shipping = 800

// shoes = 300 * 1
// toys - 100 * 5
// shirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED' 

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
// 	if (location = NAM && customers < 2) {
// 			if (location = RSA)
// 		    shipping = 0 || calcShipping
// 		}
// 	}
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null


/*shipping*/ 
const area = 'AU';
let shipping = 0;
let currency='$'
const WARNING = 'We DO NOT ship to North Korea'

if (area == 'RSA'){
    shipping = 400;
    currency ='R';
    console.log(shipping,currency)
}

if (area == 'NAM'){
    shipping = 600;
    console.log(shipping,currency)
} 

if (area == 'NK'){
    console.log(WARNING)
} else{
    shipping = 800;
    console.log(shipping,currency)
}



