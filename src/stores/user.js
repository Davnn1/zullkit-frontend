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
					const { data } = await axios.get( 'http://127.0.0.1:8000/api/user', {
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

