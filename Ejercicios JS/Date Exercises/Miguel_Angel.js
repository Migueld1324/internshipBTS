"use strict"
/*you will write a function called isToday which takes as unique
parameter a Date object, you will return true if that date is today,
or false if is not*/
function isToday (date){
	var dateToday = new Date;
	var dayDate = date.getDate();
	var monthDate = date.getMonth();
	var yearDate = date.getFullYear();
	var dayDateToday = dateToday.getDate();
	var monthDateToday = dateToday.getMonth();
	var yearDateToday = dateToday.getFullYear();
	if(dayDate === dayDateToday && monthDate === monthDateToday && yearDate === yearDateToday){
		return true;
	} else {
		return false;
	}
}

/*you will write a function called isBeerTime which take as a
parameter a Date object, you will return true or false based
on the conditions.

Monday after 20:00 hours
Tuesday after 19:00 hours
Wednesday after 18:00 hours
Thursday after 17:59 hours
Friday after 16:00 hours
Saturday after 10:00 hours
Sunday all day long*/
function isBeerTime(date){
	var day = date.getDay();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var secs = date.getSeconds();
	var millisecs = date.getMilliseconds();
	switch (true){
		case day === 0:
			return true;
		case day === 1:
			if(hours > 20){
				return true;
			} else if(hours === 20){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 2:
			if(hours > 19){
				return true;
			} else if(hours === 19){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 3:
			if(hours > 18){
				return true;
			} else if(hours === 18){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 4:
			if(hours > 17){
				return true;
			} else if(hours === 17){
				if(minutes > 59){
					return true;
				} else if(minutes === 59){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 5:
			if(hours > 16){
				return true;
			} else if(hours === 16){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
		case day === 6:
			if(hours > 10){
				return true;
			} else if(hours === 10){
				if(minutes > 0){
					return true;
				} else if(minutes === 0){
					if(secs > 0){
						return true;
					} else if(secs === 0){
						if(millisecs > 0){
							return true;
						} else {
							return false;
						}
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
			break;
	}
}

/*you will write a function called
whenIsNextFriday13 which takes a Date
object and return another Date object
with the next friday 13*/

function whenIsNextFriday13 (date){
	var flag = false;
	var day = date.getDay();
	var dayDate = date.getDate();
	if (dayDate === 13 && day === 5){
		date.setMonth((date.getMonth+1));
	} else if(dayDate < 13){
		date.setDate(13);
	} else {
		date.setDate(13);
		date.setMonth(date.getMonth()+1);
	}
	while (!flag){
		day = date.getDay();
		if(day === 5){
			flag = true;
		} else {
			date.setMonth(date.getMonth()+1);
		}
	}
	return date;
}

var date = new Date;
var date1 = new Date(2010, 5, 12);
var date2 = new Date(2016, 8, 4);
var date3 = new Date(2017, 8, 5, 20, 0, 1);
var date4 = new Date(2009, 8, 6, 18);
var date5 = new Date(2010, 8, 7, 18);
var date6 = new Date(2011, 8, 8, 17, 59, 0, 1);
var date7 = new Date(2012, 8, 9, 16);
var date8 = new Date(2013, 8, 10, 10, 0, 1);
var date9 = new Date(1970, 0, 0, 0, 0, 0, 0);
console.log(isToday(date));
console.log(isToday(date1));
console.log(isBeerTime(date2));
console.log(isBeerTime(date3));
console.log(isBeerTime(date4));
console.log(isBeerTime(date5));
console.log(isBeerTime(date6));
console.log(isBeerTime(date7));
console.log(isBeerTime(date8));
console.log(whenIsNextFriday13(date));
console.log(whenIsNextFriday13(date1));
console.log(whenIsNextFriday13(date2));
console.log(whenIsNextFriday13(date3));
console.log(whenIsNextFriday13(date4));
console.log(whenIsNextFriday13(date5));
console.log(whenIsNextFriday13(date6));
console.log(whenIsNextFriday13(date7));
console.log(whenIsNextFriday13(date8));
console.log(whenIsNextFriday13(date9));