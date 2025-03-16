<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function contact(Request $request){
        $request->validate([
            'name'=>'required|string',
            'email'=>'required|string|email|',
            'message'=>'required|string'
        ]);
        // Store message in DB
        $message=Message::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'message'=>$request->message
        ]);

        return response()->json(['message'=>'Message Sent Successfullly','messages'=>$message],201);
    }
    public function getMessages(Request $request){
        return Message::all();
    }
    public function destroy($id){
        $message = Message::find($id);
        if($message){
            $message->delete();
            return response()->json(['message'=>'Message Deleted Successfully'],200);
        }else{
            return response()->json(['message'=>'Message not found'],404);
        }
    }
}
