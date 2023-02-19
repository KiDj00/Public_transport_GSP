<?php

namespace App\Http\Controllers;

use App\Models\Poruka;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PorukaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Poruka::all();
    }

    public function primiPoruku(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ime' => 'required|string|max:100',
            'email' => 'required|string|max:100|email',
            'poruka' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['success' => 'false']);
        }

        $poruka = Poruka::create([
            'ime' => $request->ime,
            'email' => $request->email,
            'poruka' => $request->poruka,
        ]);

        return response()->json(['success' => true]);
    }
}
