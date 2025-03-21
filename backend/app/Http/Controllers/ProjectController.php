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
            'title' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
        } else {
            $imagePath = null;
        }

        // Save Project in DB
        $project = Project::create([
            'projectTitle' => $request->title,
            'projectDescription' => $request->description,
            'image' => $imagePath,
        ]);

        return response()->json([
            'message' => 'Project Addded Successfully',
            'projects' => $project,
            'imageUrl' => $imagePath ? url('storage/' . $imagePath) : null,
        ], 201);

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
    public function getProjects()
    {
        $projects = Project::all();
        foreach ($projects as $project) {
            if ($project->image) {
                $project->imageUrl = url('storage/' . $project->image); // Add the full URL
            }
        }
        return response()->json($projects);
    }
    public function getHomeProjects()
    {
        $projects = Project::all();
        foreach ($projects as $project) {
            if ($project->image) {
                $project->imageUrl = url('storage/' . $project->image); // Add the full URL
            }
        }
        return response()->json($projects);
    }
    public function destroy($id){
        $project = Project::find($id);
        if ($project) {
            $project->delete();
            return response()->json(['message'=>'Project Deleted Successfully'],201);
        }else{
            return response()->json(['message'=>'Project Not found']);
        }
    }
}
