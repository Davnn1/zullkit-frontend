import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";

export const useUserStore = defineStore( {
		id: 'user',
		state: () => ( {
			user: false,
		} ),
		getters: {
			isLoggedIn: ( state ) => state.user,
			getUser: (state) => state.user
		},
		actions: {
			async fetchUser() {
				try {
					const { data } = await axios.get( 'https://zullkit-backend-87125781cc8c.herokuapp.com/api/user', {
						headers: {
							Authorization: localStorage.getItem( 'token_type' ) + ' ' + localStorage.getItem( 'access_token' )
						}
					} )
					this.user = data
				} catch ( e ) {
					this.user = false
				}
			}
		}
	} )

