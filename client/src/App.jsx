import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//components
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AddPlaylist from './components/AddPlayList/AddPlaylist';
import AddSong from './components/AddSong/AddSong';
//firebase
import PrivateRoute from './firebase/PrivateRoute';
import {AuthProvider} from './firebase/auth'


function App() {
	return (
		<AuthProvider>
		<Router>
			<div>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route 
					path="/dashboard" 
					element={
						<PrivateRoute>
							<AddPlaylist />
						</PrivateRoute>
					} />
				<Route 
					path="add-songs/:id" 
					element={						
						<PrivateRoute>
							<AddSong />
						</PrivateRoute>
					}/>
			</Routes>
			</div>
		</Router>
		</AuthProvider>
	)
}

export default App
