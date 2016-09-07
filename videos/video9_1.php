
    <div class="form-group">
        <label class="control-label" for="numero1">Numero 1</label>
        <input type="number" class="form-control" name="numero1" placeholder="32"  id="idSumNumber1" >
    </div>
    <div class="form-group">
        <label class="control-label" for="numero2">Numero 2</label>
        <input type="number" class="form-control" name="numero2" placeholder="2"  id="idSumNumber2" >
    </div>
    <div class="form-group">
        <label class="control-label" for="radioSuma">Opciones</label>
        <div class="radio">
            <label>
                <input type="radio" name="radioSuma" id="idRadioSuma1" value="sumar" checked>
                Sumar
            </label>
        </div>
        <div class="radio">
            <label>
                <input type="radio" name="radioSuma" id="idRadioSuma2" value="restar">
                Restar
            </label>
        </div>
    </div>
    <input type="button" value="Enviar" class="btn btn-default" onclick="sumNumbers()">
