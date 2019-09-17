export const ActivitiesAPI = () => {
	return{
		'1546968934': {
			id: '1546968934',
			title: 'Learn Vue.js',
			notes: 'I started today and it was not good.',
			progress: 0,
			category: '1546969049',
			createdAt: 1546969144391,
			updatedAt: 1546969144391
		},
		'1546969212': {
			id: '1546969212',
			title: 'Read Witcher Books',
			notes: 'These books are super nice',
			progress: 0,
			category: '1546969049',
			createdAt: 1546969144391,
			updatedAt: 1546969144391
		}		
	}
}

export const generateUid = () =>  Math.floor(new Date() * Math.random())

export const createNewActivityAPI = newActivity => {
	newActivity.id = generateUid()
	newActivity.progress = 0
	newActivity.createdAt = new Date()
	newActivity.updatedAt = new Date()

	return newActivity
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