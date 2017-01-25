
    /*
    --------------------------------------------------------------------------------------

    @license
    ---
    скрипт: mini.lib v0.1  ~ январь 2016
    автор : ReSLeaR- (Korchevskiy Evgeniy)
    ---
    http://vk.com/reslear
    http://upost.su/
    ---

    ---------------------------------------------------------------------------------- */



    /* Парсинг html
    ------------------------------------------------------------------------------- */
    var parseHTML = function( html ){

        var template = document.implementation.createHTMLDocument('').documentElement;
            template.innerHTML = html;

        return template;
    }

    /* Установка массива атрибутов
    ------------------------------------------------------------------------------- */
    Element.prototype.attr = function( attributes ){
        var node = this;

        for( var key in attributes ) {
            node.setAttribute(key, attributes[key]);
        }

        return node;
    }

    /* Перебор элементов
    ------------------------------------------------------------------------------- */
    var nodeEach = function( nodes, callback ) {

        var options = Array.prototype.slice.call( arguments, 2 );

        for ( var i = 0; i < nodes.length; i++) {
            callback.apply( this, [nodes[i], i].concat(options) );
        }

    }


    /* Создать Родителя
    ------------------------------------------------------------------------------- */
    var createParent = function( tag, children ) {

        var parent = document.createElement( tag );
        var node = children.cloneNode( true );

        parent.appendChild( node );

        return parent;
    }


    /* Добавить events
    ------------------------------------------------------------------------------- */
    Element.prototype.events = function( events ) {
        var node = this;

        for( var key in events ) {
            node.addEventListener( key, events[key], false);
        };

        return node;
    }




    /* Функция для объединения Object
    ------------------------------------------------------------------------------- */
    function extend(obj, obj2) {

        for( var prop in obj2 ){
            obj[prop] = obj.hasOwnProperty(prop) && obj2[prop].constructor == Object ? extend(obj[prop], obj2[prop]) : obj2[prop];
        }

        return obj;
    }