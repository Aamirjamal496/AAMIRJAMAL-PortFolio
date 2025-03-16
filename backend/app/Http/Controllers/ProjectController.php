<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required|string',
            'description'=>'required|string',
            'image'=>'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if($request->hasFile('image')){
            $imagePath = $request->file('image')->store('projects','public');
        }else{
            $imagePath = null;
        }

        // Save Project in DB
        $project = Project::create([
            'projectTitle'=>$request->title,
            'projectDescription'=>$request->description,
            'image'=>$imagePath,
        ]);

        return response()->json(['message'=>'Project Addded Successfully','projects'=>$project],201);

        // $validator = Validator::make($request->all(), [
        //     "title" => 'required|string|max:255',
        //     "description" => 'required|string',
        //     "image" => 'nullable|image|mimes:jpeg,png,jpg,gif|max:246'
        // ]);
        // if ($validator->fails()) {
        //     return response()->json(['error' => $validator->errors()], 422);
        // }
        // // Hanlde file upload
        // $imagePath = null;
        // if ($request->hasFile('image')) {
        //     $imagePath = $request->file('image')->store('projects', 'public');
        // }
        // // Create Project
        // $project = Project::create([
        //     'projectTitle' => $request->title,
        //     'projectDescription' => $request->description,
        //     'image' => $imagePath,
        // ]);
        // return response()->json([
        //     'message' => 'Project Created Successfully',
        //     'project' => $project,
        // ]);
    }
}
