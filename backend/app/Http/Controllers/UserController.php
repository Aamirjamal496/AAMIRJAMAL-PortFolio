<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserController extends Controller
{
    public function index(){
        $users=User::all();
        // $users=[
        //     'name'=>'Aamir',
        //     'Email'=>'amirjamal496@gmail.com',
        //     'role'=>'admin'
        // ];
        return response()->json($users);
    }
    public function register(Request $request){
        $request->validate([
            'name'=>'required|string',
            'email'=>'required|string|email|unique:users',
            'password'=>'required|string|min:8',
        ]);
        $user=new User();
        $user->name = $request->name;
        $user->email=$request->email;
        $user->password= Hash::make($request->password);
        $user->save();
        return response()->json(
            ['message'=>'User Registered Successfully'],201
        );
    }
    public function login(Request $request){
        // Validate the incoming request
    $request->validate([
        'email' => 'required|string|email',
        'password' => 'required|string',
    ]);

    // Check if the credentials are correct
    $user = User::where('email', $request->email)->first();

    // Ensure the user exists and password matches
    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }

    // Generate a new personal access token for the user
    $token = $user->createToken('YourAppName')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'token' => $token,
    ]);
    //     $request->validate([
    //         'email'=>'required|string|email',
    //         'password'=>'required|string'
    // ]);
    // $users =User::where('email',$request->email)->get();

    // if($users->isEmpty()){
    //     return response()->json(['message'=>'Invalid Credentials'],401);
    // }
    // $user=$users->first();
    // if( !Hash::check($request->password,$user->password)){
    //     return response()->json(['message'=>'Invalid Credentials'],401);
    // }
    // $token = $user->createToken('auth_token')->plainTextToken;
    // return response()->json(['access_token'=>$token]);
    }
    // public function logout(){
    //     // 
    // }
}
