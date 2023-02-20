<?php

namespace App\Http\Controllers;

use App\Http\Resources\LinijaResource;
use App\Models\Linija;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LinijaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LinijaResource::collection(Linija::all());
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
        $validator = Validator::make($request->all(), [
            'brojLinije' => 'required|string|max:5',
            'vreme' => 'required',
            'pocetnaDestinacija' => 'required',
            'zavrsnaDestinacija' => 'required',
            'zona' => 'required',
            'interval' => 'required',
            'tipLinije' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }
        $l = Linija::create([
            'brojLinije' => $request->brojLinije,
            'vreme' => $request->vreme,
            'pocetnaDestinacija' => $request->pocetnaDestinacija,
            'zavrsnaDestinacija' => $request->zavrsnaDestinacija,
            'zona' => $request->zona,
            'tipLinije' => $request->tipLinije,
        ]);
        $l->save();
        return response()->json(['Linija kreirana!', new LinijaResource($l)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Linija  $linija
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new LinijaResource(Linija::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Linija  $linija
     * @return \Illuminate\Http\Response
     */
    public function edit(Linija $linija)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Linija  $linija
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'brojLinije' => 'string|max:5',
            'vreme' => '',
            'pocetnaDestinacija' => '',
            'zavrsnaDestinacija' => '',
            'zona' => '',
            'tipLinije' => '',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $l = Linija::find($id);
        if ($l) {
            $l->brojLinije = $request->brojLinije;
            $l->vreme = $request->vreme;
            $l->pocetnaDestinacija = $request->pocetnaDestinacija;
            $l->zavrsnaDestinacija = $request->zavrsnaDestinacija;
            $l->zona = $request->zona;
            $l->tipLinije = $request->tipLinije;

            $l->save();
            return response()->json([
                'Linija uspesno izmenjena!',
                new LinijaResource($l),
            ]);
        } else {
            return response()->json('Trazeni objekat ne postoji u bazi');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Linija  $linija
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $linija = Linija::find($id);
        if ($linija) {
            $linija->delete();
            return response()->json('uspesno obrisana linija!');
        } else {
            return response()->json(
                [
                    'message' =>
                        'Nije moguce obrisati tu liniju jer ona ne postoji u bazi.',
                ],
                400
            );
        }
    }
}
