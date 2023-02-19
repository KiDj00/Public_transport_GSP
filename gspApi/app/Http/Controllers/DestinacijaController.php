<?php

namespace App\Http\Controllers;

use App\Models\Destinacija;
use Illuminate\Http\Request;

class DestinacijaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Destinacija::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Destinacija  $destinacija
     * @return \Illuminate\Http\Response
     */
    public function show(Destinacija $destinacija)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Destinacija  $destinacija
     * @return \Illuminate\Http\Response
     */
    public function edit(Destinacija $destinacija)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Destinacija  $destinacija
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Destinacija $destinacija)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Destinacija  $destinacija
     * @return \Illuminate\Http\Response
     */
    public function destroy(Destinacija $destinacija)
    {
        //
    }
}
