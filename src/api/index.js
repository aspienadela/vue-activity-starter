export const activitiesList = {
	'1546968934': {
		id: '1546968934',
		title: 'Learn Vue.js',
		notes: 'I started today and it was not good.',
		progress: 43,
		category: '1546969049',
		createdAt: 1546969144391,
		updatedAt: 1546969144391
	},
	'1546969212': {
		id: '1546969212',
		title: 'Read Witcher Books',
		notes: 'These books are super nice',
		progress: 85,
		category: '1546969049',
		createdAt: 1546969144391,
		updatedAt: 1546969144391
	}		

}

export const ActivitiesAPI = () => {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(activitiesList)
			if(canContinue()){
				resolve(activitiesList)
			}
			else {
				reject('Cannot fetch Activity List')
			}
		}, 1000)
	})
}

export const generateUid = () =>  Math.floor(new Date() * Math.random())

export const canContinue = () => {
	const randomNumber = Math.floor(Math.random() * 10)
	if(randomNumber>5){
		return true
	}
	return false
}
 
export const createNewActivityAPI = newActivity => {
	newActivity.id = generateUid()
	newActivity.progress = 0
	newActivity.createdAt = new Date()
	newActivity.updatedAt = new Date()

	return new Promise((resolve, reject) => {
		resolve(newActivity)
	})
}

export const CategoriesAPI = () => {
  return {
    '1546969049': {id: '1546969049', text: 'books'},
    '1546969225': {id: '1546969225', text: 'movies'}
  }
}

export const UserAPI = () => {
  return {
    name: 'Filip Jerga',
    id: '-Aj34jknvncx98812',
  }
}