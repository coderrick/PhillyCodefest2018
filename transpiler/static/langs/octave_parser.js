/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var octave_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,5],$V2=[1,6],$V3=[1,13],$V4=[1,8],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[5,9,13,18,20,24,29,78,79],$V9=[1,30],$Va=[1,34],$Vb=[1,38],$Vc=[1,24],$Vd=[1,25],$Ve=[1,27],$Vf=[1,36],$Vg=[1,35],$Vh=[1,37],$Vi=[1,48],$Vj=[1,47],$Vk=[5,9,13,14,18,19,20,21,22,24,27,29,30,33,34,78,79],$Vl=[1,54],$Vm=[1,55],$Vn=[1,56],$Vo=[1,57],$Vp=[1,58],$Vq=[1,59],$Vr=[1,60],$Vs=[1,61],$Vt=[1,62],$Vu=[1,63],$Vv=[1,64],$Vw=[1,65],$Vx=[1,66],$Vy=[1,67],$Vz=[1,68],$VA=[1,69],$VB=[17,26,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,67,72,76],$VC=[14,17,19,21,22,26,27,30,33,34,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,65,67,72,76],$VD=[2,64],$VE=[1,80],$VF=[1,79],$VG=[2,70],$VH=[1,97],$VI=[72,76],$VJ=[17,67],$VK=[1,130],$VL=[17,76],$VM=[17,26,44,45,47,48,67,72,76],$VN=[17,26,44,45,47,48,49,50,67,72,76],$VO=[17,26,44,45,47,48,49,50,51,52,53,54,55,56,67,72,76],$VP=[17,26,44,45,47,48,49,50,51,52,53,54,55,56,57,58,67,72,76],$VQ=[13,18],$VR=[1,153],$VS=[1,154];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"case_statement":8,"case":9,"parentheses_expr":10,"case_statements_":11,"case_statements":12,"otherwise":13,"switch":14,"(":15,"e":16,")":17,"endswitch":18,"while":19,"endwhile":20,"function":21,"IDENTIFIER":22,"parameters":23,"endfunction":24,"statement_with_semicolon":25,";":26,"if":27,"elif":28,"endif":29,"import":30,"from":31,"STRING_LITERAL":32,"continue":33,"return":34,"access_array":35,"=":36,"++":37,"--":38,"+=":39,"-=":40,"*=":41,"/=":42,"function_call":43,"?":44,":":45,"...":46,"||":47,"|":48,"&&":49,"&":50,"!=":51,"==":52,"<=":53,"<":54,">=":55,">":56,"+":57,"-":58,"*":59,"/":60,"%":61,"not_expr":62,"!":63,"dot_expr":64,".":65,"[":66,"]":67,"exprs":68,"@":69,"parentheses_expr_":70,"{":71,"}":72,"key_values":73,"NUMBER":74,"parameter":75,",":76,"key_value":77,"elseif":78,"else":79,"identifiers":80,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"case",13:"otherwise",14:"switch",15:"(",17:")",18:"endswitch",19:"while",20:"endwhile",21:"function",22:"IDENTIFIER",24:"endfunction",26:";",27:"if",29:"endif",30:"import",31:"from",32:"STRING_LITERAL",33:"continue",34:"return",36:"=",37:"++",38:"--",39:"+=",40:"-=",41:"*=",42:"/=",44:"?",45:":",46:"...",47:"||",48:"|",49:"&&",50:"&",51:"!=",52:"==",53:"<=",54:"<",55:">=",56:">",57:"+",58:"-",59:"*",60:"/",61:"%",63:"!",65:".",66:"[",67:"]",69:"@",71:"{",72:"}",74:"NUMBER",76:",",78:"elseif",79:"else"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,3],[11,2],[11,1],[12,3],[12,1],[6,6],[6,6],[6,7],[6,2],[6,7],[6,6],[25,4],[25,1],[25,2],[25,3],[25,3],[25,2],[25,2],[25,3],[25,3],[25,3],[25,3],[25,1],[16,5],[16,2],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,3],[16,2],[16,1],[62,2],[62,1],[64,3],[64,1],[35,4],[43,3],[43,4],[10,7],[10,1],[10,1],[10,3],[10,1],[70,2],[70,3],[70,2],[70,3],[70,1],[70,1],[70,1],[75,3],[75,1],[23,3],[23,1],[23,0],[68,3],[68,1],[73,3],[73,1],[77,3],[77,3],[28,6],[28,2],[80,3],[80,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2: case 6:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 7: case 50: case 69:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["case",$$[$0-1],$$[$0]]
break;
case 8:
this.$ = $$[$0-2].concat([["default",$$[$0]]])
break;
case 10:
this.$ = ["switch",$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 12:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["semicolon",$$[$0-1]];
break;
case 14:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0-1]];
break;
case 15:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
case 16:
this.$ = ["import_from",$$[$0-2],$$[$0]];
break;
case 17: case 72: case 74: case 80:
this.$ = [$$[$0]];
break;
case 18:
this.$ = ["return",$$[$0]];
break;
case 19: case 20:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 21: case 22:
this.$ = [$$[$0],$$[$0-1]];
break;
case 23: case 24: case 25: case 26: case 30: case 31: case 32: case 33: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 28:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 29:
this.$=["unpack_array",$$[$0]]
break;
case 34:
this.$ = ['!=',$$[$0-2],$$[$0]];
break;
case 35:
this.$ = ['==',$$[$0-2],$$[$0]];
break;
case 45:
this.$ = ["-",$$[$0]];
break;
case 47:
this.$ = ["!", [".",$$[$0]]];
break;
case 48:
this.$ = [".", $$[$0]];
break;
case 49: case 68: case 71: case 79:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 51:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 52:
this.$= ["function_call",$$[$0-2],[]];
break;
case 53:
this.$= ["function_call",$$[$0-3],$$[$0-1]];
break;
case 54:
this.$ = ["anonymous_function","Object",$$[$0-3],["statements",[["semicolon",["return",$$[$0-1]]]]]];
break;
case 57:
this.$ = ["parentheses",$$[$0-1]];
break;
case 59:
this.$ = ["associative_array","Object","Object",[]];
break;
case 60:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 61:
this.$ = ["initializer_list","Object",[]];
break;
case 62:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 63: case 64: case 65:
this.$ = yytext;
break;
case 66:
this.$ = ["default_parameter","Object",$$[$0-2],$$[$0]];
break;
case 67:
this.$ = ["Object", $$[$0]];
break;
case 70:
this.$ = []
break;
case 73:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 75:
this.$ = [$$[$0-2],$$[$0]]
break;
case 76:
this.$ = ["\""+$$[$0-2]+"\"",$$[$0]]
break;
case 77:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 78:
this.$ = ["else",$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},{1:[3]},{5:[1,15]},o($V8,[2,3],{6:3,25:7,35:12,43:14,4:16,14:$V0,19:$V1,21:$V2,22:$V3,27:$V4,30:$V5,33:$V6,34:$V7}),{15:[1,17]},{15:[1,18]},{22:[1,19]},{26:[1,20]},{15:[1,21]},{22:[1,22]},{26:[2,17]},{10:29,15:$V9,16:23,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{36:[1,39]},{15:$Vi,36:[1,40],37:[1,41],38:[1,42],39:[1,43],40:[1,44],41:[1,45],42:[1,46],66:$Vj},{26:[2,27]},{1:[2,1]},o($V8,[2,2]),{10:29,15:$V9,16:49,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:50,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{15:[1,51]},o($Vk,[2,13]),{10:29,15:$V9,16:52,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{31:[1,53]},{26:[2,18],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{10:29,15:$V9,16:70,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:71,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},o($VB,[2,46]),{10:29,15:$V9,22:$Va,32:$Vb,35:32,43:31,64:72,66:$Vf,70:33,71:$Vg,74:$Vh},o($VB,[2,48]),o($VB,[2,50],{65:[1,73]}),{10:29,15:$V9,16:75,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,69:[1,74],70:33,71:$Vg,74:$Vh},o($VC,[2,55]),o($VC,[2,56]),o($VC,[2,58]),o($VC,$VD,{15:$Vi,66:$Vj}),{22:$VE,32:$VF,72:[1,76],73:77,77:78},{10:29,15:$V9,16:83,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,67:[1,81],68:82,70:33,71:$Vg,74:$Vh},o($VC,[2,63]),o($VC,[2,65]),{10:29,15:$V9,16:84,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:85,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{26:[2,21]},{26:[2,22]},{10:29,15:$V9,16:86,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:87,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:88,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:89,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:90,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:83,17:[1,91],22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,68:92,70:33,71:$Vg,74:$Vh},{17:[1,93],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{17:[1,94],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{17:$VG,22:$VH,23:95,75:96},{17:[1,98],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{32:[1,99]},{10:29,15:$V9,16:100,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:101,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:102,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:103,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:104,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:105,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:106,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:107,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:108,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:109,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:110,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:111,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:112,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:113,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:114,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:115,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},o([17,26,44,45,67,72,76],[2,29],{47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VB,[2,45]),o($VB,[2,47]),{10:29,15:$V9,22:$Va,32:$Vb,35:32,43:31,64:116,66:$Vf,70:33,71:$Vg,74:$Vh},{15:[1,117]},{17:[1,118],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},o($VC,[2,59]),{72:[1,119],76:[1,120]},o($VI,[2,74]),{45:[1,121]},{45:[1,122]},o($VC,[2,61]),{67:[1,123]},o($VJ,[2,72],{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,76:[1,124]}),{26:[2,19],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{26:[2,20],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{26:[2,23],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{26:[2,24],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{26:[2,25],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{26:[2,26],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA,67:[1,125]},o($VC,[2,52]),{17:[1,126]},{8:129,9:$VK,11:128,12:127},{4:132,6:3,7:131,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},{17:[1,133]},{17:[2,69],76:[1,134]},o($VL,[2,67],{36:[1,135]}),{4:132,6:3,7:136,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},{26:[2,16]},{44:$Vl,45:[1,137],47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},o($VM,[2,30],{49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VM,[2,31],{49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VN,[2,32],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VN,[2,33],{51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,34],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,35],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,36],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,37],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,38],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VO,[2,39],{57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VP,[2,40],{59:$Vy,60:$Vz,61:$VA}),o($VP,[2,41],{59:$Vy,60:$Vz,61:$VA}),o($VB,[2,42]),o($VB,[2,43]),o($VB,[2,44]),o($VB,[2,49]),{17:$VG,22:$VH,23:138,75:96},o($VC,[2,57]),o($VC,[2,60]),{22:$VE,32:$VF,77:139},{10:29,15:$V9,16:140,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{10:29,15:$V9,16:141,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},o($VC,[2,62]),{10:29,15:$V9,16:83,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,68:142,70:33,71:$Vg,74:$Vh},o([14,17,19,21,22,26,27,30,33,34,36,44,45,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,65,67,72,76],[2,51]),o($VC,[2,53]),{18:[1,143]},{13:[1,144],18:[2,9]},o($VQ,[2,7],{8:129,11:145,9:$VK}),{10:146,15:$V9,22:$Va,32:$Vb,35:32,43:31,66:$Vf,70:33,71:$Vg,74:$Vh},{20:[1,147]},o([9,13,18,20,24,29,78,79],[2,4]),{4:132,6:3,7:148,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},{17:$VG,22:$VH,23:149,75:96},{10:29,15:$V9,16:150,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{28:151,29:[1,152],78:$VR,79:$VS},{10:29,15:$V9,16:155,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{17:[1,156]},o($VI,[2,73]),o($VI,[2,75],{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VI,[2,76],{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),o($VJ,[2,71]),o($Vk,[2,10]),{4:132,6:3,7:157,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},o($VQ,[2,6]),{4:132,6:3,7:158,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},o($Vk,[2,11]),{24:[1,159]},{17:[2,68]},o($VL,[2,66],{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),{29:[1,160]},o($Vk,[2,15]),{15:[1,161]},{4:132,6:3,7:162,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},o([17,26,45,67,72,76],[2,28],{44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA}),{22:[1,164],32:$Vb,66:$Vf,70:163,71:$Vg,74:$Vh},{18:[2,8]},o([9,13,18],[2,5]),o($Vk,[2,12]),o($Vk,[2,14]),{10:29,15:$V9,16:165,22:$Va,32:$Vb,35:32,43:31,46:$Vc,58:$Vd,62:26,63:$Ve,64:28,66:$Vf,70:33,71:$Vg,74:$Vh},{29:[2,78]},{17:[1,166]},{17:$VD},{17:[1,167],44:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr,53:$Vs,54:$Vt,55:$Vu,56:$Vv,57:$Vw,58:$Vx,59:$Vy,60:$Vz,61:$VA},o($VC,[2,54]),{4:132,6:3,7:168,14:$V0,19:$V1,21:$V2,22:$V3,25:7,27:$V4,30:$V5,33:$V6,34:$V7,35:12,43:14},{28:169,78:$VR,79:$VS},{29:[2,77]}],
defaultActions: {10:[2,17],14:[2,27],15:[2,1],41:[2,21],42:[2,22],99:[2,16],149:[2,68],157:[2,8],162:[2,78],164:[2,64],169:[2,77]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace and line comments */
break;
case 1:return 74
break;
case 2:return 32
break;
case 3:return "$"
break;
case 4:return "@"
break;
case 5:return "import"
break;
case 6:return "from"
break;
case 7:return "endfunction"
break;
case 8:return "endwhile"
break;
case 9:return "endfor"
break;
case 10:return "endswitch"
break;
case 11:return "endif"
break;
case 12:return "function"
break;
case 13:return "continue"
break;
case 14:return "typeof"
break;
case 15:return "class"
break;
case 16:return 'const'
break;
case 17:return 78
break;
case 18:return 27
break;
case 19:return 79
break;
case 20:return "case"
break;
case 21:return 13
break;
case 22:return 34
break;
case 23:return 'yield'
break;
case 24:return 19
break;
case 25:return 14
break;
case 26:return 'break'
break;
case 27:return 'for'
break;
case 28:return 'var'
break;
case 29:return 'of'
break;
case 30:return 76
break;
case 31:return 26
break;
case 32:return 46
break;
case 33:return 65
break;
case 34:return 45
break;
case 35:return 49
break;
case 36:return 50
break;
case 37:return 47
break;
case 38:return 48
break;
case 39:return 55
break;
case 40:return 56
break;
case 41:return 53
break;
case 42:return 54
break;
case 43:return 52
break;
case 44:return 51
break;
case 45:return "!"
break;
case 46:return 36
break;
case 47:return 61
break;
case 48:return 41
break;
case 49:return 59
break;
case 50:return 42
break;
case 51:return 60
break;
case 52:return 40
break;
case 53:return 38
break;
case 54:return 58
break;
case 55:return 37
break;
case 56:return 39
break;
case 57:return 57
break;
case 58:return '^'
break;
case 59:return 71
break;
case 60:return 72
break;
case 61:return 66
break;
case 62:return 67
break;
case 63:return 44
break;
case 64:return 15
break;
case 65:return 17
break;
case 66:return 'instanceof'
break;
case 67:return 'in'
break;
case 68:return 22
break;
case 69:return 5
break;
case 70:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|\/\/+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:@)/,/^(?:import\b)/,/^(?:from\b)/,/^(?:endfunction\b)/,/^(?:endwhile\b)/,/^(?:endfor\b)/,/^(?:endswitch\b)/,/^(?:endif\b)/,/^(?:function\b)/,/^(?:continue\b)/,/^(?:typeof\b)/,/^(?:class\b)/,/^(?:const\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:case\b)/,/^(?:otherwise\b)/,/^(?:return\b)/,/^(?:yield\b)/,/^(?:while\b)/,/^(?:switch\b)/,/^(?:break\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:!=)/,/^(?:!)/,/^(?:=)/,/^(?:%)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\?)/,/^(?:\()/,/^(?:\))/,/^(?:instanceof\b)/,/^(?:in\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = octave_parser;
exports.Parser = octave_parser.Parser;
exports.parse = function () { return octave_parser.parse.apply(octave_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}