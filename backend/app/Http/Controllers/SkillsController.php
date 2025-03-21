<?php

namespace App\Http\Controllers;

use App\Models\Skills;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class SkillsController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'name'=>'required|string',
            'image'=>'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if($request->hasFile('image')){
            $imagePath = $request->file('image')->store('skills','public');
        }else{
            $imagePath = null;
        }
        // Store skill in DB
        $skill = Skills::create([
            'name'=>$request->name,
            'image'=>$imagePath,
        ]);
        return response()->json(['message'=>'Skill Added Successfully','skills'=>$skill , 'imageUrl'=>$imagePath ? url('storage/'. $imagePath) : null],201);
    }
    public function getSkills(){
        $skills = Skills::all();
        foreach($skills as $skill){
            if($skill->image){
                $skill->imageUrl = url('storage/' . $skill->image);
            }
        }
        return response()->json($skills);
    }
    public function getHomeSkills(){
        $skills = Skills::all();
        foreach($skills as $skill){
            if($skill->image){
                $skill->imageUrl = url('storage/' . $skill->image);
            }
        }
        return response()->json($skills);
    }
    public function destroy($id){
        $skill = Skills::find($id);
        if($skill){
            $skill->delete();
            return response()->json(['message','Skill deleted Successfully'],201);
        }else{
            return response()->json(['message'=>'Skill not found'],404);
        }
    }
}
