/**
 *
 * File name: index.js
 * Author: Zhen Di
 * Email: di3@wisc.edu
 *
 */

"use strict";

const TEXTAREA_MAX_HEIGHT = 400;
const DEFAULT_TIMEOUT = 3000;
const DEFAULT_REVERSE_ANIMATION_INTERVAL = 100;
const DEFAULT_PALINDROME_ANIMATION_INTERVAL = 200;

var stringManipulator = (function ($) {
    // public functions exposed to the event handlers
    const returnObj = {
        onReverseStringClicked: reverseString,
        onPalindromeCheckClicked: checkPalindrome,
        onShowJsonClicked: visualizeJson,
        textAreaAdjust: textAreaAdjust
    };

    function reverseString() {
        const $input = $('#input-reverse-string');

        if (!_validInput($input)) {
            return;
        }

        $input.prop('disabled', true);
        _disableAllButtons();
        _hideAllAlerts();

        var input = $input.val(), output = '';
        const $output = $('#output-reverse-string');
        const intervalID = setInterval(reverseStringAnimation, DEFAULT_REVERSE_ANIMATION_INTERVAL);

        function reverseStringAnimation() { // Animation to reverse the string
            if (input === '') {
                clearInterval(intervalID);
                $output.html(output);
                $output.addClass('good-general');  // make it all green
                $input.prop('disabled', false);
                _enableAllButtons();
                _showAlert(true, 'String reversal is finished.');
            }
            else {
                var outputHTML = '', lastChar = input.slice(-1); // get the last char

                input = input.slice(0, -1);// remove the last char
                $input.val(input);         // refresh the input text area
                outputHTML += '<span style="color:blue;">' + lastChar + '</span>';
                $output.html(output + outputHTML); // update the output label
                output += lastChar; // remember the output
            }
        }
    }

    function checkPalindrome() {
        const $input = $('#input-palindrome-checker');

        if (!_validInput($input)) {
            return;
        }

        $input.prop('disabled', true);
        _disableAllButtons();
        _hideAllAlerts();

        const $output = $('#output-palindrome-checker');
        const intervalID = setInterval(checkPalindromeAnimation, DEFAULT_PALINDROME_ANIMATION_INTERVAL);
        var input = $input.val(), leftHalf = '', rightHalf = '', isPalindrome = true;

        function checkPalindromeAnimation() {
            if (input.length <= 1) {
                clearInterval(intervalID);
                if (input.length === 1) input = _formSpan(input, 'good-general');
                $output.html(leftHalf + input + rightHalf);
                $input.prop('disabled', false);
                _enableAllButtons();
                if (isPalindrome) {
                    _showAlert(true, 'The given string is a palindrome.');
                } else {
                    _showAlert(false, 'The given string is not a palindrome.');
                }
            }
            else {
                var leftChar = input.charAt(0), rightChar = input.slice(-1);
                input = input.slice(1, -1); // remove the very first and the last char

                if (leftChar === rightChar) {
                    leftHalf += _formSpan(leftChar, 'good-general');
                    rightHalf = _formSpan(rightChar, 'good-general') + rightHalf;
                } else {
                    leftHalf += _formSpan(leftChar, 'bad-general');
                    rightHalf = _formSpan(rightChar, 'bad-general') + rightHalf;
                    isPalindrome = false;
                }
                $output.html(leftHalf + input + rightHalf);  // update the output label with color coded spans
            }
        }
    }

    function visualizeJson() {
        const $input = $('#input-json-visualizer');
        if (!_validInput($input)) {
            return;
        }

        _hideAllAlerts();

        const $output = $('#output-json-visualizer');
        const input = $input.val();
        $output.empty();  // remove the existing output to be safe
        var ul = $('<ul/>').appendTo($output), json; // create a root unordered list

        try {
            json = JSON.parse(input);
        }
        catch (err) {
            _showAlert(false, 'Invalid JSON format');
        }

        function traverse(jsonObj, listNode) { //level order traversal. I.E. DFS
            if (!jsonObj) {
                return;
            }

            $.each(jsonObj, function (key, value) {
                if (value !== null && typeof value === 'object') {
                    $('<li/>').text(key + ': ').appendTo(listNode);
                    var ul = $('<ul/>');
                    ul.appendTo(listNode);
                    traverse(value, ul);
                }
                else {
                    $('<li/>').text(key + ': ' + value).appendTo(listNode);
                }
            });
        }

        traverse(json, ul);
    }

    // Automatically expend or shrink the text area
    function textAreaAdjust(o) {
        o.style.height = '1px';
        var height = 25 + o.scrollHeight; // 25 for one more blank row

        o.style.height = (height) + 'px';
        if (height > TEXTAREA_MAX_HEIGHT) {
            o.style.height = TEXTAREA_MAX_HEIGHT + 'px';  // Max height
        }
    }


    function _formSpan(char, css) {
        return '<span class="' + css + '">' + char + '</span>';
    }

    function _hideAllAlerts() {
        $('.alert').hide();
    }

    function _showAlert(successAlert, message) {
        if (successAlert) {
            $('.alert').removeClass('alert-danger').addClass('alert-success').text(message).show();
        } else {
            $('.alert').removeClass('alert-success').addClass('alert-danger').text(message).show();
        }

        setTimeout(function () {
            _hideAllAlerts();
        }, DEFAULT_TIMEOUT);
    }

    function _disableAllButtons() {
        $('a.btn.btn-primary').addClass('disabled');
    }

    function _enableAllButtons() {
        $('a.btn.btn-primary').removeClass('disabled');
    }

    function _validInput($input) {
        if (!$input || !$input.val() || $input.val().trim().length === 0) {
            _showAlert(false, 'Please enter a non-empty string.');
            return false;
        } else {
            return true;
        }
    }

    return returnObj;
})($);